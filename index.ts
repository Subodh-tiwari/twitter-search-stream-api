'use strict';

import * as Hapi from 'hapi';

import routes from './routes';

import plugins from './plugins';

import {twitterStream} from './utils';

import db from './config/mongodb/client';


const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route(routes);

server.register(plugins as any, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }
    server.start( () => {
        console.log(`Server started at ${server.info.uri}`);
        // start twitter filter streaming
        twitterStream();
    });
});