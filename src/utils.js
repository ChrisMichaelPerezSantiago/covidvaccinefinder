const getVaccineTypeId = require("./getVaccineTypeId");
const getRadiusValue = require("./getRadiusValue");
const zipcodeJSON = require("./json/uszipcode");

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const zipcodesList = zipcodeJSON.map((prop) => ({
  ...prop,
  zip_code:
    prop.state === "PR" || prop.state === "NY" || prop.state === "VI"
      ? `00${prop.zip_code}`
      : prop.zip_code,
}));

const findLongLat = (zipcode) => {
  return zipcodesList.find((prop) => prop.zip_code === zipcode);
};

module.exports = {
  pipe,
  getRadiusValue,
  getVaccineTypeId,
  findLongLat,
};
