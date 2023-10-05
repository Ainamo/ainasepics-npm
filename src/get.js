const makeGetRequest = require('./makeGetRequest');
const Constants = require('./util/Constants');

module.exports = async function (name) {
    return new Promise(async (resolve, reject) => {
        if (!name || !/^[a-z]+$/gm.test(name)) return reject(new TypeError('[Ainasepics] - Missing or invalid name of image or gif to get.'));
        name = name.toLowerCase();
        
        makeGetRequest(Constants.Endpoints.GetResource, { name })
        .then(res => {
            if (res.status !== 200) return reject(new Error(res.data.detail));
            resolve(res.data);
        })
        .catch(reject);
    });
}