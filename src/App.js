import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

//VIEWS
import index from './views/index';
import quotation from './views/quotation';
import invoice from './views/invoice';
import receipt from './views/receipt';
import report from './views/report';
import calendar from './views/calendar';
import setting from './views/setting';
import profile from './views/profile';
import error from './views/error';

class App extends Component {
  state = {
    redirect: false,
    link: ''
  }

  render() {
    return (
      <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={index}/>
              <Route path="/quotation" component={quotation} />
              <Route path="/invoice" component={invoice} />
              <Route path="/receipt" component={receipt} />
              <Route path="/profile" component={profile} />
              <Route path="/reports/:param" component={report} />
              <Route path="/calendar/:param" component={calendar} />
              <Route path="/settings/:param" component={setting} />
              <Route path="/*" component={error} />
              {/*<Redirect to="/platform"/> */}
            </Switch>
          </div>
      </Router>
    );
  }

}

export default App;
