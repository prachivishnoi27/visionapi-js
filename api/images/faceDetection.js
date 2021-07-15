// Face Detection detects multiple faces within an image along with the associated key facial attributes such as emotional state or wearing headwear
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
                            type: "FACE_DETECTION",
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
                            type: "FACE_DETECTION",
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