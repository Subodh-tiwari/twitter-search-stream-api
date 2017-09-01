/**
 * utils functions
 */

'use strict';

import twitterClient from './config/twitter/client';

import { insertDocument } from './controller';

export const twitterStream = () => {

    const stream = twitterClient.stream('statuses/filter', { track: 'blockchain' });
    stream.on('data', (event) => {
        if(event) {
            insertDocument(event);
        }
    });

    stream.on('error', (error) => {
        throw error;
    });

};