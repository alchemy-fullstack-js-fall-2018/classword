# Auth0

[auth0](https://auth0.com/docs/libraries/auth0js/v9) is a popular
authentication as a service provider. We'll use them to handle
user authentication for us.

Though auth0 handles a lot of security for us, there is a significant
amount of setup for us to handle in out app.

## Agenda

* Auth0
  * Can be used on both front-end and back-end
  * on the front-end we authenticate against the auth0 servers
  * on the back-end we check that the front-ends token is valid
    based on auth0
* Scaffold a basic react, react-redux, react-router-dom app
* `dotenv` setup
  * `dotenv-webpack` install
  * add `dotenv-webpack` to `webpack.config.js`
  * create a `.env` file
* Setup Auth0
  * create an account
  * find your auth0 domain and client_id
  * put auth0 domain and client_id into `.env`
  * add `AUTH0_REDIRECT=http://localhost:7890/callback`
    and whitelist in in the auth0 dashboard.
* create `src/services/auth.js
  * create a `new WebAuth({})`
    * use `domain`, `clientId`, `redirectUri`
    `audience`, `responesType: 'token`,
    `scope: 'openid'`
  * create `login` function uses `auth0.authorize()`
* Create `Home` component
  * add component to routes
* Create `Callback` component in  `src/components/auth/Auth.js`
  * add component to routes
* Create a login route with `render={() => login()}`
* Write `handleAuth` using `auth0.parseHash`
  * `handleAuth` should return a promise which resolves with the
    `accessToken` from auth0
  * use `handleAuth` in the `Callback` component
  * print the `accessToken`
* Write session actions/reducer/selector
  * initial state starts with an empty accessToken
  * Write action to `UPDATE_ACCESS_TOKEN`
  * Write selector to `getAccessToken`
  * `dispatch` the `UPDATE_ACCESS_TOKEN` action from `auth.js`
    * Note: you can import `store` from `store.js`
* Update `Callback` so it redirects to the home page after `handleAuth`
  * Note: use `history.push` and the `withRouter` higher order component
* Write a `getProfile` function using `auth0.client.userInfo`
  * `getProfile` should return a promise that resolves with a user
  * `getProfile` should immediately reject if the store does not have
    an `accessToken`
  * pass the access token to `auth0.client.userInfo`
* Write an `UPDATE_SESSION_USER` action
* Handle `UPDATE_SESSION_USER` in reducer
  * state should now include `accessToken` and `user`
  * `user` defaults to null
* add `getUser` selector
* Update `getProfile` to dispatch `UPDATE_SESSION_USER`
* Create a `Header` container (one file for presentation and data)
  * add links to home and login
  * use the `getUser` selector and pass that in as props (using `mapStateToProps`)
  * if the user is defined, display the `user.picture` as an image
* Create a new `Private` component
   * dispaly an `<h1>PRIVATE</h1>`
   * add it to router
* Write a `withAuth` higher order component
  * `withAuth` returns a `connected` container
  * if there is NOT an accessToken use `<Redirect />` to redirect to the login screen
  * if there is an accessToken return the passed in Component
* Use `withAuth`
  * in `ROUTES` wrap `Private` in `withAuth` `Component: withAuth(Private)`
  * the private route now requires auth
* BONUS
  * Custom signup page
  * Update user metadata

## Auth0

* auth0 on the [back-end](https://auth0.com/docs/quickstart/backend/nodejs/01-authorization)
* auth0 on the [front-end](https://auth0.com/docs/quickstart/spa/react)
