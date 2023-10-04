// sidebar part
// 1- catch elements => i(right-caret-icon) && ul
let caretIcon = document.querySelector(".rightCaret");
let uList = document.querySelector(".uList");
let testCaretIconClicked = false;

caretIcon.addEventListener("click", e => {
  if (e.pointerType === "touch") {
    uList.style.display = "block";
    caretIcon.style.display = "none";
    testCaretIconClicked = true;
  }
});

window.addEventListener("click", event => {
  if (!event.target.classList.contains("rightCaret")) {
    uList.style.display = "none";
    caretIcon.style.display = "block";
  }
});

// active id settings (when click on any li ele give it class active)
let anchorLinks = document.querySelectorAll("ul a");

anchorLinks.forEach(link => {
  link.addEventListener("click", _ => {
    anchorLinks.forEach(ele => {
      ele.removeAttribute("id"); // Remove the "active" ID from all elements
    });
    link.setAttribute("id", "active"); // Set the "active" ID to the clicked element
  });
});

// start header bg-color changing while scroll bigger than
window.addEventListener("scroll", _ => {
  if (window.scrollY >= 100) {
    document.querySelector(".main_nav").style.background = "#36454F";
  } else {
    document.querySelector(".main_nav").style.background = "unset";
  }
});

// start animated numbers in js
let counters = document.querySelectorAll(".counter .cr");
counters.forEach(counter => {
  let incrementCount = 1;
  let time = setInterval(animatedCounter, 30);

  function animatedCounter() {
    incrementCount++;
    counter.innerHTML = incrementCount;

    switch (true) {
      case counter.classList.contains("counter_1") && incrementCount === 232:
        clearInterval(time);
        break;
      case counter.classList.contains("counter_2") && incrementCount === 521:
        clearInterval(time);
        break;
      case counter.classList.contains("counter_3") && incrementCount === 1453:
        clearInterval(time);
        break;
      case counter.classList.contains("counter_4") && incrementCount === 32:
        clearInterval(time);
        break;
      default:
        // Default case
        break;
    }
  }
});

// portfolio js
// catching barBtns & filterableImages
let allBtns = document.querySelectorAll(".portf_lower_part .btnsBar button");
let filterableImages = document.querySelectorAll(".portf_lower_part .filterableImages .img");

allBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    document.querySelector(".activeBtns").classList.remove("activeBtns");
    e.target.classList.add("activeBtns");

    filterableImages.forEach(photo => {
      if (photo.dataset.name.includes(e.target.dataset.filter) || e.target.dataset.filter === "all") {
        photo.style.display = "block";
      } else {
        photo.style.display = "none";
      }
    });
  });
});

// controlling top arrow
let topArrow = document.querySelector(".top a");

window.addEventListener("scroll", _ => {
  if (window.scrollY > 984) {
    topArrow.style.zIndex = "1000";
  } else {
    topArrow.style.zIndex = "";
  }
});
// scroll spy
// Scroll spy
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    let top = section.offsetTop - 50;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (window.scrollY >= top && window.scrollY < top + height) {
      anchorLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        navLink.removeAttribute("id","active");
      });

      document.querySelector(`nav ul li a[href="#${id}"]`).classList.add("active");
    }
  });
});