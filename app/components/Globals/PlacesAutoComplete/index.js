import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import PlacesAutoCompleteForm from './PlacesAutoCompleteForm';

import { StyledAutoCompleteWrapper } from './styles';

class PlacesAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      query: '',
      formSubmitted: false,
      places: [],
    };

    this.handleToggleLoading = this.handleToggleLoading.bind(this);
    this.handleSetQuery = this.handleSetQuery.bind(this);
    this.handleGetPlaces = this.handleGetPlaces.bind(this);
    this.handleSetPlaces = this.handleSetPlaces.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handlePlacesSearchHistoryItemClick = this.handlePlacesSearchHistoryItemClick.bind(
      this,
    );
    this.handlePlacesItemClick = this.handlePlacesItemClick.bind(this);
  }

  handleToggleLoading() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
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
    const { query } = this.state;
    const {
      onGetPlaces,
      location: { lat, lng },
      radius,
    } = this.props;
    this.handleToggleLoading();
    onGetPlaces({
      lat,
      lng,
      radius,
      query,
      onSuccess: places => {
        this.handleSetPlaces(places, this.handleToggleLoading);
      },
      onFailed: message => {
        this.handleToggleLoading();
        toast.error(message);
      },
    });
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
    this.handleSetQuery(searchHistory);
    this.handleFormSubmit();
  }

  handlePlacesItemClick(place) {
    const { onSetLocation } = this.props;
    const { title, lat, lng } = place;
    this.handleSetQuery(title);
    onSetLocation({ lat, lng });
  }

  render() {
    const { places, formSubmitted, query, loading } = this.state;
    console.log('places', places);
    console.log('formSubmitted', formSubmitted);
    return (
      <StyledAutoCompleteWrapper>
        <PlacesAutoCompleteForm
          loading={loading}
          query={query}
          onSetQuery={this.handleSetQuery}
          onFormSubmit={this.handleFormSubmit}
        />
      </StyledAutoCompleteWrapper>
    );
  }
}

PlacesAutoComplete.propTypes = {
  onSetLocation: PropTypes.func.isRequired,
  onGetPlaces: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  radius: PropTypes.number,
};

PlacesAutoComplete.defaultProps = {
  radius: 10000,
};

export default PlacesAutoComplete;
