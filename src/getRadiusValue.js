const radiusTypeMap = new Map([
  ["1000_MILES", 100],
  ["50_MILES", 50],
  ["25_MILES", 25],
  ["10_MILES", 10],
  ["5_MILES", 5],
]);

/**
 * @param {string} radiusType
 * @returns
 */
module.exports = (radiusType) => {
  return radiusTypeMap.get(radiusType);
};
