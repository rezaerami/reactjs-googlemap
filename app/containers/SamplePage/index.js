import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import Sample from '../../components/Sample';

import { StyledSampleContainer } from './styles';

/* eslint-disable react/prefer-stateless-function */
class CategoriesPage extends Component {
  render() {
    return (
      <StyledSampleContainer>
        <Sample />
      </StyledSampleContainer>
    );
  }
}

export default withRouter(CategoriesPage);
