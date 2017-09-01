Twitter Search Stream Api
-----------

API for filter tweets and store them in mongo db and fetch no of tweets per user and no of retweets of the tweet

Written in TypeScript

Prerequisites:
  * Environment Variables
    - MONGO_DB_HOST        # MongoDB host name
    - MONGO_DB_NAME        # DB name
    - CONSUMER_KEY         # Twitter consumer key
    - CONSUMER_SECRET      # Twitter consumer secret
    - ACCESS_TOKEN_KEY     # Twitter access token key
    - ACCESS_TOKEN_SECRET  # twitter access toke secret

Setup
-----

  **For development**

    npm install -g typescript typings
    npm install
    typings install

  **For running**

    npm install
    npm run dev
