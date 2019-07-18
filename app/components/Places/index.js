import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from '../Globals/Map';

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
    return (
      <StyledPlacesWrapper>
        <Map location={{ lat, lng }} />
      </StyledPlacesWrapper>
    );
  }
}

Places.propTypes = {
  location: PropTypes.object,
};

Places.defaultProps = {
  location: MAP_INFO.defaultLocation,
};

export default Places;
