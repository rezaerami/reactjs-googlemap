import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAutoCompleteSuggestionsWrapper,
  StyledSuggestionItem,
} from './styles';
import defaultMessages from '../../../constants/defaultMessages';

/* eslint-disable react/no-array-index-key */
const PlacesAutoCompleteSuggestion = props => {
  const { suggestions, onSuggestionClick } = props;
  return (
    <StyledAutoCompleteSuggestionsWrapper>
      {suggestions && suggestions.length ? (
        suggestions.map((suggestion, index) => {
          const { title } = suggestion;
          return (
            <StyledSuggestionItem
              key={index}
              onClick={() => onSuggestionClick(suggestion)}
            >
              {title}
            </StyledSuggestionItem>
          );
        })
      ) : (
        <StyledSuggestionItem>{defaultMessages.noResult}</StyledSuggestionItem>
      )}
    </StyledAutoCompleteSuggestionsWrapper>
  );
};

PlacesAutoCompleteSuggestion.propTypes = {
  suggestions: PropTypes.array,
  onSuggestionClick: PropTypes.func.isRequired,
};
PlacesAutoCompleteSuggestion.defaultProps = {
  suggestions: [],
};

export default PlacesAutoCompleteSuggestion;
