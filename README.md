# Setup

## Install deps

`npm install`


## Example config

`node-litemailer` loads its configs from a .env, which should NEVER be committed to Github, Heroku, etc. Below is a starting point for your local .env file but when deploying you will need to update your Heroku config vars under `Settings`.

```
GMAIL_USER=
GMAIL_PASS=
SENDGRID_API_KEY=
MANDRILL_API_KEY=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
HEROKU_URL=
```

At the very least, you will need to input your GMAIL_USER and GMAIL_PASS so that the default SMTP mailer will work.

## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
