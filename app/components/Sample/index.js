import React from 'react';
// import PropTypes from 'prop-types';

import defaultMessages from '../../constants/defaultMessages';

import { StyledSampleWrapper } from './styles';

const Sample = () => (
  <StyledSampleWrapper>{defaultMessages.sampleMessage}</StyledSampleWrapper>
);

export default Sample;
