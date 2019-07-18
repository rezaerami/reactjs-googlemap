import Styled from 'styled-components';

const StyledAutoCompleteWrapper = Styled.div`
  position: absolute;
  top: calc(${props => props.theme.defaultRem});
  left: calc(${props => props.theme.defaultRem});
  right: calc(${props => props.theme.defaultRem});
  z-index: 100;
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
`;

const StyledAutoCompleteSuggestionsWrapper = Styled.div``;

export {
  StyledAutoCompleteWrapper,
  StyledAutoCompleteFormWrapper,
  StyledAutoCompleteInputWrapper,
  StyledAutoCompleteButtonWrapper,
  StyledAutoCompleteSuggestionsWrapper,
};
