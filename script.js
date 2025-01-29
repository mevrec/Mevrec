document.addEventListener("DOMContentLoaded", function () {
  // Get the fonts folder path
  const fontsFolderPath = "fonts/";

  // Get all font files in the fonts folder
  const fontFiles = [
    "CynthoPro-Italic.otf",
    "CynthoPro-Bold.otf",
    "CynthoPro-Light.otf",
    "CynthoPro-Regular.otf",
    "Fontspring-DEMO-gibson-bold.otf",
    "Fontspring-DEMO-gibson-italic.otf",
    "Fontspring-DEMO-gibson-light.otf",
    "Fontspring-DEMO-gibson-regular.otf",
    // Add more font files here...
  ];

  // Generate the @font-face rules
  const fontFaceRules = fontFiles
    .map((fontFile) => {
      const fontName = fontFile.replace(".otf", "").replace(".ttf", "");
      return `
        @font-face {
          font-family: '${fontName}';
          src: url('${fontsFolderPath}${fontFile}') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `;
    })
    .join("\n");

  // Add the font-face rules to the stylesheet
  const stylesheet = document.styleSheets[0];
  stylesheet.insertRule(fontFaceRules, stylesheet.cssRules.length);
});
