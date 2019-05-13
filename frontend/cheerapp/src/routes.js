import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Chat from "./containers/Chat";
import WrappedNormalLoginForm from './containers/Login'; 
import WrappedNormalSignupForm from './containers/Signup';

import ChatHolder from "./containers/ChatHolder";
import Home from './containers/Home';
const BaseRouter = () => (
  <Hoc>
  	<Route exact path="/" component={Home} />
  	<Route exact path="/home" component={Home} />
	<Route exact path="/chat/" component={ChatHolder} />
  	<Route exact path="/login/" component={WrappedNormalLoginForm} />
  	<Route exact path="/signup/" component={WrappedNormalSignupForm} />
  	<Route exact path="/chat/:chatID/" component={Chat} />
    </Hoc>
);
//<Route exact path="/" component={ChatMenu} />
  
  
export default BaseRouter;
