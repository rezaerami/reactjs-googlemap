/**
 * @memberOf components.Globals
 * @namespace components.Globals.PlacesAutoComplete
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import PlacesAutoCompleteForm from './PlacesAutoCompleteForm';
import PlacesAutoCompleteSuggestion from './PlacesAutoCompleteSuggestion';

import { StyledAutoCompleteWrapper } from './styles';

/**
 * class representing a component
 * @memberOf components.Globals.PlacesAutoComplete
 * @class PlacesAutoComplete
 * @classdesc
 * Places auto complete will render a form which can get places from google places api
 * and shows suggestions, or user's places search history
 * @extends Component
 * @example
 * <PlacesAutoComplete
     onSetLocation={onSetLocation}
     onGetPlaces={onGetPlaces}
     placesSearchHistory={placesSearchHistory}
     location={location}
   />
 */
class PlacesAutoComplete extends Component {
  /**
   * initializes PlacesAutoComplete
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @constructs PlacesAutoComplete
   * @function constructor
   * @description initializes default states and gives access to class through the handlers
   * @param {object} props - props to extend
   * @return void
   */
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      query: '',
      places: [],
      placesAutoCompleteSuggestionVisibility: false,
    };

    this.node = null;

    this.handleToggleLoading = this.handleToggleLoading.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleSetQuery = this.handleSetQuery.bind(this);
    this.handleGetPlaces = this.handleGetPlaces.bind(this);
    this.handleSetPlaces = this.handleSetPlaces.bind(this);
    this.handlePlacesSearchHistoryItemClick = this.handlePlacesSearchHistoryItemClick.bind(
      this,
    );
    this.handleSetPlacesAutoCompleteSuggestionVisibility = this.handleSetPlacesAutoCompleteSuggestionVisibility.bind(
      this,
    );
    this.handlePlacesItemClick = this.handlePlacesItemClick.bind(this);
  }

  /**
   * operations after mounting components
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function componentDidMount
   * @description attaches outside click function to window click
   * @return void
   */
  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick);
  }

  /**
   * toggles loading state of component
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function handleToggleLoading
   * @description toggles loading state of component
   * @return void
   */
  handleToggleLoading() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
  }

  /**
   * handles visibility of suggestions
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function handleOutsideClick
   * @description handles visibility of suggestions based on users target click,
   * if clicked area is child of this component it would show suggestions, but if it's not, it will hide suggestions
   * @return void
   */
  handleOutsideClick(e) {
    let placesAutoCompleteSuggestionVisibility = true;
    if (this.node && !this.node.contains(e.target)) {
      placesAutoCompleteSuggestionVisibility = false;
    }
    this.handleSetPlacesAutoCompleteSuggestionVisibility(
      placesAutoCompleteSuggestionVisibility,
    );
  }

  /**
   * handles set query into the state
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function handleSetQuery
   * @description
   * puts user input into the state of the component to show in form and send to the api
   * @param {string}   query       - user input to set in state of the component
   * @param {function} callback    - function to call after setting the query
   * @return void
   */
  handleSetQuery(query, callback = () => {}) {
    this.setState(
      {
        query,
      },
      callback,
    );
  }

  /**
   * handles api call for getting places from google api service
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function handleGetPlaces
   * @description
   * dispatches an action with given parameters to get places from google api service,
   * in case of succeed, callback will put places into the state,
   * and in case of failure it would toast a message.
   * @return void
   */
  handleGetPlaces(e) {
    if (e) {
      e.preventDefault();
    }

    const { query, loading } = this.state;
    const { onGetPlaces, onSetSearchHistory } = this.props;
    const trimmedQuery = query ? query.trim() : '';
    if (!loading && trimmedQuery) {
      this.handleToggleLoading();
      onGetPlaces({
        query: trimmedQuery,
        onSuccess: results => {
          onSetSearchHistory({
            type: 'query',
            title: query,
          });
          const places = [];
          results.forEach(item => {
            const {
              geometry: {
                location: { lat, lng },
              },
              name: title,
            } = item;
            places.push({
              lat,
              lng,
              title,
            });
          });
          this.handleSetPlaces(places, () => {
            this.handleSetPlacesAutoCompleteSuggestionVisibility(true);
            this.handleToggleLoading();
          });
        },
        onFailed: message => {
          this.handleToggleLoading();
          toast.error(message);
        },
      });
    }
  }

  /**
   * handles set places into the state
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function handleSetPlaces
   * @description
   * puts given places into the state to render as suggestions
   * @param {array}   places       - array of places to set into the state
   * @param {function} callback    - function to call after setting the places
   * @return void
   */
  handleSetPlaces(places, callback = () => {}) {
    this.setState(
      {
        places,
      },
      callback,
    );
  }

  /**
   * handles click on search history item
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function handlePlacesSearchHistoryItemClick
   * @description
   * will put clicked item into the search query and submit the form to get the related result
   * @param {object}   searchHistory       - object of item of a single search history
   * @return void
   */
  handlePlacesSearchHistoryItemClick(searchHistory) {
    const { type, title } = searchHistory;
    if(type === 'query') {
      this.handleSetPlacesAutoCompleteSuggestionVisibility(false);
      this.handleSetQuery(title, this.handleGetPlaces);
    }
    else if(type === 'place'){
      this.handlePlacesItemClick(searchHistory);
    }
  }

  /**
   * handles click on suggested place item
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function handlePlacesItemClick
   * @description
   * will show clicked place on map
   * @param {object}   place       - object of item of a single place
   * @return void
   */
  handlePlacesItemClick(place) {
    const { onSetLocation, onSetSearchHistory } = this.props;
    const { lat, lng, title } = place;
    this.handleSetPlacesAutoCompleteSuggestionVisibility(false);
    this.handleSetQuery(title);
    onSetSearchHistory({
      type: 'place',
      ...place,
    });
    onSetLocation({ lat, lng });
  }

  /**
   * handles visibility of suggestion box
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function handleSetPlacesAutoCompleteSuggestionVisibility
   * @description
   * puts visibility of suggestion box into the state
   * @param {boolean}   placesAutoCompleteSuggestionVisibility     - visibility of suggestion box
   * @return void
   */
  handleSetPlacesAutoCompleteSuggestionVisibility(
    placesAutoCompleteSuggestionVisibility,
  ) {
    this.setState({
      placesAutoCompleteSuggestionVisibility,
    });
  }

  /**
   * renders PlacesAutoComplete component
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function render
   * @description renders an auto complete form with search history and places as suggestion
   * @return {jsx} - jsx component to show
   */
  render() {
    const { placesSearchHistory } = this.props;
    const {
      places,
      query,
      loading,
      placesAutoCompleteSuggestionVisibility,
    } = this.state;

    const suggestionVisibility =
      placesAutoCompleteSuggestionVisibility &&
      (placesSearchHistory.length || places.length) &&
      !loading;

    return (
      <StyledAutoCompleteWrapper
        innerRef={node => {
          this.node = node;
        }}
      >
        <PlacesAutoCompleteForm
          loading={loading}
          query={query}
          onSetQuery={this.handleSetQuery}
          onFormSubmit={this.handleGetPlaces}
        />
        {suggestionVisibility && (
          <PlacesAutoCompleteSuggestion
            suggestions={query ? places : placesSearchHistory}
            onSuggestionClick={
              query
                ? this.handlePlacesItemClick
                : this.handlePlacesSearchHistoryItemClick
            }
          />
        )}
      </StyledAutoCompleteWrapper>
    );
  }

  /**
   * operations before unmounting components
   * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
   * @function componentWillUnmount
   * @description detaches outside click function from window click
   * @return void
   */
  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
  }
}

/**
 * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
 * @name propTypes
 * @type {object}
 * @description defines prop types of PlacesAutoComplete
 * @property {function}     onSetLocation            - function to pass selected location to parent
 * @property {function}     onGetPlaces              - dispatches an action to getPlaces
 * @property {function}     onSetSearchHistory       - dispatches an action to onSetSearchHistory
 * @property {array}        [placesSearchHistory]    - user's search history of queries
 */
PlacesAutoComplete.propTypes = {
  onSetLocation: PropTypes.func.isRequired,
  onGetPlaces: PropTypes.func.isRequired,
  onSetSearchHistory: PropTypes.func.isRequired,
  placesSearchHistory: PropTypes.array,
};

/**
 * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoComplete
 * @export PlacesAutoComplete
 * @description exports PlacesAutoComplete module.
 */
export default PlacesAutoComplete;
