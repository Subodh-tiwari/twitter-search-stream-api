/**
 * utils functions
 */

'use strict';

import twitterClient from './config/twitter/client';

import { insertDocument } from './controller';

export const twitterStream = () => {

    const stream = twitterClient.stream('statuses/filter', { track: 'blockchain,bitcoin' });
    stream.on('data', (event) => {
        if(event) {
            console.log(event);
            insertDocument(event);
        }
    });

    stream.on('error', (error) => {
        throw error;
    });

};