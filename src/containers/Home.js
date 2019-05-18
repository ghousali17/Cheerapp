import React from 'react';

import { Card } from 'antd';


class Home extends React.Component{

	render(){
		return(
  <div class="home-container">
   <header id="header">
  <div class="intro">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 intro-text">
            <h1>Welcome Back Home</h1>
            <p>CHEERAPP! CHEER UP!</p>
            <a href="#about" class="btn btn-custom btn-lg page-scroll">Learn More</a> </div>
        </div>
      </div>
    </div>
  </div>
</header>
<div id="get-touch">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-1">
        <h3>Wanna to get started?</h3>
        <p>Sign up without leaving your personal information in 1 minute!</p>
      </div>
      <div class="col-xs-12 col-md-4 text-center"><a href="#signUp" class="btn btn-custom btn-lg page-scroll">Free Sign Up</a></div>
    </div>
  </div>
</div>
<div id="about">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6"> <img src="img/about.jpg" class="img-responsive" alt=""/> </div>
      <div class="col-xs-12 col-md-6">
        <div class="about-text">
          <h2>About</h2>
          <h3>What is it?</h3>
          <div class="list-style">
            
            <p>The main purpose of the application is to provide a platform for people who are willing to share their oppression and respectively for those who want to bring their personal and cultural experience into practice while having a conversation with a person in need. With the hope that we might find a “soulmate” for every user of our website, the aim is to diminish the differences between people in the virtual world and let personalities match each other instead of appearances. As a result, we hope that users will realise the value of being yourself and expressing your mind rather than keep following some social norms concerning, for instance, what beauty means, what might be successful and who should become a role model for the rest of the society. Furthermore, Cheerapp is expected to help people who struggle from loneliness or cannot get rid of the thought that somehow they are not able to blend in with the crowd. Eventually, we seize the opportunity that people who deny to use social networks due to fake personalities and faces might give a chance to an innovative and non-binding chatroom.</p>
            
          <h3>Who we are?</h3>
          
            <p>We are a group of students who need to do an open source project for CSCI4140. We are experienced on writing dynamic websites and concerning about students mental health.</p>

            

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="instruction">
  <div class="container">
    <div class="section-title">
      <h2>Step By Step Guide</h2>
    </div>
    <div class="row">
      <div class="col-md-4">
        
        <div class="service-desc">
          <h3>1. Sign In</h3>
          <p>Click the <a href="#page-top">sign in</a> button on the top.</p>
        </div>
      </div>
      <div class="col-md-4">

        <div class="service-desc">
          <h3>2. Select the role</h3>
          <p>Select the role that you want to be this time. You can be either a "listener" to listen others stories, a "speaker" to share something that you want or "Why not both?". You can change your role anytime you want.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="service-desc">
          <h3>3. Pair up & Chat</h3>
          <p>Our system will pair up a person that fulfill your requirments (only the role and the language that you choose) automatically. It may take a few seconds for pairing up process. After the pairing, you will enter the chatroom. You can chat with your partner!</p>
        </div>
      </div>
    </div>
   
      </div>
    </div>
    <div id="signUp" class="hideAfterSignIn">
  <div class="container">
    <div class="col-md-8">
      <div class="row">
        <div class="section-title">
          <h2>Visit Us</h2>
          </div>
        <form name="sentMessage" id="contactForm" novalidate>
          <div class="row">
            <div class="col-md-6">
              
            </div>
            <div class="col-md-6">
              
            </div>
          </div>
         
          <div id="success"></div>
         
        </form>
      </div>
    </div>
    <div class="col-md-3 col-md-offset-1 contact-info">
      <div class="contact-item">
        <h4>Contact Info</h4>
        <p><span>Address</span>Room 123, Ho Sin Hang Engineering Building, <br/>
          The Chinese University of Hong Kong,<br/>
          Shatin, Hong Kong.<br/>
          </p>
      </div>
      <div class="contact-item">
        <p><span>Phone</span> +852 3943 7999</p>
      </div>
      <div class="contact-item">
        <p><span>Email</span> johnchan@link.cuhk.edu.hk</p>
      </div>
    </div>
    <div class="col-md-12">
      <div class="row">
        <div class="social">
          <ul>
            <li>I hate social media.</li>
            <li><a href="#page-top" class="page-scroll"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#page-top" class="page-scroll"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#page-top" class="page-scroll"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#page-top" class="page-scroll"><i class="fa fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>);
	}
}


export default Home;