'use strict';

import db from './config/mongodb/client';

export const insertDocument = (data) => {
    db.db.collection('tweets').insertOne( data, (err, result) => {
     console.log("Inserted a document into the tweets collection.");
   });
};