# Chirps

Simple Rails API + React/Redux frontend

## Installation

This project provides .ruby-version and .ruby-gemset files to isolate server
dependencies from the rest of your system. Install foreman manually in the
top-level directory, then bundle install within the `server` directory to
install API dependencies.

```
gem install foreman
yarn install
cd server
bundle install
bundle exec rake db:create db:migrate
cd ..
```

## Starting the Server

The Rails API will run on port 3000, while the frontend dev server will run on
port 8080.

```
foreman start
```

Browse to http://localhost:8080.

## Running the Tests

```
yarn test
```