import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { withCookies } from 'react-cookie';
import Moment from 'moment-jalaali';

import App from '../App';

class Hoc extends Component {
  constructor(props) {
    super(props);

    this.handleSetCookie = this.handleSetCookie.bind(this);
  }
  componentDidMount() {
    Moment.loadPersian({
      dialect: 'persian-modern',
      usePersianDigits: true,
    });
    this.handleSetCookie();
  }

  handleSetCookie() {
    const { cookies } = this.props;
    if (!cookies.get('UDID')) {
      const timestamp = Math.floor(new Date().getTime() / 1000);
      const randomNumber = Math.floor(Math.random() * 9999999999 + 1000000000);
      const expires = new Date();
      expires.setTime(expires.getTime() + 3000 * 24 * 60 * 60 * 1000);
      cookies.set('UDID', `${timestamp}${randomNumber}`, {
        expires,
      });
    }
  }

  render() {
    const { history } = this.props;
    return (
      <Fragment>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Fragment>
    );
  }
}
Hoc.propTypes = {
  history: PropTypes.object.isRequired,
  cookies: PropTypes.object,
};
export default withCookies(Hoc);
