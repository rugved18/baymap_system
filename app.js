function showWelcomeMessage() {
  var welcomeDiv = document.querySelector(".before-loading");
  if (welcomeDiv) {
    welcomeDiv.style.display = "block";
    setTimeout(function () {
      welcomeDiv.style.display = "none";
    }, 3000);
  }
}
window.addEventListener("load", showWelcomeMessage);
$(document).ready(function () {
  // Initialize home-slider
  var homeSlider = $("#home-slider .bxslider").bxSlider({
    mode: "vertical",
    controls: false,
    pager: false,
    adaptiveHeight: true,
    infiniteLoop: false,
    useCSS: false,
  });

  // Initialize people-slider
  var peopleSlider = $("#people-slider .bxslider").bxSlider({
    mode: "vertical",
    controls: false,
    pager: false,
    adaptiveHeight: true,
    infiniteLoop: false,
    useCSS: false,
  });

  // Initialize research-slider
  var researchSlider = $("#research-slider .bxslider").bxSlider({
    mode: "vertical",
    controls: false,
    pager: false,
    adaptiveHeight: true,
    infiniteLoop: false,
    useCSS: false,
  });

  // Initialize connect-slider
  var connectSlider = $("#connect-slider .bxslider").bxSlider({
    mode: "vertical",
    controls: false,
    pager: false,
    adaptiveHeight: true,
    infiniteLoop: false,
    useCSS: false,
  });

  // Handle menu item clicks
  $(".menu-item").on("click", function (e) {
    e.preventDefault();
    var targetId = $(this).data("target");

    // Hide all sliders
    $(".slider-wrapper").hide();

    // Show the selected slider
    $("#" + targetId).show();

    // Handle slider initialization based on the clicked menu item
    if (targetId === "home-slider") {
      homeSlider.reloadSlider();
      peopleSlider.destroySlider();
      researchSlider.destroySlider();
      connectSlider.destroySlider();
    } else if (targetId === "people-slider") {
      homeSlider.destroySlider();
      peopleSlider.reloadSlider();
      researchSlider.destroySlider();
      connectSlider.destroySlider();
    } else if (targetId === "research-slider") {
      homeSlider.destroySlider();
      peopleSlider.destroySlider();
      researchSlider.reloadSlider();
      connectSlider.destroySlider();
    } else if (targetId === "connect-slider") {
      homeSlider.destroySlider();
      peopleSlider.destroySlider();
      researchSlider.destroySlider();
      connectSlider.reloadSlider();
    }
  });

  // Handle mouse wheel scrolling
  var currentSlider;
  $(window).on("wheel", function (e) {
    if (currentSlider === "home-slider") {
      if (e.originalEvent.deltaY > 0) {
        homeSlider.goToNextSlide();
      } else {
        homeSlider.goToPrevSlide();
      }
    } else if (currentSlider === "people-slider") {
      if (e.originalEvent.deltaY > 0) {
        peopleSlider.goToNextSlide();
      } else {
        peopleSlider.goToPrevSlide();
      }
    } else if (currentSlider === "research-slider") {
      if (e.originalEvent.deltaY > 0) {
        researchSlider.goToNextSlide();
      } else {
        researchSlider.goToPrevSlide();
      }
    } else if (currentSlider === "connect-slider") {
      if (e.originalEvent.deltaY > 0) {
        connectSlider.goToNextSlide();
      } else {
        connectSlider.goToPrevSlide();
      }
    }
  });

  $(".menu-item").on("click", function (e) {
    e.preventDefault();
    var targetId = $(this).data("target");
    currentSlider = targetId;
    $(".slider-wrapper").hide();
    $("#" + targetId).show();
  });

  $('.menu-item[data-target="home-slider"]').trigger("click");
  var isFormOpen = false;
  $("#connect-btn").click(function (e) {
    e.preventDefault();
    toggleContactForm();
  });

  $("#overlay-close").click(function (e) {
    e.preventDefault();
    toggleContactForm();
  });

  function toggleContactForm() {
    isFormOpen = !isFormOpen;
    document.querySelector("#contact").setAttribute("aria-hidden", !isFormOpen);
    document.getElementById("contact").classList.toggle("noscroll", isFormOpen);
    $("#contact").css({ "z-index": "222" }).animate({ height: "toggle" }, 1e3);
  }
  if ($("#contact").attr("aria-hidden") === "true") {
    $("#contact").hide();
  }
  $("#contact").on("DOMAttrModified", function () {
    if ($(this).attr("aria-hidden") === "true") {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
});
// Remove this JavaScript code
$(document).ready(function () {
  var currentUrl = window.location.href;

  $(".nav-links a").each(function () {
    var linkUrl = $(this).attr("href");

    if (currentUrl.indexOf(linkUrl) !== -1) {
      $(this).addClass("active");
    }
  });
});
$(document).ready(function () {
  $(".menu-item").click(function (e) {
    e.preventDefault();
    $(".menu-item").removeClass("active");
    $(this).addClass("active");
  });
});
