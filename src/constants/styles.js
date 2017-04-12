/* eslint-disable quote-props */
module.exports = {
  // Start with assigning color names to specific hex values.
  '$white': '#fff !default',
  '$black': '#000 !default',
  '$red': '#d9534f !default',
  '$orange': '#f0ad4e !default',
  '$yellow': '#ffd500 !default',
  '$green': '#73C82D !default',
  '$blue': '#0275d8 !default',
  '$teal': '#5bc0de !default',
  '$pink': '#ff5b77 !default',
  '$purple': '#613d7c !default',
  '$brand-another': '#FFC800 !default',
  // Create grayscale
  '$gray-dark': '#292b2c !default',
  '$gray': '#464a4c !default',
  '$gray-light': '#636c72 !default',
  '$gray-lighter': '#eceeef !default',
  '$gray-lightest': '#f8f8f8 !default',
  // Reassign color vars to semantic color scheme
  '$brand-primary': '$brand-another !default',
  '$brand-success': '$green !default',
  '$brand-info': '$teal !default',
  '$brand-warning': '$orange !default',
  '$brand-danger': '$red !default',
  '$brand-inverse': '$black !default',
  // Spacing
  '$spacer': '1rem !default',
  // Body
  '$body-bg': '$brand-another !default',
  '$body-color': '$gray-dark !default',
  '$inverse-bg': '$gray-dark !default',
  '$inverse-color': '$gray-lighter !default',
  // Grid breakpoints
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
  },
  // Grid containers
  '$container-max-widths': {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1240px',
  },
  // Fonts
  '$font-family-sans-serif': 'Comic Sans MS, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !default',
  '$font-family-serif': 'Georgia, "Times New Roman", Times, serif !default',
  '$font-family-monospace': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default',
  '$font-family-base': '$font-family-sans-serif !default',
  '$font-size-base': '0.9375rem !default', // Assumes the browser default, typically `16px`
};
