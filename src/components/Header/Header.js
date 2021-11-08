import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.scss';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActivate: false,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    if (window.scrollY === 0) {
      this.setState({
        isActivate: false,
      });
    } else {
      this.setState({
        isActivate: true,
      });
    }
  };

  goToMain = e => {
    const { history } = this.props;
    history.push('/main');
  };

  render() {
    const { handleClick, targetHamburger } = this.props;
    const { isActivate } = this.state;
    return (
      <header className={`header ${isActivate ? 'activated' : null}`}>
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
