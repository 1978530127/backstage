import React from 'react';
import Login from './peges/Login/index'
import Admin from './peges/Admin/index'
import Commoditylist from './peges/Commodity/commoditylist/index.js'
import Commodityadd from './peges/Commodity/commodityadd/index.js'
import User from './peges/User/index'
import Bar from './peges/photo/bar/index'
import {HashRouter,NavLink,Route,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <div>
      <HashRouter>
        <Route path="/login" component={Login}></Route>
        <Route path="/admin" render={()=>{
          return(
            <Admin>
              <Route path='/admin/commoditylist' component={Commoditylist}></Route>
              <Route path='/admin/commodityadd' component={Commodityadd}></Route>
              <Route path='/admin/user' component={User}></Route>
              <Route path='/admin/bar' component={Bar}></Route>
            </Admin>
          )
        }}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
