import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Hoc from "../hoc/hoc";
import * as actions from "../store/actions/auth";
class Profile extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  constructor(props) {
    super(props);
    this.props.onTryAutoSignup();
    
  }

  render() {
    //if (this.props.token === null) {
      //return <Redirect to="/" />;
    //}
    return (
      <div className="contact-profile">
        {this.props.username !== null ? (
          <Hoc>
            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
            <p>{this.props.username}</p>
            <div className="social-media">
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </Hoc>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    token: state.auth.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
