'use strict';
const { SuperfaceClient } = require('@superfaceai/one-sdk');

module.exports.run = async (event, context) => {
  try {
    console.log('cwd: ', process.cwd());
    const sdk = new SuperfaceClient();
    // Load the installed profile
    const profile = await sdk.getProfile('weather/current-city');

    // Use the profile
    const result = await profile.getUseCase('GetCurrentWeatherInCity').perform({
      city: 'Prague, Czech Republic',
      units: 'C',
    });

    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);
    console.log(result.unwrap());
  } catch (err) {
    console.log('ERROR', err);
    throw err;
  }
};
