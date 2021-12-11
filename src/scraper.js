const request = require("./request");
const buildConfig = require("./buildConfig");
const { findLongLat } = require("./utils");

const search = async (options) => {
  return new Promise(async (resolve, reject) => {
    try {
      const zipcode = options.zipcode;
      const data = findLongLat(zipcode);

      if (!data)
        throw new Error(
          `No data related to this zipcode (${zipcode}) has been found.`
        );

      const { latitude, longitude } = data;
      const params = buildConfig(options);

      const config = {
        url: `https://api.us.castlighthealth.com/vaccine-finder/v1/provider-locations/search?medicationGuids=${params.vaccineTypeId}&lat=${latitude}&long=${longitude}&radius=${params.searchRadius}&appointments=${params.appointment}`,
      };

      const response = await request(config);

      resolve(response);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

const getLocationData = async (guid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const config = {
        url: `https://api.us.castlighthealth.com/vaccine-finder/v1/provider-locations/${guid}?inventoryCategory=covid`,
      };
      const result = await request(config);
      resolve(result);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

module.exports = {
  search,
  getLocationData,
};
