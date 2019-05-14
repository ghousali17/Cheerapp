import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import { connect } from "react-redux";
import Chat from "./containers/Chat";
import WrappedNormalLoginForm from './containers/Login'; 
import WrappedNormalSignupForm from './containers/Signup';
import * as actions from "./store/actions/auth";
import ChatHolder from "./containers/ChatHolder";
import Home from './containers/Home';
import ProfilePage from './containers/Profilepage';
class BaseRouter extends React.Component{

componentDidMount() {
    this.props.onTryAutoSignup();
  }

	constructor(props) {
    super(props);
  }

	render(){
		return( <Hoc>
  	<Route exact path="/" component={Home} />
  	<Route exact path="/home" component={Home} />
  	<Route exact path="/profile/:profileID/" 
	component={ProfilePage}/>
	<Route exact path="/chat/" component={ChatHolder} />
  	<Route exact path="/login/" component={WrappedNormalLoginForm} />
  	<Route exact path="/signup/" component={WrappedNormalSignupForm} />
  	<Route exact path="/chat/:chatID/" component={Chat} />
    </Hoc>);
	}
} 
//<Route exact path="/" component={ChatMenu} />

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseRouter);
  

