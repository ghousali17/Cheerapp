import React from "react";
import axios from "axios";
import CustomForm from '../components/Form';
import { connect } from "react-redux";
import { Button, Card } from "antd";
import * as actions from "../store/actions/auth";
import { HOST_URL } from "../settings";


class ProfilePage extends React.Component {
   state = {
    userprofile: {}

  };

  componentDidMount() {
    const profileID = this.props.match.params.profileID;
    console.log(profileID)
    axios.get(`${HOST_URL}/profile/?username=${profileID}`).then(res => {
      this.setState({
        userprofile: res.data[0],
      });
      });
  }
 
  render() {
   console.log(this.state.userprofile);
    return (
      <div>
      <div class="profile">
      </div>

       <CustomForm class="updateform"
          form = { {name: 'validate_other'} }
          profile = {this.state.userprofile}
          {...this.props}
          token={this.props.token}
          requestType="put"
          profileID={this.state.userprofile.id}
          btnText="Update"
        />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(ProfilePage);