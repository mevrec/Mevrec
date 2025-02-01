document.addEventListener("DOMContentLoaded", function () {
  const fontsFolderPath = "fonts/";

  const fontFiles = [
    "CynthoPro-Italic.otf",
    "CynthoPro-Bold.otf",
    "CynthoPro-Light.otf",
    "CynthoPro-Regular.otf",
    "Fontspring-DEMO-gibson-bold.otf",
    "Fontspring-DEMO-gibson-italic.otf",
    "Fontspring-DEMO-gibson-light.otf",
    "Fontspring-DEMO-gibson-regular.otf",
  ];

  // Menambahkan font ke dalam CSS
  const stylesheet = document.styleSheets[0];

  fontFiles.forEach((fontFile) => {
    const fontName = fontFile.replace(/\.(otf|ttf)$/, ""); // Hapus ekstensi
    const fontRule = `
      @font-face {
        font-family: '${fontName}';
        src: url("${fontsFolderPath}${fontFile}") format("opentype");
        font-weight: normal;
        font-style: normal;
      }
    `;

    stylesheet.insertRule(fontRule, stylesheet.cssRules.length);
  });

  // Memuat navigasi dari nav.html
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      const navPlaceholder = document.getElementById("nav-placeholder");
      if (navPlaceholder) {
        navPlaceholder.innerHTML = data;
      } else {
        console.error("Element #nav-placeholder tidak ditemukan!");
      }
    })
    .catch((error) => console.error("Gagal memuat navigasi:", error));

  // Function to open the lightbox
  window.openLightbox = function (img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.alt;
    currentIndex = Array.from(images).indexOf(img);
    document.body.classList.add("lightbox-active");

    // Hide the navigation bar
    document.getElementById("nav-placeholder").style.display = "none";
  };

  window.closeLightbox = function () {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    document.body.classList.remove("lightbox-active");

    // Show the navigation bar
    document.getElementById("nav-placeholder").style.display = "block";
  };

  window.changeImage = function (direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    lightboxImg.src = images[currentIndex].src;
    lightboxCaption.textContent = images[currentIndex].alt;
  };

  // Existing code for scrolling functionality
  const container = document.querySelector(".illustration-container");
  document.getElementById("prev").addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
  });
  document.getElementById("next").addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
  });

  // Existing code for lightbox functionality
  let images = document.querySelectorAll(".illustration img");
  let lightbox = document.getElementById("lightbox");
  let lightboxImg = document.getElementById("lightbox-img");
  let lightboxCaption = document.getElementById("lightbox-caption");
  let currentIndex = 0;
});
