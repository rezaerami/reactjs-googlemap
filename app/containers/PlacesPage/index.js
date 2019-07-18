/**
 * @memberOf containers
 * @namespace containers.PlacesPage
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import placesSelectors from '../../ducks/places/selectors';
import placesActions from '../../ducks/places/actions';

import Places from '../../components/Places';

import { StyledPlacesContainer } from './styles';

/**
 * class representing a container
 * @memberOf containers.PlacesPage
 * @class PlacesPage
 * @classdesc
 *  PlacesPage contains action dispatcher and states that are related to places,
 *  such as getting places or giving search history of places.
 * @extends Component
 * @example
 * <PlacesPage />
 */
/* eslint-disable react/prefer-stateless-function */
class PlacesPage extends Component {
  /**
   * renders PlacesPage container
   * @memberOf containers.PlacesPage.PlacesPage
   * @function render
   * @description passes properties and methods to child component
   * @return {jsx} - jsx component to show
   */
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


/**
 * @memberOf containers.PlacesPage.PlacesPage
 * @name mapStateToProps
 * @type {function}
 * @description maps states to prop for PlacesPage
 * @params {object} state    - receives app state as parameter
 * @return {object}          - returns mapped props of given state
 */
const mapStateToProps = state => ({
  placesSearchHistory: placesSelectors.searchHistory(state),
});

/**
 * @memberOf containers.PlacesPage.PlacesPage
 * @name mapDispatchToProps
 * @type {function}
 * @description maps dispatch to prop for PlacesPage
 * @params {function} dispatch    - receives dispatch function as parameter
 * @return {object}               - returns mapped props of given dispatch to dispatch an action by calling a function
 */
const mapDispatchToProps = dispatch => ({
  getPlaces: payload => dispatch(placesActions.getPlaces(payload)),
});

/**
 * @memberOf containers.PlacesPage.PlacesPage
 * @name propTypes
 * @type {object}
 * @description defines prop types of PlacesPage
 * @property {array}       placesSearchHistory       - SELF INJECTION, array of user's search history
 * @property {function}    getPlaces                 - SELF INJECTION, function to dispatch getPlace action
 */
PlacesPage.propTypes = {
  placesSearchHistory: PropTypes.array.isRequired,
  getPlaces: PropTypes.func.isRequired,
};

/**
 * @memberOf containers.PlacesPage.PlacesPage
 * @export PlacesPage
 * @description injects router props, connects states and dispatches to PlacesPage module.
 */
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PlacesPage),
);
