import React from 'react';
import './Button.scss';

class Button extends React.Component {
  render() {
    const { text, onClick, style } = this.props;

    return (
      <button onClick={onClick} className={style ? 'btn colored' : 'btn'}>
        {text}
      </button>
    );
  }
}

export default Button;
