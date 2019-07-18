import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import PlacesAutoCompleteForm from './PlacesAutoCompleteForm';
import PlacesAutoCompleteSuggestion from './PlacesAutoCompleteSuggestion';

import { StyledAutoCompleteWrapper } from './styles';

class PlacesAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      query: '',
      formSubmitted: false,
      places: [],
      placesAutoCompleteSuggestionVisibility: false,
    };

    this.node = null;

    this.handleToggleLoading = this.handleToggleLoading.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleSetQuery = this.handleSetQuery.bind(this);
    this.handleGetPlaces = this.handleGetPlaces.bind(this);
    this.handleSetPlaces = this.handleSetPlaces.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handlePlacesSearchHistoryItemClick = this.handlePlacesSearchHistoryItemClick.bind(
      this,
    );
    this.handleSetPlacesAutoCompleteSuggestionVisibility = this.handleSetPlacesAutoCompleteSuggestionVisibility.bind(
      this,
    );
    this.handlePlacesItemClick = this.handlePlacesItemClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick);
  }

  handleToggleLoading() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
  }

  handleOutsideClick(e) {
    let placesAutoCompleteSuggestionVisibility = true;
    if (this.node && !this.node.contains(e.target)) {
      placesAutoCompleteSuggestionVisibility = false;
    }
    this.handleSetPlacesAutoCompleteSuggestionVisibility(
      placesAutoCompleteSuggestionVisibility,
    );
  }

  handleSetQuery(query, callback = () => {}) {
    this.setState(
      {
        query,
      },
      callback,
    );
  }

  handleGetPlaces() {
    const { query, loading } = this.state;
    const { onGetPlaces } = this.props;
    if (!loading && query) {
      this.handleToggleLoading();
      onGetPlaces({
        query: query.trim(),
        onSuccess: results => {
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
          this.handleSetPlaces(places, this.handleToggleLoading);
        },
        onFailed: message => {
          this.handleToggleLoading();
          toast.error(message);
        },
      });
    }
  }
  handleSetPlaces(places, callback = () => {}) {
    this.setState(
      {
        places,
      },
      callback,
    );
  }
  handleFormSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState(
      {
        formSubmitted: true,
      },
      this.handleGetPlaces,
    );
  }

  handlePlacesSearchHistoryItemClick(searchHistory) {
    const { title } = searchHistory;
    this.handleSetQuery(title);
    this.handleFormSubmit();
  }

  handlePlacesItemClick(place) {
    const { onSetLocation } = this.props;
    const { lat, lng, title } = place;
    this.handleSetQuery(title);
    onSetLocation({ lat, lng });
  }

  handleSetPlacesAutoCompleteSuggestionVisibility(
    placesAutoCompleteSuggestionVisibility,
  ) {
    this.setState({
      placesAutoCompleteSuggestionVisibility,
    });
  }

  render() {
    const { placesSearchHistory } = this.props;
    const {
      places,
      formSubmitted,
      query,
      loading,
      placesAutoCompleteSuggestionVisibility,
    } = this.state;

    const normalizedPlacesSearchHistory = [];
    placesSearchHistory.forEach(item => {
      normalizedPlacesSearchHistory.push({ title: item });
    });

    const suggestionVisibility =
      placesAutoCompleteSuggestionVisibility &&
      (normalizedPlacesSearchHistory.length || places.length) &&
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
          onFormSubmit={this.handleFormSubmit}
        />
        {suggestionVisibility && (
          <PlacesAutoCompleteSuggestion
            suggestions={formSubmitted ? places : normalizedPlacesSearchHistory}
            onSuggestionClick={
              formSubmitted
                ? this.handlePlacesItemClick
                : this.handlePlacesSearchHistoryItemClick
            }
          />
        )}
      </StyledAutoCompleteWrapper>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
  }
}

PlacesAutoComplete.propTypes = {
  onSetLocation: PropTypes.func.isRequired,
  onGetPlaces: PropTypes.func.isRequired,
  placesSearchHistory: PropTypes.array,
};

export default PlacesAutoComplete;
