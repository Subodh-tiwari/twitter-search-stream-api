'use strict';

// const config = {
//     consumer_key: 'pi0bFTetMEeN91bhurgr4mRFR',
//     consumer_secret: 'IqvDBqckEoulIoORvzaRxbW1U3zZht3BCPWfSTXn598SKmUFSI',
//     access_token_key: '4825739892-dtYl8aUOR8jvVLVWnouSuOV4Mk4QpMzRaXkDgSz',
//     access_token_secret: 'I6cdcjkBqJH8qpUGbTaX4ywbUe8pzRAkAFAGJmuLNT6ay'
// };

const config = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

console.log(config)

export default config;