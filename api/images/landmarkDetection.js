// Landmark Detection detects popular natural and human-made structures within an image.

const helper = require("../helper");

const getResBase64 = async (image) => {
    try {
        const data = {
            requests: [
                {
                    image: {
                        // image is in base64 format
                        content: image
                    },
                    features: [
                        {
                            type: "LANDMARK_DETECTION",
                            maxResults: 10
                        }
                    ]
                }
            ]
        };
        const res = await helper(data);
        return res;
    } catch (e) {
        console.error(e);
        return;
    }
}


const getResUri = async (image) => {
    try {
        const data = {
            requests: [
                {
                    image: {
                        // image uri
                        source: {
                            imageUri: image
                        }
                    },
                    features: [
                        {
                            type: "LANDMARK_DETECTION",
                            maxResults: 10
                        }
                    ]
                }
            ]
        };
        const res = await helper(data);
        return res;
    } catch (e) {
        console.error(e);
        return;
    }
}

module.exports = { getResBase64, getResUri};