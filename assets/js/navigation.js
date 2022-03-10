const header = document.getElementById("header");
// const logo = document.getElementById("logo");

window.addEventListener("scroll", function () {
  const scrolledQuantity = 200;

  if (
    document.body.scrollTop > scrolledQuantity ||
    document.documentElement.scrollTop > scrolledQuantity
  ) {
    // It will add the class
    header.classList.add("scrolled");

    // It will change the image source
    // logo.src = "assets/images/logo-orange-text.png";
  } else {
    // It will remove the class
    header.classList.remove("scrolled");

    // It will change the image source, back to normal
    // logo.src = "assets/images/logo-white-text.png";
  }
});
