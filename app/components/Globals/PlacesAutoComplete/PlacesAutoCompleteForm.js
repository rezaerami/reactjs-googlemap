import React from 'react';
import PropTypes from 'prop-types';

import defaultMessages from '../../../constants/defaultMessages';

import TypingDone from '../TypingDone';
import Icon from '../Icon';

import {
  StyledAutoCompleteFormWrapper,
  StyledAutoCompleteInputWrapper,
  StyledAutoCompleteButtonWrapper,
} from './styles';

/* eslint-disable no-nested-ternary */
const PlacesAutoCompleteForm = props => {
  const { loading, query, onSetQuery, onFormSubmit } = props;
  return (
    <StyledAutoCompleteFormWrapper onSubmit={onFormSubmit}>
      <StyledAutoCompleteInputWrapper>
        <TypingDone
          onChangeValue={onSetQuery}
          disabled={loading}
          onTypingDone={onFormSubmit}
          placeholder={defaultMessages.searchPlaces}
          value={query}
          type="text"
        />
      </StyledAutoCompleteInputWrapper>
      <StyledAutoCompleteButtonWrapper>
        <button
          className={loading ? 'spinner' : ''}
          type="button"
          onClick={() => onSetQuery('')}
          disabled={loading}
        >
          <Icon
            name={loading ? 'spinner' : query ? 'cross' : 'search'}
            size={1.5}
          />
        </button>
      </StyledAutoCompleteButtonWrapper>
    </StyledAutoCompleteFormWrapper>
  );
};

PlacesAutoCompleteForm.propTypes = {
  loading: PropTypes.bool,
  query: PropTypes.string,
  onSetQuery: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
PlacesAutoCompleteForm.defaultProps = {
  loading: false,
  query: '',
};

export default PlacesAutoCompleteForm;
