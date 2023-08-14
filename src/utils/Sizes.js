// Contains media queries for responsive design.
import sizes from './Data';

const mediaQueries = {
  small: `(max-width: ${sizes.small})`,
  medium: `(min-width: ${sizes.small}) and (max-width: ${sizes.medium})`,
  large: `(min-width: ${sizes.medium}) and (max-width: ${sizes.large})`,
  extraLarge: `(min-width: ${sizes.large})`,
};

export { mediaQueries };
