'use strict';

import {
    RouteConfiguration
} from 'hapi';

import handler from './handler';

const routes: RouteConfiguration[] = [
    {
        method: "GET",
        path: "/getnooftweets",
        handler: handler.getNoOfTweets
    },
    {
        method: "GET",
        path: "/getsortedretweets",
        handler: handler.getSortedByRetweets
    }
];

export default routes;
