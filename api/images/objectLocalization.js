// Detect objects from image

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
                            type: "OBJECT_LOCALIZATION",
                            maxResults: 2
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
                            type: "OBJECT_LOCALIZATION",
                            maxResults: 2
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