import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import placesSelectors from '../../ducks/places/selectors';
import placesActions from '../../ducks/places/actions';

import Places from '../../components/Places';

import { StyledPlacesContainer } from './styles';

/* eslint-disable react/prefer-stateless-function */
class PlacesPage extends Component {
  render() {
    const { getPlaces, placesSearchHistory } = this.props;
    return (
      <StyledPlacesContainer>
        <Places
          getPlaces={getPlaces}
          placesSearchHistory={placesSearchHistory}
        />
      </StyledPlacesContainer>
    );
  }
}

const mapStateToProps = state => ({
  placesSearchHistory: placesSelectors.searchHistory(state),
});
const mapDispatchToProps = dispatch => ({
  getPlaces: payload => dispatch(placesActions.getPlaces(payload)),
});

PlacesPage.propTypes = {
  placesSearchHistory: PropTypes.array.isRequired,
  getPlaces: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PlacesPage),
);
