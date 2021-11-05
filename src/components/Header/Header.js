import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.scss';

export class Header extends Component {
  goToMain = e => {
    this.props.history.push('/main');
  };

  render() {
    const { isOpen, openMenu } = this.props;

    return (
      <header>
        <div class="toggleBtn" onClick={openMenu}>
          <span />
          <span />
          <span />
        </div>

        <div class="logoWrapper" onClick={this.goToMain}>
          <h2>morning & brunch</h2>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
