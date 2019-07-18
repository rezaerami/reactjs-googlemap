import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAutoCompleteSuggestionsWrapper,
  StyledSuggestionItem,
} from './styles';

/* eslint-disable react/no-array-index-key */
const PlacesAutoCompleteSuggestion = props => {
  const { suggestions, onSuggestionClick } = props;
  if (!suggestions || (suggestions && !suggestions.length)) {
    return null;
  }
  return (
    <StyledAutoCompleteSuggestionsWrapper>
      {suggestions.map((suggestion, index) => {
        const { title } = suggestion;
        return (
          <StyledSuggestionItem
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
          >
            {title}
          </StyledSuggestionItem>
        );
      })}
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
