import React from "react";
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  Input
} from 'antd';
import { connect } from "react-redux";
import axios from "axios";
import { HOST_URL } from "../settings";
const FormItem = Form.Item;


const { Option } = Select;


class CustomForm extends React.Component {
  
  handleFormSubmit = async (event, requestType, profileID) => {
    event.preventDefault();

    var fname = this.props.profile.fname;
    var lname = this.props.profile.lname;
    var bio = this.props.profile.bio;
    var location = this.props.profile.location;
    var mood = this.props.profile.mood;
    
    if (event.target.elements.fname.value !== "")
    {
        fname = event.target.elements.fname.value;
    }
    if (event.target.elements.lname.value !== "")
    {
        lname = event.target.elements.lname.value;
    }
    if (event.target.elements.bio.value !== "")
    {
        bio = event.target.elements.bio.value;
    }
    if (event.target.elements.location.value !== "")
    {
        location = event.target.elements.location.value;
    }
    if (event.target.elements.mood.value !== "")
    {
        mood = event.target.elements.mood.value;
    }

    const postObj = {
      fname: fname,
      lname:lname,
      bio: bio,
      location: location,
      mood: mood
    }


   if (requestType === "put") {
      await axios.put(`${HOST_URL}/profile/${profileID}/update/`, postObj)
        .then(res => {
          if (res.status === 200) {
            this.props.history.push(`/`);
          }
        })
    }
  }

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }


  render() {
   
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
       <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.profileID
            )
          }
        >
         <FormItem label="First Name" >
            <Input name="fname" placeholder="Enter your first name" placeholder={this.props.profile.fname} />
          </FormItem>
          <FormItem label="Last name">
            <Input name="lname" placeholder="Enter your last name" placeholder={this.props.profile.lname}/>
          </FormItem>
          <FormItem label="Bio">
            <Input name="bio" placeholder="Write a short personal bio" placeholder={this.props.profile.bio}/>
          </FormItem>
          <FormItem label="City">
            <Input name="location" placeholder="Enter the name of your city" placeholder={this.props.profile.location} />
          </FormItem>
       
        <Form.Item label="How are you feeling today?" >
            <Radio.Group name="mood" placeholder = {this.props.profile.mood}>
              <Radio.Button value="listener">I want to listen</Radio.Button>
              <Radio.Button value="sharer">I want to share</Radio.Button>
              <Radio.Button value="neutral">Surprise me</Radio.Button>
            </Radio.Group>
        </Form.Item>

      
        
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            {this.props.btnText}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(CustomForm);



