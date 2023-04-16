interface MediaQueryProps {
  [key: string]: number;
}

export const breakpoints: MediaQueryProps = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mq = Object.keys(breakpoints).reduce<Record<string, string>>((accumulator, label) => {
  accumulator[label] = `@media screen and (min-width: ${breakpoints[label] / 16}em)`;
  return accumulator;
}, {});

export default mq;
