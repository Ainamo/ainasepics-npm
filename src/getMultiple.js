const makeGetRequest = require('./makeGetRequest');
const Constants = require('./util/Constants');

module.exports = async function (options) {
    return new Promise((resolve, reject) => {
        if (typeof options === 'string') options = { name: options, limit: 1 };

        if (!options.name || !/^[a-z]+$/gm.test(options.name)) return reject(new TypeError("[Ainasepics] - Missing or invalid name of image or gif to get."));
        options.name = options.name.toLowerCase();

        if (!options.limit) options.limit = 1;
        if(isNaN(options.limit) || options.limit <= 0) return reject(new TypeError('[Ainasepics] - Invalid limit at MultipleGetOptions. It must be a valid number!'));

        options.limit = parseInt(options.limit);
        if(options.limit > 5) return reject(new TypeError('[Ainasepics] - The limit at MultipleGetOptions must not be over 5.'));

        makeGetRequest(Constants.Endpoints.GetResource, { name: options.name, limit: options.limit })
        .then((response) => {
            if (response.status !== 200) return reject(new Error(response.data.detail));
            resolve({ results: response.data });
        })
        .catch(reject);
    });
}


