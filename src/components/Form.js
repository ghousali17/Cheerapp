import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";
import { HOST_URL } from "../settings";
const FormItem = Form.Item;


class CustomForm extends React.Component {
  
  handleFormSubmit = async (event, requestType, profileID) => {
    event.preventDefault();

    const postObj = {
      bio: event.target.elements.bio.value,
      location: event.target.elements.location.value
    }
/*
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };*/
    
   if (requestType === "put") {
      await axios.put(`${HOST_URL}/profile/${profileID}/update/`, postObj)
        .then(res => {
          if (res.status === 200) {
            this.props.history.push(`/`);
          }
        })
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.profileID
            )
          }
        >
          <FormItem label="Title">
            <Input name="bio" placeholder="Put a title here" />
          </FormItem>
          <FormItem label="Content">
            <Input name="location" placeholder="Enter some content ..." />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(CustomForm);