const https = require('node:https');

/**
 * 
 * @param {string} route 
 * @param {object} params 
 */
module.exports = async function makeGetRequest(route, params) {
    return new Promise((resolve, reject) => {
        const qs = new URLSearchParams(params).toString();
        const req = https.request({
            hostname: 'ainasepics-api.onrender.com',
            port: 443,
            path: `/api/v2${route}?${qs}`,
            method: 'GET'
        }, (res) => {
            let b = "";
            res.on('data', d => {
                b += d;
            });
            res.on('end', () => {
                try {
                    let parsed = JSON.parse(b);
                    resolve({
                        status: res.statusCode,
                        data: parsed
                    });
                } catch(e) { reject(e); }
            });
        });
        req.on('error', reject);
        req.end();
    });
}