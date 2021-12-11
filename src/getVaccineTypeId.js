const vaccineTypeMap = new Map([
  ["pfizer1", "25f1389c-5597-47cc-9a9d-3925d60d9c21"],
  ["pfizer2", "a84fb9ed-deb4-461c-b785-e17c782ef88b"],
  ["moderna", "779bfe52-0dd8-4023-a183-457eb100fccc"],
  ["Johnson", "784db609-dc1f-45a5-bad6-8db02e79d44f"],
]);

/**
 * @param {string} vaccineType
 * @returns
 */
module.exports = (vaccineType) => {
  return vaccineTypeMap.get(vaccineType);
};
