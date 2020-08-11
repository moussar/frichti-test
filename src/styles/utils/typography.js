/**
 * Typography
 */

const typography = ({
  fontSize = '1.6rem',
  lineHeight = 'normal',
  fontWeight = 400,
  textTransform = 'none',
  letterSpacing = 'normal',
} = {}) => `
  font: ${fontWeight} ${fontSize}/${lineHeight} 'Open Sans', 'Helvetica', 'Arial', sans-serif;
  letter-spacing: ${letterSpacing};
  text-transform: ${textTransform};
`;

export default typography;
