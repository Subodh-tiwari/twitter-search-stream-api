'use strict';

const host = process.env.MONGO_DB_HOST;
const db = process.env.MONGO_DB_NAME;

const url = `mongodb://${host}:27017/${db}`;

export default url;