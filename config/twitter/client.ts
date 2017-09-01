'use strict';

const Twitter = require('twitter');

import config from './config';

const twitterClient = new Twitter(config);

export default twitterClient;