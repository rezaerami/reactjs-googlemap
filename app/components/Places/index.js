import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from '../Globals/Map';
import PlacesAutoComplete from '../Globals/PlacesAutoComplete';

import { StyledPlacesWrapper } from './styles';
import MAP_INFO from '../../constants/mapInfo';

class Places extends Component {
  constructor(props) {
    super(props);

    const {
      location: { lat, lng },
    } = props;
    this.state = {
      lat,
      lng,
    };

    this.handleSetLocation = this.handleSetLocation.bind(this);
  }

  handleSetLocation(location, callback = () => {}) {
    const { lat, lng } = location;
    this.setState(
      {
        lat,
        lng,
      },
      callback,
    );
  }

  render() {
    const { lat, lng } = this.state;
    const { getPlaces, placesSearchHistory } = this.props;
    return (
      <StyledPlacesWrapper>
        <Map location={{ lat, lng }} />
        <PlacesAutoComplete
          onSetLocation={this.handleSetLocation}
          onGetPlaces={getPlaces}
          placesSearchHistory={placesSearchHistory}
          location={{ lat, lng }}
        />
      </StyledPlacesWrapper>
    );
  }
}

Places.propTypes = {
  location: PropTypes.object,
  getPlaces: PropTypes.func.isRequired,
  placesSearchHistory: PropTypes.array.isRequired,
};

Places.defaultProps = {
  location: MAP_INFO.defaultLocation,
};

export default Places;
