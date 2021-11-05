import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.scss';

export class Header extends Component {
  goToMain = e => {
    const { history } = this.props;
    history.push('/main');
  };

  render() {
    const { handleClick, targetHamburger } = this.props;

    return (
      <header>
        <div className="toggleBtn" onClick={handleClick} ref={targetHamburger}>
          <span />
          <span />
          <span />
        </div>

        <div className="logoWrapper" onClick={this.goToMain}>
          <h2>morning & brunch</h2>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
