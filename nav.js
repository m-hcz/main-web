const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    nav.style.transition = "transform 0.5s ease-in";
    // link animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) link.style.animation = "";
      else
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 8 + 0.5
        }s`;
    });

    // burger animation
    burger.classList.toggle("cross");
  });
};

navSlide();
