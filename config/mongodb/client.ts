'use strict'

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

import url from './config';

let connection = {
    isConnected: false,
    db: null
};

let db = null;

if (connection.isConnected == false) {
    MongoClient.connect(url, (err, conn) => {
        if (err) {
            throw err
        }
        connection.db = conn
        connection.isConnected = true
    });

};

export default connection;