# CareDash

Take home assignment for CareDash.

## Tools
- [React](https://facebook.github.io/react/), the main front-end library
- [Express](https://expressjs.com/), web framework, used to serve the final build on Heroku or AWS
- [React Router](https://www.npmjs.com/package/react-router), the standard routing library for React
- [React Media](https://www.npmjs.com/package/react-media), manages media queries in React components
- [React Motion](https://github.com/chenglou/react-motion), fluid animations using real physics 
- [Spinkit](https://www.npmjs.com/package/better-react-spinkit), loading animation
- [Typist](https://github.com/jstejada/react-typist), configurable typing animations

## Demo
NOTE: Because GitHub has multiple buckets for each repository, React Router doesn't behave very well unless it's hosted independently on one bucket, therefore refreshing on any routes other than the homepage will result in a 404.

Demo [here](https://smorm.github.io/CareDash/)


## Host Locally

To host locally, you will need to have [node](https://nodejs.org/en/) or `npm`(which should be included when installing Node.js) installed

To get started, install the dependencies: `npm install`

Hosting the development server with: `npm start`

If a window doesn't automatically open, visit `localhost:3000`

### Hosting with Node and Express

Install dependencies: `npm install`
Host at port 5000(can be configured if needed in [server.js](https://github.com/sMorm/CareDash/blob/master/server.js)): `node server.js`

Visit: `localhost:5000` 



## Other Notes

The warning from the app deprecation is caused by `react-media` because the separation of PropTypes from React back in March, it has not yet been updated, but it is fully functional.
