export default function toggleTheme(style) {

  const GREY = 'rgb(52, 52, 52)';
  const WHITE = 'rgb(255, 255, 255)';
  const GREEN = 'rgb(31,94,108)';
  const LIGHT_BLUE = 'rgb(173,216,230)';
  const PURPLE = 'rgb(104, 86, 122)';
  const GRADIENT = 'linear-gradient(to left, #355c7d, #6c5b7b, #c06c84)';

  switch (style) {
    case "dark":
      activateThemeStyle(GREY, WHITE, GREEN);
      break;
    case "light":
      activateThemeStyle(WHITE, GREY, LIGHT_BLUE);
      break;
    case "gradient":
      activateThemeStyle(GRADIENT, WHITE, PURPLE);
      break;
    default:
      // light theme
      activateThemeStyle(WHITE, GREY, LIGHT_BLUE);
  }
  localStorage.setItem('theme', style);
}


function activateThemeStyle(backgroundColor, fontColor, selectionColor) {
  document.documentElement.style
    .setProperty('--main-color-background', backgroundColor);
  document.documentElement.style
    .setProperty('--main-color-font', fontColor);
  document.documentElement.style
    .setProperty('--main-color-selected', selectionColor);
}
