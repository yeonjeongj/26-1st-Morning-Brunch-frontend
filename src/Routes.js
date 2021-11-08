import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Articles from './pages/Articles/Articles';
import Mypage from './pages/Mypage/Mypage';

//공통 컴포넌트
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/mypage" component={Mypage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
