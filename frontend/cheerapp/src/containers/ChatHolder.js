import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "../routes";
import Sidepanel from "../containers/Sidepanel";
import Profile from "../containers/Profile";
import Chat from "../containers/Chat";
import AddChatModal from "../containers/Popup";
import * as actions from "../store/actions/auth";
import * as navActions from "../store/actions/nav";
import * as messageActions from "../store/actions/message";
import WebSocketInstance from "../websocket";


class ChatHolder extends React.Component {
  componentDidMount() {

    this.props.onTryAutoSignup();

    console.log("Params");
    console.log(this.props.match);
  }

  constructor(props) {
    super(props);
    WebSocketInstance.addCallbacks(
      this.props.setMessages.bind(this),
      this.props.addMessage.bind(this)
    );
  }

  render() {
    return (
        <div>
          <Sidepanel />
            <AddChatModal
              isVisible={this.props.showAddChatPopup}
              close={() => this.props.closeAddChatPopup()}
            />
            <Chat props={this.props}/>
            <Profile />
          </div>   
    );
  }
}

const mapStateToProps = state => {
  return {
    showAddChatPopup: state.nav.showAddChatPopup,
    authenticated: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    closeAddChatPopup: () => dispatch(navActions.closeAddChatPopup()),
    addMessage: message => dispatch(messageActions.addMessage(message)),
    setMessages: messages => dispatch(messageActions.setMessages(messages))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatHolder);