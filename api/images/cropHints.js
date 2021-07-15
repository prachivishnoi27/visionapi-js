// Crop Hints suggests vertices for a crop region on an image. 

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
                            type: "DOCUMENT_TEXT_DETECTION"
                        }
                    ],
                    imageContext: {
                        cropHintsParams: {
                          aspectRatios: [
                            2.0
                         ]
                        }
                    }
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
                            type: "DOCUMENT_TEXT_DETECTION"
                        }
                    ],
                    imageContext: {
                        languageHints: ["en-t-i0-handwrit"]
                    }
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