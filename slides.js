document.addEventListener("DOMContentLoaded", function () {
  const article = document.querySelector("article");
  markdownToSlides(article);

  const navList = document.querySelector("nav ul");
  const sections = document.querySelectorAll("section");
  createMinis(navList, sections);

  let activeSection = sections[0];
  let manualActivation = false; // Manual activation flag to prevent conflicts during scrolling

  function toggleNav() {
    const nav = document.querySelector("nav");
    const aside = document.querySelector("aside");
    nav.classList.toggle("collapsed");
    aside.classList.toggle("collapsed");
    activateSection(activeSection, true);

    let times = [];
    for (let i = 0; i < 500; i += 25) {
      times.push(i);
    }
    function activeWithScroll() {
      activateSection(activeSection, true);
    }
    for (let ms of times) {
      setTimeout(activeWithScroll, ms);
    }
  }

  // Initialize the page

  let [sectionIndex, segmentNumber] = parseHash();
  initSections(sections, sectionIndex, segmentNumber);
  adjustBottomPadding(); // Ensure bottom padding is correct on load
  setupScrollActivation(); // Set up scroll-based section activation
  handleHashChange(); // Activate based on the initial hash
  window.addEventListener("hashchange", handleHashChange); // Handle hash changes

  let isScrolling;
  let lastPosition = window.scrollY;
  window.addEventListener("scroll", function () {
    // Clear the previous timeout
    clearTimeout(isScrolling);

    // Check if the scroll position has changed
    if (lastPosition !== window.scrollY) {
      lastPosition = window.scrollY;

      // Set a timeout to detect if scrolling has stopped
      isScrolling = setTimeout(function () {
        manualActivation = false;
      }, 50); // The timeout duration can be adjusted
    }
  });

  document.addEventListener("keydown", function (ev) {
    console.log("Global event:", ev.key, ev.code);
    if (ev.key === "Escape") {
      toggleNav();
      return;
    }

    let isModifierPressed =
      ev.shiftKey || ev.ctrlKey || ev.altKey || ev.metaKey;
    if (isModifierPressed) {
      return;
    }

    if (ev.key === "n") {
      toggleNav();
      return;
    }

    if (ev.key === "f") {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
      toggleNav();
      return;
    }
  });

  // ======================== COMPONENTS ========================== //

  // Component 0: Markdown to Slides
  function markdownToSlides(article) {
    const slides = [];
    console.log("First Slide");
    let currentSlide = null;
    let currentCount = 0;

    let nodeList = Array.from(article.childNodes);
    for (let node of nodeList) {
      if (!currentSlide) {
        console.log("Next Slide");
        currentCount = 0;
        currentSlide = document.createElement("section");
        slides.push(currentSlide);
      }

      if (node.tagName === "HR") {
        // When an <hr> is encountered, finalize the current slide
        if (currentCount === 0) {
          currentSlide.textContent = "(this slide unintentionally left blank)";
        }
        currentSlide = null;
        continue;
      }

      // move the node to the current slide
      console.log("  section child", node);
      currentSlide.appendChild(node);
      let text = node.textContent.trim();
      if (text.length > 0) {
        currentCount += 1;
      }
    }
    if (currentSlide) {
      if (currentCount === 0) {
        currentSlide.textContent = "(this slide unintentionally left blank)";
      }
    }

    article.textContent = "";
    slides.forEach((slide) => {
      article.appendChild(slide);
    });
  }

  function createMinis(navList, sections) {
    sections.forEach(function (section, index) {
      let sectionHeader = `Untitled (${index})`;
      for (let child of section.childNodes) {
        let text = child.textContent.trim();
        if (text) {
          sectionHeader = text;
          break;
        }
      }

      // Create an <ol> element for navigation
      const navItem = document.createElement("ol");
      navItem.textContent = sectionHeader;
      navItem.onclick = function () {
        activateSectionManual(sections[index]);
      };

      // Clone the section for the miniature and adjust for miniature display
      const miniatureSection = document.createElement("div");
      miniatureSection.classList.add("miniature");

      const miniatureContent = section.cloneNode(true);
      miniatureContent.classList.add("miniature-content");

      miniatureSection.appendChild(miniatureContent);

      // Add the miniature section to the nav item
      navItem.appendChild(miniatureSection);

      // Add the nav item to the list
      navList.appendChild(navItem);
    });
  }

  // Component 1: Section Management
  function initSections(sections, sectionIndex, segmentNumber) {
    sections.forEach(function (section, i) {
      let currentHighlight = 0;
      if (sectionIndex === i) {
        currentHighlight = segmentNumber;
      }
      setupCarousel(section, currentHighlight);
    });
    setupGlobalKeyListeners(); // Handle up/down/space key navigation
    setupResizeListener(); // Add listener for window resizing
  }

  function activateSectionManual(section) {
    manualActivation = true;
    activateSection(section, true); // Scroll into view when clicked
    updateHash(section); // Update hash based on selection
  }

  function activateSection(section, shouldScroll) {
    if (activeSection) {
      activeSection.classList.remove("active");
    }
    activeSection = section;
    activeSection.classList.add("active");

    // Scroll into view if required (but only for manual activation, not scroll activation)
    if (shouldScroll) {
      activeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // Component 2: Carousel Navigation (dimming/focusing lines, arrow key navigation)
  function setupCarousel(section, sectionNumber = 0) {
    const carousel = section.querySelector("carousel");
    if (!carousel) {
      return;
    }
    const $pre = section.querySelector("pre");
    const $code = $pre.querySelector("code");
    const startCountAt = Number(carousel.getAttribute("data-line-start")) || 1;
    const carouselSegemnts = carousel.getAttribute("data-slides").split(/[|;]/);
    Prism.highlightAll();
    wrapLinesWithNumbers($pre, $code, startCountAt);

    let currentHighlight = sectionNumber;

    // Function to navigate to a specific carousel segment (1-indexed)
    section.gotoSegment = function (segmentNumber) {
      if (!segmentNumber) {
        segmentNumber = 0;
      }
      console.log("segmentNumber 1:", segmentNumber);
      let segmentIndex = segmentNumber - 1;
      if (!segmentIndex) {
        segmentIndex = 0;
      }

      console.log("segmentIndex 2:", carouselSegemnts.length, segmentIndex);
      let segmentGroup = carouselSegemnts[segmentIndex];
      let segmentRanges = parseSlideRanges(segmentGroup);
      applyLineFocus($pre, startCountAt, segmentRanges);
    };

    section.gotoSegment(currentHighlight);

    document.addEventListener("keydown", function (e) {
      if (section !== activeSection) {
        return;
      }

      if (e.key === "ArrowRight") {
        currentHighlight += 1;
      } else if (e.key === "ArrowLeft") {
        currentHighlight -= 1;
      } else {
        return;
      }

      currentHighlight = Math.max(0, currentHighlight);
      currentHighlight = Math.min(
        carouselSegemnts.length + 1,
        currentHighlight,
      );

      console.log("new segment index", currentHighlight);
      if (currentHighlight > 0) {
        console.log("arrow right hash");
        updateHash(section, currentHighlight);
      } else {
        console.log("arrow left hash");
        updateHash(section);
      }

      section.gotoSegment(currentHighlight);
    });
  }

  function wrapLinesWithNumbers($pre, $code, startLine) {
    startLine -= 1;

    let html = $code.innerHTML.trim();
    let lines = html.split("\n");

    let $ol = document.createElement("ol");
    $ol.style.counterReset = `line-number ${startLine}`;
    for (let line of lines) {
      let $li = document.createElement("li");
      $li.innerHTML = line;
      $ol.appendChild($li);
    }

    $pre.innerHTML = "";
    $pre.appendChild($ol);
  }

  function applyLineFocus(pre, startCountAt, selectedLineNumbers) {
    let wild = selectedLineNumbers.length === 0;
    const lines = pre.querySelectorAll("ol li");
    lines.forEach((line, index) => {
      let lineNumber = index + startCountAt;
      let selected = wild || selectedLineNumbers.includes(lineNumber);
      if (selected) {
        line.classList.add("focused");
        line.classList.remove("dimmed");
      } else {
        line.classList.add("dimmed");
        line.classList.remove("focused");
      }
    });
  }

  function parseSlideRanges(slideRange) {
    if (!slideRange) {
      return [];
    }

    slideRange = slideRange.trim();
    const ranges = slideRange.split(/[,\s]+/);
    console.log("ranges:", `'${slideRange}'`, ranges);

    let selectedLines = [];
    for (let range of ranges) {
      if (range.includes("-")) {
        let [start, end] = range.split("-").map(Number);
        for (let i = start; i <= end; i += 1) {
          selectedLines.push(i);
        }
      } else {
        selectedLines.push(Number(range));
      }
    }

    return selectedLines;
  }

  // Component 3: Scroll-based Section Activation (activate section on scroll)
  function setupScrollActivation() {
    window.addEventListener("scroll", function () {
      if (manualActivation) {
        return; // Skip scroll-based activation during manual actions
      }

      const scrollY = window.scrollY;
      let newActiveSection = null;

      sections.forEach(function (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is sufficiently in view (using 50% of its height)
        if (
          scrollY >= sectionTop - sectionHeight * 0.5 &&
          scrollY < sectionTop + sectionHeight * 0.5
        ) {
          newActiveSection = section;
        }
      });

      // Activate the new section, but don't scroll to it (shouldScroll = false)
      if (newActiveSection && newActiveSection !== activeSection) {
        activateSection(newActiveSection, false); // No scrolling when activating via scroll
        updateHash(newActiveSection);
      }
    });
  }

  // Component 4: Global Key Listeners for Section Navigation (up, down, spacebar)
  function setupGlobalKeyListeners() {
    let nextKeys = [/*"ArrowDown",*/ " "];
    let prevKeys = [/*"ArrowUp",*/ "Backspace", "Delete"];
    let specialKeys = [].concat(nextKeys, prevKeys);

    window.addEventListener("keydown", function (e) {
      let isSpecialKey = specialKeys.includes(e.key);
      if (isSpecialKey) {
        e.preventDefault(); // Disable default scroll behavior
      }

      let currentIndex = Array.from(sections).indexOf(activeSection);

      let isNextKey = nextKeys.includes(e.key);
      if (isNextKey) {
        currentIndex += 1;
        if (currentIndex >= sections.length) {
          currentIndex = sections.length - 1;
        }
        activateSectionManual(sections[currentIndex]);
        return;
      }

      let isPrevKey = prevKeys.includes(e.key);
      if (isPrevKey) {
        currentIndex -= 1;
        if (currentIndex < 0) {
          currentIndex = 0;
        }
        activateSectionManual(sections[currentIndex]);
        return;
      }
    });
  }

  // Component 5: Dynamic Padding for Final Section
  function setupResizeListener() {
    window.addEventListener("resize", adjustBottomPadding);
  }

  function adjustBottomPadding() {
    let dynamicPaddingElement = document.querySelector(".dynamic-padding");
    if (!dynamicPaddingElement) {
      dynamicPaddingElement = document.createElement("div");
      dynamicPaddingElement.classList.add("dynamic-padding");
      dynamicPaddingElement.style.height = 0;
      article.appendChild(dynamicPaddingElement);
    }
    const lastSection = sections[sections.length - 1];
    const viewportHeight = window.innerHeight;
    const sectionHeight = lastSection.offsetHeight;

    // Calculate the required padding to align the last section's title at the top
    const neededPadding = Math.max(0, viewportHeight - sectionHeight);
    dynamicPaddingElement.style.height = `${neededPadding}px`;
  }

  // Component 6: Hash-Based Routing (section and carousel navigation)
  function handleHashChange() {
    let [sectionIndex, segmentNumber] = parseHash();
    hastToState(sectionIndex, segmentNumber);
  }
  function parseHash() {
    let hash = window.location.hash.substring(1); // Get hash without '#'
    console.log("###### the hash change", hash);
    let [sectionNumber, segmentNumber] = hash.split(".").map(Number);

    // Handle section selection (clamp to valid range)
    let lastOrCurrentSection = Math.min(
      sections.length - 1,
      (sectionNumber || 1) - 1,
    );
    let sectionIndex = Math.max(0, lastOrCurrentSection);

    console.log("hashChange", sectionNumber, segmentNumber);
    return [sectionIndex, segmentNumber];
  }
  function hastToState(sectionIndex, segmentNumber) {
    let targetSection = sections[sectionIndex];
    activateSection(targetSection, true);
    // updateHash(newActiveSection);

    if (targetSection.gotoSegment) {
      targetSection.gotoSegment(segmentNumber);
    }
  }

  // Component 7: Update Hash without Triggering Hashchange
  function updateHash(section, slideNumber = 0) {
    let _sections = Array.from(sections);
    let sectionIndex = 1 + _sections.indexOf(section); // 1-indexed
    let hash = `#${sectionIndex}`;
    if (slideNumber) {
      hash = `${hash}.${slideNumber}`;
    }
    history.replaceState(null, null, hash); // Update hash without triggering hashchange
  }
});
