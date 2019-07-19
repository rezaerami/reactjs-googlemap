import Styled from 'styled-components';

/* eslint-disable prettier/prettier */
const StyledAutoCompleteWrapper = Styled.div`
  position: absolute;
  top: calc(${props => props.theme.defaultRem});
  left: calc(${props => props.theme.defaultRem});
  z-index: 100;
  max-width: calc(${props => props.theme.defaultRem} * 40);
  width: calc(100% - calc(${props => props.theme.defaultRem} * 7))
`;
const StyledSearchHistoryWrapper = Styled.div`
  position: absolute;
  bottom: calc(${props => props.theme.defaultRem});
  left: calc(${props => props.theme.defaultRem});
  right: calc(${props => props.theme.defaultRem});
  z-index: 100;
  max-width: calc(${props => props.theme.defaultRem} * 40);
`;
const StyledAutoCompleteFormWrapper = Styled.form`
  height: calc(${props => props.theme.defaultRem} * 3.5);
  background: ${props => props.theme.colors.white};
  border-radius: calc(${props => props.theme.defaultRem} * 3.5);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: calc(${props => props.theme.defaultRem} * 0.5);
  > * {
    height: 100%;
    padding: calc(${props => props.theme.defaultRem} * 0.5);
    > * {
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      padding: 0;
    }
  }
`;
const StyledAutoCompleteInputWrapper = Styled.div`
  width: calc(100% - calc(${props => props.theme.defaultRem} * 3.5));
  > input {
    font-size: 1.5;
  }
`;
const StyledAutoCompleteButtonWrapper = Styled.div`
  width: calc(${props => props.theme.defaultRem} * 3.5);
  button {
    cursor: pointer;
  }
`;

const StyledAutoCompleteSuggestionsWrapper = Styled.div`
  ${props => props.modifier === 'list' && (`
    border-radius: calc(${props.theme.defaultRem} * 0.5);
    box-shadow: 0 calc(${props.theme.defaultRem} * 0.5) calc(${props.theme.defaultRem} * 1) rgba(0, 0, 0, 0.1);
    background-color: ${props.theme.colors.white};
    margin-top: calc(${props.theme.defaultRem} * 1);
  `)}
  ${props => props.modifier === 'carousel' && (`
    display: flex;
    width: 100%;
    overflow-x: auto;
  `)}
`;
const StyledSuggestionItem = Styled.div`
  padding: calc(${props => props.theme.defaultRem} * 1);
  font-size: calc(${props => props.theme.defaultRem} * 1.2);
  cursor: pointer;
  ${props => props.modifier === 'list' && (`
    &:not(:last-child){
      border: solid calc(${props.theme.defaultRem} * 0.1) ${props.theme.colors.borderColor};
    }
  `)}
  ${props => props.modifier === 'carousel' && (`
    & {
      > * {
        background-color: ${props.theme.colors.white};
        padding: calc(${props.theme.defaultRem} * 2);
        border-radius: calc(${props.theme.defaultRem} * 0.5);
        display: inline-block;
      }
    }
  `)}
`;

export {
  StyledAutoCompleteWrapper,
  StyledSearchHistoryWrapper,
  StyledAutoCompleteFormWrapper,
  StyledAutoCompleteInputWrapper,
  StyledAutoCompleteButtonWrapper,
  StyledAutoCompleteSuggestionsWrapper,
  StyledSuggestionItem,
};
