import { WebAuth, Management } from 'auth0-js';
import { updateAuthToken, updateSessionProfile } from '../actions/session';
import store from '../store';
import { getAuthToken } from '../selectors/session';

const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT,
  audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
  responseType: 'token',
  scope: 'openid profile create:current_user_metadata read:current_user update:current_user_metadata'
});

export const signup = (email, password, name, photo) => {
  return new Promise((resolve, reject) => {
    auth0.signup({
      connection: 'Username-Password-Authentication',
      email,
      password,
      username: email,
      user_metadata: {
        name,
        photo
      }
    }, err => {
      if(err) return reject(err);
      resolve();
    });
  });

};

export const login = () => auth0.authorize();

export const logout = () => auth0.logout();

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, authResult) => {
      if(err) return reject(err);

      if(authResult && authResult.accessToken) {
        store.dispatch(updateAuthToken(authResult.accessToken));
        getProfile(authResult.accessToken);
        return resolve(authResult.accessToken);
      }

      resolve(getAuthToken(store.getState()));
    });
  });
};

export const getProfile = (authToken) => {
  if(!authToken) return Promise.reject('No authToken in store');

  return new Promise((resolve, reject) => {
    const management = new Management({
      domain: process.env.AUTH0_DOMAIN,
      token: authToken
    });

    auth0.client.userInfo(authToken, (err, profile) => {
      if(err) return reject(err);
      management.getUser(profile.sub, (err, user) => {
        if(err) return reject(err);
        store.dispatch(updateSessionProfile(user, management));
        resolve(user);
      });
    });
  });
};

export const updateMetadata = metadata => {
  const { user, management } = store.getState().session;
  management.patchUserMetadata(user.user_id, metadata, (err, profile) => {
    console.log(profile);
  });
};
