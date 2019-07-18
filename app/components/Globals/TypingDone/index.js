import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

class TypingDone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.timer = false;

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSetTimer = this.handleSetTimer.bind(this);
    this.handleClearTimer = this.handleClearTimer.bind(this);
  }

  componentDidMount() {
    const { value } = this.props;
    if (value && value !== '') {
      this.handleValueChange(value);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { value: currentValue } = this.state;
    const { value } = nextProps;
    if (currentValue !== value) {
      this.setState({
        value,
      });
    }
  }

  handleValueChange(value) {
    const { onChangeValue } = this.props;
    this.setState(
      {
        value,
      },
      () => {
        onChangeValue(value);
        this.handleSetTimer();
      },
    );
  }

  handleSetTimer() {
    const { delay, onTypingDone } = this.props;
    if (this.timer) {
      this.handleClearTimer();
    }
    this.timer = setInterval(() => {
      onTypingDone();
      this.handleClearTimer();
    }, delay);
  }

  handleClearTimer() {
    clearInterval(this.timer);
  }

  render() {
    const { value } = this.state;
    const rest = omit(this.props, ['onTypingDone', 'onChangeValue', 'delay']);
    return (
      <input
        value={value}
        onChange={e => {
          this.handleValueChange(e.target.value);
        }}
        {...rest}
      />
    );
  }
}
TypingDone.propTypes = {
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  delay: PropTypes.number,
  onChangeValue: PropTypes.func.isRequired,
  onTypingDone: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TypingDone.defaultProps = {
  delay: 1000,
};
export default TypingDone;
