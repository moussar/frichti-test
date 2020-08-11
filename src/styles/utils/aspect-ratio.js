/**
 * Aspect ratio
 */

const calcAspectRatio = ({ width, height, offset = 2 }) => {
  // eslint-disable-next-line no-restricted-properties
  const sensibility = Math.pow(10, (2 + offset));
  return `${((Math.round((height / width) * sensibility) / sensibility) * 100)}%`;
};

export default calcAspectRatio;
