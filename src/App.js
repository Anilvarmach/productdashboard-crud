import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard/dashboard';
import Userlist from './users';
import Usercreate from './usercreate';
import Useredit from './useredit';
import Product from './product';
import Productedit from './productedit';
import Productcreate from './productcreate';
import { UserProvider } from './userContext';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return <>
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <UserProvider>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div className="container-fluid">
                <Switch>
                  <Route path='/dashboard' component={Dashboard} exact={true}></Route>
                  <Route path='/users' component={Userlist} exact={true}></Route>
                  <Route path='/usercreate' component={Usercreate} exact={true}></Route>
                  <Route path='/product' component={Product} exact={true}></Route>
                  <Route path='/productcreate' component={Productcreate} exact={true}></Route>
                  <Route path='/useredit/:id' component={Useredit} ></Route>
                  <Route path='/productedit/:id' component={Productedit} ></Route>
                </Switch>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </Router>
  </>
}

export default App;
