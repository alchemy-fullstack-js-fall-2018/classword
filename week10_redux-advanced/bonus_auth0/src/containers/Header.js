import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../selectors/session';
import { ROUTES } from '../routes';

const Header = ({ user }) => {
  return (
    <header>
      <nav>
        <Link to={ROUTES.HOME.linkTo()}>HOME</Link>
        {!user && <Link to={ROUTES.LOGIN.linkTo()}>Login</Link>}
        {!user && <Link to={ROUTES.SIGNUP.linkTo()}>Signup</Link>}
        {user && <Link to={ROUTES.ARTISTS.linkTo()}>Artists</Link>}
      </nav>
      {user && <img src={(user.user_metadata && user.user_metadata.photo) || user.picture} />}
    </header>
  );
};

const mapStateToProps = state => ({
  user: getUser(state)
});

export default connect(mapStateToProps)(Header);
