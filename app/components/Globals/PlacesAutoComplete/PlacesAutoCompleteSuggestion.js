/**
 * @memberOf components.Globals.PlacesAutoComplete
 * @namespace components.Globals.PlacesAutoComplete.PlacesAutoCompleteSuggestion
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAutoCompleteSuggestionsWrapper,
  StyledSuggestionItem,
} from './styles';
import defaultMessages from '../../../constants/defaultMessages';

/**
 * function represents a stateless component
 * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoCompleteSuggestion
 * @function PlacesAutoCompleteSuggestion
 * @description
 * renders a list of suggestion items
 * @param {object}   props     - props of component that were given by parent
 * @return {jsx} - jsx component to show
 * @example
 * <PlacesAutoCompleteSuggestion
     suggestions={suggestions}
     onSuggestionClick={onSuggestionClick}
  />
 */
/* eslint-disable react/no-array-index-key */
const PlacesAutoCompleteSuggestion = props => {
  const { suggestions, onSuggestionClick, modifier } = props;
  return (
    <StyledAutoCompleteSuggestionsWrapper modifier={modifier}>
      {suggestions && suggestions.length ? (
        suggestions.map((suggestion, index) => {
          const { title } = suggestion;
          return (
            <StyledSuggestionItem
              key={index}
              onClick={() => onSuggestionClick(suggestion)}
              modifier={modifier}
            >
              <span>{title}</span>
            </StyledSuggestionItem>
          );
        })
      ) : (
        <StyledSuggestionItem>{defaultMessages.noResult}</StyledSuggestionItem>
      )}
    </StyledAutoCompleteSuggestionsWrapper>
  );
};

/**
 * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoCompleteSuggestion
 * @name propTypes
 * @type {object}
 * @description defines prop types of PlacesAutoCompleteSuggestion
 * @property {array}         [suggestions]            - defines if any loading in progress from parent
 * @property {string}        [modifier]               - decides hos the component should be rendered, as a list or carousel.
 * @property {function}      onSuggestionClick        - function to call when user clicks on a suggestion item
 */
PlacesAutoCompleteSuggestion.propTypes = {
  suggestions: PropTypes.array,
  modifier: PropTypes.oneOf(['list', 'carousel']),
  onSuggestionClick: PropTypes.func.isRequired,
};
/**
 * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoCompleteSuggestion
 * @name defaultProps
 * @type {object}
 * @description defines default props of PlacesAutoCompleteSuggestion
 * @property {array}         [suggestions]          - sets an empty array as default suggestions
 * @property {string}        [modifier]             - sets list as default modifier
 */
PlacesAutoCompleteSuggestion.defaultProps = {
  suggestions: [],
  modifier: 'list',
};

/**
 * @memberOf components.Globals.PlacesAutoComplete.PlacesAutoCompleteSuggestion
 * @export PlacesAutoCompleteSuggestion
 * @description exports PlacesAutoCompleteSuggestion module.
 */
export default PlacesAutoCompleteSuggestion;
