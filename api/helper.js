const axios = require("axios");

const helper = async (data) => {
    try {
        const response = await axios({
            method: 'post',
            url: `https://vision.googleapis.com/v1/images:annotate?key=${process.env.API_KEY}`,
            data: data,
            headers: {
                ['Content-Type']: "application/json; charset=utf-8"
            }
        });
        return response;
    } catch (e) {
        return e;
    }
}

module.exports = helper;