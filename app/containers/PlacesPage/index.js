import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import Places from '../../components/Places';

import { StyledPlacesContainer } from './styles';

/* eslint-disable react/prefer-stateless-function */
class PlacesPage extends Component {
  render() {
    return (
      <StyledPlacesContainer>
        <Places />
      </StyledPlacesContainer>
    );
  }
}

export default withRouter(PlacesPage);
