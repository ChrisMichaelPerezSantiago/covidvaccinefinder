const { getRadiusValue, getVaccineTypeId } = require("./utils");

module.exports = ({
  zipcode,
  radiusValue,
  vaccineType,
  appointment = true,
}) => ({
  zipcode,
  searchRadius: getRadiusValue(radiusValue),
  vaccineTypeId: getVaccineTypeId(vaccineType),
  appointment,
});
