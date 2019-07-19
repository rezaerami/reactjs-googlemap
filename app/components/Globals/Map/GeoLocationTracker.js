import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import defaultMessages from '../../../constants/defaultMessages';

import Icon from '../Icon';

import { StyledTrackButton } from './styles';

class GeoLocationTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    this.handleToggleLoading = this.handleToggleLoading.bind(this);
    this.handleAskGeoLocationAccess = this.handleAskGeoLocationAccess.bind(
      this,
    );
    this.handleAcceptGeoLocationAccess = this.handleAcceptGeoLocationAccess.bind(
      this,
    );
    this.handleDismissGeoLocationAccess = this.handleDismissGeoLocationAccess.bind(
      this,
    );
  }

  componentDidMount() {
    const { autoAskGeoLocationAccess } = this.props;
    if (autoAskGeoLocationAccess) {
      this.handleAskGeoLocationAccess();
    }
  }

  handleToggleLoading() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
  }

  handleAskGeoLocationAccess() {
    if (navigator.geolocation) {
      this.handleToggleLoading();
      navigator.geolocation.getCurrentPosition(
        this.handleAcceptGeoLocationAccess,
        this.handleDismissGeoLocationAccess,
      );
    } else {
      this.handleDismissGeoLocationAccess();
    }
  }

  handleAcceptGeoLocationAccess(position) {
    const { onSetLocation } = this.props;
    const {
      coords: { latitude: lat, longitude: lng },
    } = position;
    onSetLocation({ lat, lng });
    this.handleToggleLoading();
  }

  handleDismissGeoLocationAccess(error = false) {
    let message = defaultMessages.geoLocationFailed;
    if (error && error.code && error.code === error.PERMISSION_DENIED) {
      message = defaultMessages.geoLocationPermissionDenied;
    }
    toast.error(message);
    this.handleToggleLoading();
  }

  render() {
    const { loading } = this.state;
    const { showGeoLocationTrackerButton } = this.props;
    if (!showGeoLocationTrackerButton) {
      return null;
    }
    return (
      <StyledTrackButton
        disabled={loading}
        onClick={this.handleAskGeoLocationAccess}
      >
        <Icon
          className={loading ? 'spinner' : ''}
          name={loading ? 'spinner' : 'map-marker'}
          size={2}
        />
      </StyledTrackButton>
    );
  }
}

GeoLocationTracker.propTypes = {
  autoAskGeoLocationAccess: PropTypes.bool,
  showGeoLocationTrackerButton: PropTypes.bool,
  onSetLocation: PropTypes.func.isRequired,
};
GeoLocationTracker.defaultProps = {
  autoAskGeoLocationAccess: false,
  showGeoLocationTrackerButton: true,
};

export default GeoLocationTracker;
