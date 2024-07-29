document.addEventListener("DOMContentLoaded", () => {
  const navbarBg = document.getElementById("navbarBg");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    const maxNavbarBgScroll = window.innerHeight * 0.3;
    const navbarBgOpacity = Math.min(scrollPosition / maxNavbarBgScroll, 1);
    navbarBg.style.opacity = navbarBgOpacity;

    //? Jika diaktifkan, tombol di pojok kanan bawah akan tidak fixed / berada di paling bawah halaman..
    // const maxBodyScroll = window.innerHeight;
    // const brightness = 1 - Math.min(scrollPosition / maxBodyScroll, 1) * 0.5;
    // document.body.style.backdropFilter = `brightness(${brightness})`;

    if (scrollPosition > 0) {
      scrollUpButton.classList.add("inline-flex");
      scrollUpButton.classList.remove("hidden");
    } else {
      scrollUpButton.classList.remove("inline-flex");
      scrollUpButton.classList.add("hidden");
    }
  });

  const carousel = document.getElementById("carousel");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  prev.addEventListener("click", () => {
    carousel.scrollBy({
      top: 0,
      left: -1 * 250,
      behavior: "smooth",
    });
  });

  next.addEventListener("click", () => {
    carousel.scrollBy({
      top: 0,
      left: 250,
      behavior: "smooth",
    });
  });

  const scrollUpButton = document.getElementById("scroll-up");

  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
