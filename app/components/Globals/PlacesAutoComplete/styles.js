import Styled from 'styled-components';

/* eslint-disable prettier/prettier */
const StyledAutoCompleteWrapper = Styled.div`
  position: absolute;
  top: calc(${props => props.theme.defaultRem});
  left: calc(${props => props.theme.defaultRem});
  right: calc(${props => props.theme.defaultRem});
  z-index: 100;
  max-width: calc(${props => props.theme.defaultRem} * 40);
`;
const StyledSearchHistoryWrapper = Styled.div`
  position: absolute;
  bottom: calc(${props => props.theme.defaultRem});
  left: calc(${props => props.theme.defaultRem});
  right: calc(${props => props.theme.defaultRem});
  z-index: 100;
  max-width: calc(${props => props.theme.defaultRem} * 40);
  max-height: calc(${props => props.theme.defaultRem} * 15);
  overflow-y: auto;
  background: ${props => props.theme.colors.white};
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
  border-radius: calc(${props => props.theme.defaultRem} * 0.5);
  box-shadow: 0 calc(${props => props.theme.defaultRem} * 0.5) calc(${props =>
  props.theme.defaultRem} * 1) rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.colors.white};
  margin-top: calc(${props => props.theme.defaultRem} * 1);
`;
const StyledSuggestionItem = Styled.div`
  padding: calc(${props => props.theme.defaultRem} * 1);
  font-size: calc(${props => props.theme.defaultRem} * 1.2);
  cursor: pointer;
  &:not(:last-child){
    border-bottom: solid calc(${props =>
    props.theme.defaultRem} * 0.1) ${props => props.theme.colors.borderColor};
  }
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
