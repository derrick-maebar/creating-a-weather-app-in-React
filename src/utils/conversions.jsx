export const cToF = (c) => Math.round((c * 9) / 5 + 32);

export const formatTemp = (tempC, isMetric) => {
  const temp = isMetric ? tempC : cToF(tempC);
  return `${temp}°${isMetric ? "C" : "F"}`;
};
