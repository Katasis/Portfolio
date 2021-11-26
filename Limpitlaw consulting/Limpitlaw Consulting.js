const coreCompetencies = document.querySelector(".core-competencies");
const cch3 = document.querySelector(".core-competencies-h3");
const list = document.querySelector(".list");
const li = document.querySelectorAll(".list li");
const otherResources = document.querySelector(".otherResources");
const otherResourcesHeader = document.querySelector(".otherResourcesHeader");
const intro = document.querySelector(".intro");
const contents = document.querySelector(".contents");

// Contact-info related variables

const emailBtn = document.querySelector(".emailBtn");
const mobileBtn = document.querySelector(".mobileBtn");
const faxBtn = document.querySelector(".faxBtn");
const postBtn = document.querySelector(".postBtn");

// Display contact info onclick

emailBtn.addEventListener("click", function () {
  let email = document.querySelector(".email");
  email.style.visibility !== "visible"
    ? (email.style.visibility = "visible")
    : (email.style.visibility = "hidden");
});

mobileBtn.addEventListener("click", function () {
  let mobile = document.querySelector(".mobile");
  mobile.style.visibility !== "visible"
    ? (mobile.style.visibility = "visible")
    : (mobile.style.visibility = "hidden");
});

faxBtn.addEventListener("click", function () {
  let fax = document.querySelector(".fax");
  fax.style.visibility !== "visible"
    ? (fax.style.visibility = "visible")
    : (fax.style.visibility = "hidden");
});

postBtn.addEventListener("click", function () {
  let post = document.querySelector(".post");
  post.style.visibility !== "visible"
    ? (post.style.visibility = "visible")
    : (post.style.visibility = "hidden");
});

// Other resources accordion script

otherResourcesHeader.addEventListener("click", function () {
  if (
    otherResources.style.visibility !== "visible" &&
    otherResources.style.opacity !== 1
  ) {
    contents.style.marginBottom = "5rem";
    otherResources.style.visibility = "visible";
    otherResources.style.opacity = 1;
  } else {
    contents.style.marginBottom = "0rem";
    otherResources.style.visibility = "hidden";
    otherResources.style.opacity = 0;
  }
});

// coreCompetencies

cch3.addEventListener("click", function () {
  if (
    coreCompetencies.style.backgroundColor !== "#fefbf3" &&
    coreCompetencies.style.height !== "23rem"
  ) {
    coreCompetencies.style.backgroundColor = "inherit";
    coreCompetencies.style.height = "23rem";
    coreCompetencies.style.width = "33rem";
    cch3.classList.toggle("core-competencies-h3-a");
    cch3.classList.toggle("core-competencies-h3");

    // for loop of transition on li element; Fade-in fade-out animation.

    for (let i = 0; i < li.length; i++) {
      li[i].style.transition =
        "transform 500ms, opacity 2.1s 400ms, visibility 2.1s 300ms";
      li[i].style.visibility = "visible";
      li[i].style.opacity = 1;
    }
  } else {
    coreCompetencies.style.backgroundColor = "#1c1d16";
    coreCompetencies.style.width = "15rem";
    coreCompetencies.style.height = "4rem";
    cch3.classList.toggle("core-competencies-h3");
    cch3.classList.toggle("core-competencies-h3-a");

    // for loop of transition on li element; Fade-in fade-out animation.

    for (let i = 0; i < li.length; i++) {
      li[i].style.transition = "opacity 100ms 0s, visibility 100ms 0s";
      li[i].style.visibility = "hidden";
      li[i].style.opacity = 0;
    }
  }
});
