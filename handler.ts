'use strict';

import {
    Request,
    ReplyNoContinue
} from 'hapi';

import db from './config/mongodb/client';


const handler = {
    getNoOfTweets(request: Request, reply: ReplyNoContinue) {
        let arr = [];
        const cursor = db.db.collection('tweets').aggregate([{ $group: { _id: "$user.screen_name", count: { $sum: 1 } } }]);
        cursor.each((err, doc) => {
            if (doc != null) {
                arr.push(doc);
            } else {
                reply(arr);
            }
        });
    },
    getSortedByRetweets(request: Request, reply: ReplyNoContinue) {
        let arr = [];
        const cursor = db.db.collection('tweets').aggregate([{ $sort: { retweet_count: 1 } }, { $project: { "user.screen_name": 1, "text": 1, "retweet_count": 1 } }]);
        cursor.each((err, doc) => {
            if (doc != null) {
                arr.push(doc);
            } else {
                reply(arr);
            }
        });
    }
};

export default handler;
