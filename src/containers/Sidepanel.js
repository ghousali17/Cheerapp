import React from "react";
import { Spin, Icon } from "antd";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import * as navActions from "../store/actions/nav";
import * as messageActions from "../store/actions/message";
import Contact from "../components/Contact";
import "../assets/style.css";
import axios from "axios";
import { HOST_URL } from "../settings";
import { Redirect } from "react-router-dom";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Sidepanel extends React.Component {
  state = {
    loginForm: true
  };

  waitForAuthDetails() {
    const component = this;
    setTimeout(function() {
      if (
        component.props.token !== null &&
        component.props.token !== undefined
      ) {
        component.props.getUserChats(
          component.props.username,
          component.props.token
        );
        return;
      } else {
        console.log("waiting for authentication details...");
        component.waitForAuthDetails();
      }
    }, 100);
  }

  componentDidMount() {
    this.waitForAuthDetails();
  }

  openAddChatPopup() {
    this.props.addChat();
  }
  
  getMatches(){
    console.log('Find matches!');
    axios.get(`${HOST_URL}/profile/matches/?username=${this.props.username}`).then(res=>{
      window.location.reload();
    });
      
  }

  changeForm = () => {
    this.setState({ loginForm: !this.state.loginForm });
  };

  authenticate = e => {
    e.preventDefault();
    if (this.state.loginForm) {
      this.props.login(e.target.username.value, e.target.password.value);
    } else {
      this.props.signup(
        e.target.username.value,
        e.target.email.value,
        e.target.password.value,
        e.target.password2.value
      );
    }
  };

  render() {
    let activeChats = this.props.chats.map(c => {

      return (
        <Contact
          key={c.id}
          name={ c.participants[0] == this.props.username ? c.participants[1] : c.participants[0] }
          picURL="http://emilcarlsson.se/assets/louislitt.png"
          status="busy"
          chatURL={`/chat/${c.id}`}
        />
      );
    });
    if (!this.props.isAuthenticated){
    return(<Redirect to="/"/>);  
    }else{
    return (
      <div id="sidepanel">
        <div id="profile">
          <div className="wrap">
            <img
              id="profile-img"
              src="http://emilcarlsson.se/assets/mikeross.png"
              className="online"
              alt=""
            />
            <p>{this.props.username}</p>   
          </div>
        </div>
      
        <div id="contacts">
          <ul>{activeChats}</ul>
        </div>
        <div id="bottom-bar">
          <button id="addChat" onClick={() => this.openAddChatPopup()}>
            <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
            <span>Create chat</span>
          </button>
          <button id="addChat" onClick={() => this.getMatches()}>
            <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
            <span>Find matches</span>
          </button>
        
        </div>
      </div>
    );}
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    loading: state.auth.loading,
    token: state.auth.token,
    username: state.auth.username,
    chats: state.message.chats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userName, password) =>
      dispatch(actions.authLogin(userName, password)),
    logout: () => dispatch(actions.logout()),
    signup: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2)),
    addChat: () => dispatch(navActions.openAddChatPopup()),
    getUserChats: (username, token) =>
      dispatch(messageActions.getUserChats(username, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidepanel);