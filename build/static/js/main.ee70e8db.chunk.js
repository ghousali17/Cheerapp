(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){},194:function(e,t,a){e.exports=a(388)},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),s=a.n(o),c=a(63),l=a(15),i=a(179),u=(a(135),a(100)),m=function(e,t){return Object(u.a)({},e,t)},p={token:null,username:null,error:null,loading:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return function(e,t){return m(e,{error:null,loading:!0})}(e);case"AUTH_SUCCESS":return function(e,t){return m(e,{token:t.token,username:t.username,error:null,loading:!1})}(e,t);case"AUTH_FAIL":return function(e,t){return m(e,{error:t.error,loading:!1})}(e,t);case"AUTH_LOGOUT":return function(e,t){return m(e,{token:null,username:null})}(e);default:return e}},d={showAddChatPopup:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_ADD_CHAT_POPUP":return function(e,t){return m(e,{showAddChatPopup:!0})}(e);case"CLOSE_ADD_CHAT_POPUP":return function(e,t){return m(e,{showAddChatPopup:!1})}(e);default:return e}},g=a(105),E={messages:[],chats:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return function(e,t){return m(e,{messages:[].concat(Object(g.a)(e.messages),[t.message])})}(e,t);case"SET_MESSAGES":return function(e,t){return m(e,{messages:t.messages.reverse()})}(e,t);case"GET_CHATS_SUCCESS":return function(e,t){return m(e,{chats:t.chats})}(e,t);default:return e}},v=a(11),y=a(13),k=a(12),w=a(42),O=a(10),j=a(14),C=a(19),S=a(60),A=function(e){return e.children},D="https://cheerapp4140.herokuapp.com",T="ws://cheerapp4140.herokuapp.com";D="http://127.0.0.1:8000",T="ws://127.0.0.1:8000";var P=function(){function e(){Object(v.a)(this,e),this.callbacks={},this.socketRef=null}return Object(O.a)(e,null,[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),Object(O.a)(e,[{key:"connect",value:function(e){var t=this,a="".concat(T,"/ws/chat/").concat(e,"/");this.socketRef=new WebSocket(a),this.socketRef.onopen=function(){console.log("WebSocket open")},this.socketRef.onmessage=function(e){t.socketNewMessage(e.data)},this.socketRef.onerror=function(e){console.log(e.message)},this.socketRef.onclose=function(){console.log("WebSocket closed let's reopen"),t.connect()}}},{key:"disconnect",value:function(){this.socketRef.close()}},{key:"socketNewMessage",value:function(e){var t=JSON.parse(e),a=t.command;0!==Object.keys(this.callbacks).length&&("messages"===a&&this.callbacks[a](t.messages),"new_message"===a&&this.callbacks[a](t.message))}},{key:"fetchMessages",value:function(e,t){this.sendMessage({command:"fetch_messages",username:e,chatId:t})}},{key:"newChatMessage",value:function(e){this.sendMessage({command:"new_message",from:e.from,message:e.content,chatId:e.chatId})}},{key:"addCallbacks",value:function(e,t){this.callbacks.messages=e,this.callbacks.new_message=t}},{key:"sendMessage",value:function(e){try{this.socketRef.send(JSON.stringify(Object(u.a)({},e)))}catch(t){console.log(t.message)}}},{key:"state",value:function(){return this.socketRef.readyState}}]),e}();P.instance=null;var I=P.getInstance(),_=a(9),N=a(21),x=a.n(N),U=function(e,t){return{type:"AUTH_SUCCESS",token:t,username:e}},F=function(e){return{type:"AUTH_FAIL",error:e}},M=function(){return localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},H=function(e){return function(t){setTimeout(function(){t(M())},1e3*e)}},R=function(e,t){return function(a){a({type:"AUTH_START"}),x.a.post("".concat(D,"/rest-auth/login/"),{username:e,password:t}).then(function(t){var n=t.data.key,r=new Date((new Date).getTime()+36e5);localStorage.setItem("token",n),localStorage.setItem("username",e),localStorage.setItem("expirationDate",r),a(U(e,n)),a(H(3600))}).catch(function(e){a(F(e))})}},L=function(e,t,a,n){return function(r){r({type:"AUTH_START"}),x.a.post("".concat(D,"/rest-auth/registration/"),{username:e,email:t,password1:a,password2:n}).then(function(t){var a=t.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",a),localStorage.setItem("username",e),localStorage.setItem("expirationDate",n),r(U(e,a)),r(H(3600))}).catch(function(e){r(F(e))})}},B=function(){return function(e){var t=localStorage.getItem("token"),a=localStorage.getItem("username");if(void 0===t)e(M());else{var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(M()):(e(U(a,t)),e(H((n.getTime()-(new Date).getTime())/1e3)))}}},W=function(e){return{type:"ADD_MESSAGE",message:e}},q=function(e){return{type:"SET_MESSAGES",messages:e}},G=function(e){return{type:"GET_CHATS_SUCCESS",chats:e}},V=function(e,t){return function(a){x.a.defaults.xsrfHeaderName="X-CSRFTOKEN",x.a.defaults.xsrfCookieName="csrftoken",x.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(t)},x.a.get("".concat(D,"/chat/?username=").concat(e)).then(function(e){return a(G(e.data))})}},z=function(e){return r.a.createElement(C.c,{to:"".concat(e.chatURL),style:{color:"#fff"}},r.a.createElement("li",{className:"contact"},r.a.createElement("div",{className:"wrap"},r.a.createElement("span",{className:"contact-status ".concat(e.status)}),r.a.createElement("img",{src:e.picURL,alt:""}),r.a.createElement("div",{className:"meta"},r.a.createElement("p",{className:"name"},e.name)))))},Y=(a(142),r.a.createElement(_.a,{type:"loading",style:{fontSize:24},spin:!0}),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loginForm:!0},a.changeForm=function(){a.setState({loginForm:!a.state.loginForm})},a.authenticate=function(e){e.preventDefault(),a.state.loginForm?a.props.login(e.target.username.value,e.target.password.value):a.props.signup(e.target.username.value,e.target.email.value,e.target.password.value,e.target.password2.value)},a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"waitForAuthDetails",value:function(){var e=this;setTimeout(function(){null===e.props.token||void 0===e.props.token?(console.log("waiting for authentication details..."),e.waitForAuthDetails()):e.props.getUserChats(e.props.username,e.props.token)},100)}},{key:"componentDidMount",value:function(){this.waitForAuthDetails()}},{key:"openAddChatPopup",value:function(){this.props.addChat()}},{key:"getMatches",value:function(){console.log("Find matches!"),x.a.get("".concat(D,"/profile/matches/?username=").concat(this.props.username)).then(function(e){window.location.reload()})}},{key:"render",value:function(){var e=this,t=this.props.chats.map(function(t){return r.a.createElement(z,{key:t.id,name:t.participants[0]==e.props.username?t.participants[1]:t.participants[0],picURL:"http://emilcarlsson.se/assets/louislitt.png",status:"busy",chatURL:"/chat/".concat(t.id)})});return this.props.isAuthenticated?r.a.createElement("div",{id:"sidepanel"},r.a.createElement("div",{id:"profile"},r.a.createElement("div",{className:"wrap"},r.a.createElement("img",{id:"profile-img",src:"http://emilcarlsson.se/assets/mikeross.png",className:"online",alt:""}),r.a.createElement("p",null,this.props.username))),r.a.createElement("div",{id:"contacts"},r.a.createElement("ul",null,t)),r.a.createElement("div",{id:"bottom-bar"},r.a.createElement("button",{id:"addChat",onClick:function(){return e.openAddChatPopup()}},r.a.createElement("i",{className:"fa fa-user-plus fa-fw","aria-hidden":"true"}),r.a.createElement("span",null,"Create chat")),r.a.createElement("button",{id:"addChat",onClick:function(){return e.getMatches()}},r.a.createElement("i",{className:"fa fa-user-plus fa-fw","aria-hidden":"true"}),r.a.createElement("span",null,"Find matches")))):r.a.createElement(S.a,{to:"/"})}}]),t}(r.a.Component)),K=Object(l.b)(function(e){return{isAuthenticated:null!==e.auth.token,loading:e.auth.loading,token:e.auth.token,username:e.auth.username,chats:e.message.chats}},function(e){return{login:function(t,a){return e(R(t,a))},logout:function(){return e(M())},signup:function(t,a,n,r){return e(L(t,a,n,r))},addChat:function(){return e({type:"OPEN_ADD_CHAT_POPUP"})},getUserChats:function(t,a){return e(V(t,a))}}})(Y),J=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(k.a)(t).call(this,e))).props.onTryAutoSignup(),a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}}]),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-profile"},null!==this.props.username?r.a.createElement(A,null,r.a.createElement("img",{src:"http://emilcarlsson.se/assets/harveyspecter.png",alt:""}),r.a.createElement("p",null,this.props.username),r.a.createElement("div",{className:"social-media"},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"}))):null)}}]),t}(r.a.Component),X=Object(l.b)(function(e){return{username:e.auth.username,token:e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(B())}}})(J),Q=a(395),Z=a(391),$=a(393),ee=a(46),te=Z.a.Item;var ae=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={usernames:[],error:null},a.handleChange=function(e){a.setState({usernames:e})},a.handleSubmit=function(e){var t=a.state.usernames;e.preventDefault(),a.props.form.validateFields(function(e,n){if(!e){var r=[].concat(Object(g.a)(t),[a.props.username]);x.a.defaults.xsrfHeaderName="X-CSRFTOKEN",x.a.defaults.xsrfCookieName="csrftoken",x.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(a.props.token)},x.a.post("".concat(D,"/chat/create/"),{messages:[],participants:r}).then(function(e){a.props.history.push("/".concat(e.data.id)),a.props.closeAddChatPopup(),a.props.getUserChats(a.props.username,a.props.token)}).catch(function(e){console.error(e),a.setState({error:e})})}})},a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,n=t.getFieldsError,o=t.getFieldError,s=(0,t.isFieldTouched)("userName")&&o("userName");return r.a.createElement(Z.a,{layout:"inline",onSubmit:this.handleSubmit},this.state.error?"".concat(this.state.error):null,r.a.createElement(te,{validateStatus:s?"error":"",help:s||""},a("userName",{rules:[{required:!0,message:"Please input the username of the person you want to chat with"}]})(r.a.createElement($.a,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:this.handleChange},[]))),r.a.createElement(te,null,r.a.createElement(ee.a,{type:"primary",htmlType:"submit",disabled:(e=n(),Object.keys(e).some(function(t){return e[t]}))},"Start a chat")))}}]),t}(r.a.Component),ne=Z.a.create()(ae),re=Object(S.e)(Object(l.b)(function(e){return{token:e.auth.token,username:e.auth.username}},function(e){return{closeAddChatPopup:function(){return e({type:"CLOSE_ADD_CHAT_POPUP"})},getUserChats:function(t,a){return e(V(t,a))}}})(ne)),oe=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(Q.a,{centered:!0,footer:null,visible:this.props.isVisible,onCancel:this.props.close},r.a.createElement(re,null))}}]),t}(r.a.Component),se=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(k.a)(t).call(this,e))).state={message:""},a.messageChangeHandler=function(e){a.setState({message:e.target.value})},a.sendMessageHandler=function(e){e.preventDefault();var t={from:a.props.username,content:a.state.message,chatId:a.props.match.params.chatID};I.newChatMessage(t),a.setState({message:""})},a.renderTimestamp=function(e){var t=Math.round(((new Date).getTime()-new Date(e).getTime())/6e4);return t<1?"just now...":t<60&&t>1?"".concat(t," minutes ago"):t<1440&&t>60?"".concat(Math.round(t/60)," hours ago"):t<44640&&t>1440?"".concat(Math.round(t/1440)," days ago"):"".concat(new Date(e))},a.renderMessages=function(e){var t=a.props.username;return e.map(function(e,n,o){return r.a.createElement("li",{key:e.id,style:{marginBottom:o.length-1===n?"300px":"15px"},className:e.author===t?"sent":"replies"},r.a.createElement("img",{src:"http://emilcarlsson.se/assets/mikeross.png",alt:"profile-pic"}),r.a.createElement("p",null,e.content,r.a.createElement("br",null),r.a.createElement("small",null,a.renderTimestamp(e.timestamp))))})},a.scrollToBottom=function(){a.messagesEnd.scrollIntoView({behavior:"smooth"})},a.initialiseChat(),a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"initialiseChat",value:function(){var e=this;this.waitForSocketConnection(function(){I.fetchMessages(e.props.username,e.props.match.params.chatID)}),I.connect(this.props.match.params.chatID)}}]),Object(O.a)(t,[{key:"waitForSocketConnection",value:function(e){var t=this;setTimeout(function(){if(1===I.state())return console.log("Connection is made"),void e();console.log("wait for connection..."),t.waitForSocketConnection(e)},100)}},{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.match.params.chatID!==e.match.params.chatID&&(I.disconnect(),this.waitForSocketConnection(function(){I.fetchMessages(t.props.username,e.match.params.chatID)}),I.connect(e.match.params.chatID))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"frame"},r.a.createElement(K,null),r.a.createElement("div",{className:"content"},r.a.createElement(oe,{isVisible:this.props.showAddChatPopup,close:function(){return e.props.closeAddChatPopup()}}),r.a.createElement(X,this.props),r.a.createElement(A,null,r.a.createElement("div",{className:"messages"},r.a.createElement("ul",{id:"chat-log"},this.props.messages&&this.renderMessages(this.props.messages),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))),r.a.createElement("div",{className:"message-input"},r.a.createElement("form",{onSubmit:this.sendMessageHandler},r.a.createElement("div",{className:"wrap"},r.a.createElement("input",{onChange:this.messageChangeHandler,value:this.state.message,required:!0,id:"chat-message-input",type:"text",placeholder:"Write your message..."}),r.a.createElement("i",{className:"fa fa-paperclip attachment","aria-hidden":"true"}),r.a.createElement("button",{id:"chat-message-submit",className:"submit"},r.a.createElement("i",{className:"fa fa-paper-plane","aria-hidden":"true"}))))))))}}]),t}(r.a.Component),ce=Object(l.b)(function(e){return{username:e.auth.username,messages:e.message.messages,token:e.auth.token}})(se),le=a(389),ie=a(394),ue=Z.a.Item,me=r.a.createElement(_.a,{type:"loading",style:{fontSize:24},spin:!0}),pe=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||a.props.login(t.userName,t.password)})},a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"waitForAuthDetails",value:function(){var e=this;setTimeout(function(){null===e.props.token||void 0===e.props.token?(console.log("waiting for authentication details..."),e.waitForAuthDetails()):e.props.getUserChats(e.props.username,e.props.token)},100)}},{key:"componentDidMount",value:function(){this.waitForAuthDetails()}},{key:"render",value:function(){var e=null;this.props.error&&(e=r.a.createElement("p",{class:"error"}," Invalid username or password!"));var t=this.props.form.getFieldDecorator;return this.props.isAuthenticated?r.a.createElement(S.a,{to:"/"}):r.a.createElement("div",null,e,this.props.loading?r.a.createElement(le.a,{indicator:me}):r.a.createElement(Z.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(ue,null,t("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(ie.a,{prefix:r.a.createElement(_.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(ue,null,t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(ie.a,{prefix:r.a.createElement(_.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(ue,null,r.a.createElement(ee.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Login"),"Or",r.a.createElement(C.c,{style:{marginRight:"10px"},to:"/signup/"}," signup"))))}}]),t}(r.a.Component),he=Z.a.create()(pe),de=Object(l.b)(function(e){return{isAuthenticated:null!==e.auth.token,loading:e.auth.loading,token:e.auth.token,username:e.auth.username,chats:e.message.chats,error:e.auth.error}},function(e){return{login:function(t,a){return e(R(t,a))},logout:function(){return e(M())},signup:function(t,a,n,r){return e(L(t,a,n,r))},addChat:function(){return e({type:"OPEN_ADD_CHAT_POPUP"})},getUserChats:function(t,a){return e(V(t,a))}}})(he),fe=Z.a.Item,ge=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||a.props.signup(t.userName,t.email,t.password,t.confirm)})},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"waitForAuthDetails",value:function(){var e=this;setTimeout(function(){null===e.props.token||void 0===e.props.token?(console.log("waiting for authentication details..."),e.waitForAuthDetails()):e.props.getUserChats(e.props.username,e.props.token)},100)}},{key:"componentDidMount",value:function(){this.waitForAuthDetails()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=null;return this.props.error&&(t=r.a.createElement("div",null,r.a.createElement("p",{class:"error"}," Your password can't be too similar to your other personal information."),r.a.createElement("p",{class:"error"},"Your password must contain at least 8 characters."),r.a.createElement("p",{class:"error"},"Your password can't be entirely numeric."))),this.props.isAuthenticated?r.a.createElement(S.a,{to:"/"}):r.a.createElement(Z.a,{onSubmit:this.handleSubmit},t,r.a.createElement(fe,null,e("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(ie.a,{prefix:r.a.createElement(_.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(fe,null,e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(ie.a,{prefix:r.a.createElement(_.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(fe,null,e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(ie.a,{prefix:r.a.createElement(_.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(fe,null,e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(ie.a,{prefix:r.a.createElement(_.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",onBlur:this.handleConfirmBlur}))),r.a.createElement(fe,null,r.a.createElement(ee.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Signup"),"Or",r.a.createElement(C.c,{style:{marginRight:"10px"},to:"/login/"}," login")))}}]),t}(r.a.Component),Ee=Z.a.create()(ge),be=Object(l.b)(function(e){return{isAuthenticated:null!==e.auth.token,loading:e.auth.loading,token:e.auth.token,username:e.auth.username,chats:e.message.chats,error:e.auth.error}},function(e){return{login:function(t,a){return e(R(t,a))},logout:function(){return e(M())},signup:function(t,a,n,r){return e(L(t,a,n,r))},addChat:function(){return e({type:"OPEN_ADD_CHAT_POPUP"})},getUserChats:function(t,a){return e(V(t,a))}}})(Ee),ve=function(e){function t(e){var a;return Object(v.a)(this,t),a=Object(y.a)(this,Object(k.a)(t).call(this,e)),I.addCallbacks(a.props.setMessages.bind(Object(w.a)(a)),a.props.addMessage.bind(Object(w.a)(a))),a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup(),console.log("Params"),console.log(this.props.match)}}]),Object(O.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"frame"},r.a.createElement(K,null),r.a.createElement("div",{className:"content"},r.a.createElement(oe,{isVisible:this.props.showAddChatPopup,close:function(){return e.props.closeAddChatPopup()}}),r.a.createElement(X,null)))}}]),t}(r.a.Component),ye=Object(l.b)(function(e){return{showAddChatPopup:e.nav.showAddChatPopup,authenticated:e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(B())},closeAddChatPopup:function(){return e({type:"CLOSE_ADD_CHAT_POPUP"})},addMessage:function(t){return e(W(t))},setMessages:function(t){return e(q(t))}}})(ve),ke=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"home-container"},r.a.createElement("header",{id:"header"},r.a.createElement("div",{class:"intro"},r.a.createElement("div",{class:"overlay"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-8 col-md-offset-2 intro-text"},r.a.createElement("h1",null,"Welcome Back Home"),r.a.createElement("p",null,"CHEERAPP! CHEER UP!"),r.a.createElement("a",{href:"#about",class:"btn btn-custom btn-lg page-scroll"},"Learn More")," ")))))),r.a.createElement("div",{id:"get-touch"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-xs-12 col-md-6 col-md-offset-1"},r.a.createElement("h3",null,"Wanna to get started?"),r.a.createElement("p",null,"Sign up without leaving your personal information in 1 minute!")),r.a.createElement("div",{class:"col-xs-12 col-md-4 text-center"},r.a.createElement("a",{href:"#signUp",class:"btn btn-custom btn-lg page-scroll"},"Free Sign Up"))))),r.a.createElement("div",{id:"about"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-xs-12 col-md-6"}," ",r.a.createElement("img",{src:"img/about.jpg",class:"img-responsive",alt:""})," "),r.a.createElement("div",{class:"col-xs-12 col-md-6"},r.a.createElement("div",{class:"about-text"},r.a.createElement("h2",null,"About"),r.a.createElement("h3",null,"What is it?"),r.a.createElement("div",{class:"list-style"},r.a.createElement("p",null,"The main purpose of the application is to provide a platform for people who are willing to share their oppression and respectively for those who want to bring their personal and cultural experience into practice while having a conversation with a person in need. With the hope that we might find a \u201csoulmate\u201d for every user of our website, the aim is to diminish the differences between people in the virtual world and let personalities match each other instead of appearances. As a result, we hope that users will realise the value of being yourself and expressing your mind rather than keep following some social norms concerning, for instance, what beauty means, what might be successful and who should become a role model for the rest of the society. Furthermore, Cheerapp is expected to help people who struggle from loneliness or cannot get rid of the thought that somehow they are not able to blend in with the crowd. Eventually, we seize the opportunity that people who deny to use social networks due to fake personalities and faces might give a chance to an innovative and non-binding chatroom."),r.a.createElement("h3",null,"Who we are?"),r.a.createElement("p",null,"We are a group of students who need to do an open source project for CSCI4140. We are experienced on writing dynamic websites and concerning about students mental health."))))))),r.a.createElement("div",{id:"instruction"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"section-title"},r.a.createElement("h2",null,"Step By Step Guide")),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-4"},r.a.createElement("div",{class:"service-desc"},r.a.createElement("h3",null,"1. Sign In"),r.a.createElement("p",null,"Click the ",r.a.createElement("a",{href:"#page-top"},"sign in")," button on the top."))),r.a.createElement("div",{class:"col-md-4"},r.a.createElement("div",{class:"service-desc"},r.a.createElement("h3",null,"2. Select the role"),r.a.createElement("p",null,'Select the role that you want to be this time. You can be either a "listener" to listen others stories, a "speaker" to share something that you want or "Why not both?". You can change your role anytime you want.'))),r.a.createElement("div",{class:"col-md-4"},r.a.createElement("div",{class:"service-desc"},r.a.createElement("h3",null,"3. Pair up & Chat"),r.a.createElement("p",null,"Our system will pair up a person that fulfill your requirments (only the role and the language that you choose) automatically. It may take a few seconds for pairing up process. After the pairing, you will enter the chatroom. You can chat with your partner!")))))),r.a.createElement("div",{id:"signUp",class:"hideAfterSignIn"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"col-md-8"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"section-title"},r.a.createElement("h2",null,"Visit Us")),r.a.createElement("form",{name:"sentMessage",id:"contactForm",novalidate:!0},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6"}),r.a.createElement("div",{class:"col-md-6"})),r.a.createElement("div",{id:"success"})))),r.a.createElement("div",{class:"col-md-3 col-md-offset-1 contact-info"},r.a.createElement("div",{class:"contact-item"},r.a.createElement("h4",null,"Contact Info"),r.a.createElement("p",null,r.a.createElement("span",null,"Address"),"Room 123, Ho Sin Hang Engineering Building, ",r.a.createElement("br",null),"The Chinese University of Hong Kong,",r.a.createElement("br",null),"Shatin, Hong Kong.",r.a.createElement("br",null))),r.a.createElement("div",{class:"contact-item"},r.a.createElement("p",null,r.a.createElement("span",null,"Phone")," +852 3943 7999")),r.a.createElement("div",{class:"contact-item"},r.a.createElement("p",null,r.a.createElement("span",null,"Email")," johnchan@link.cuhk.edu.hk"))),r.a.createElement("div",{class:"col-md-12"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"social"},r.a.createElement("ul",null,r.a.createElement("li",null,"I hate social media."),r.a.createElement("li",null,r.a.createElement("a",{href:"#page-top",class:"page-scroll"},r.a.createElement("i",{class:"fa fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#page-top",class:"page-scroll"},r.a.createElement("i",{class:"fa fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#page-top",class:"page-scroll"},r.a.createElement("i",{class:"fa fa-google-plus"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#page-top",class:"page-scroll"},r.a.createElement("i",{class:"fa fa-youtube"}))))))))))}}]),t}(r.a.Component),we=a(64),Oe=a(132),je=a.n(Oe),Ce=a(189),Se=a(396),Ae=a(392),De=Z.a.Item,Te=($.a.Option,function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).handleFormSubmit=function(){var e=Object(Ce.a)(je.a.mark(function e(t,n,r){var o,s,c,l,i,u;return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o=a.props.profile.fname,s=a.props.profile.lname,c=a.props.profile.bio,l=a.props.profile.location,i=a.props.profile.mood,""!==t.target.elements.fname.value&&(o=t.target.elements.fname.value),""!==t.target.elements.lname.value&&(s=t.target.elements.lname.value),""!==t.target.elements.bio.value&&(c=t.target.elements.bio.value),""!==t.target.elements.location.value&&(l=t.target.elements.location.value),""!==t.target.elements.mood.value&&(i=t.target.elements.mood.value),u={fname:o,lname:s,bio:c,location:l,mood:i},"put"!==n){e.next=15;break}return e.next=15,x.a.put("".concat(D,"/profile/").concat(r,"/update/"),u).then(function(e){200===e.status&&a.props.history.push("/")});case 15:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(Z.a,{onSubmit:function(t){return e.handleFormSubmit(t,e.props.requestType,e.props.profileID)}},r.a.createElement(De,{label:"First Name"},r.a.createElement(ie.a,Object(we.a)({name:"fname",placeholder:"Enter your first name"},"placeholder",this.props.profile.fname))),r.a.createElement(De,{label:"Last name"},r.a.createElement(ie.a,Object(we.a)({name:"lname",placeholder:"Enter your last name"},"placeholder",this.props.profile.lname))),r.a.createElement(De,{label:"Bio"},r.a.createElement(ie.a,Object(we.a)({name:"bio",placeholder:"Write a short personal bio"},"placeholder",this.props.profile.bio))),r.a.createElement(De,{label:"City"},r.a.createElement(ie.a,Object(we.a)({name:"location",placeholder:"Enter the name of your city"},"placeholder",this.props.profile.location))),r.a.createElement(Z.a.Item,{label:"How are you feeling today?"},r.a.createElement(Se.a.Group,{name:"mood",placeholder:this.props.profile.mood},r.a.createElement(Se.a.Button,{value:"listener"},"I want to listen"),r.a.createElement(Se.a.Button,{value:"sharer"},"I want to share"),r.a.createElement(Se.a.Button,{value:"neutral"},"Surprise me"))),r.a.createElement(Z.a.Item,{label:"Upload",extra:"longgggggggggggggggggggggggggggggggggg"},r.a.createElement(Ae.a,{name:"logo",action:"/upload.do",listType:"picture"},r.a.createElement(ee.a,null,r.a.createElement(_.a,{type:"upload"})," Click to upload"))),r.a.createElement(Z.a.Item,{wrapperCol:{span:12,offset:6}},r.a.createElement(ee.a,{type:"primary",htmlType:"submit"},this.props.btnText)))}}]),t}(r.a.Component)),Pe=Object(l.b)(function(e){return{token:e.auth.token}})(Te),Ie=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={userprofile:{}},a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.profileID;console.log(t),x.a.get("".concat(D,"/profile/?username=").concat(t)).then(function(t){e.setState({userprofile:t.data[0]})})}},{key:"render",value:function(){return console.log(this.state.userprofile),r.a.createElement("div",null,r.a.createElement("div",{class:"profile"}),r.a.createElement(Pe,Object.assign({class:"updateform",form:{name:"validate_other"},profile:this.state.userprofile},this.props,{token:this.props.token,requestType:"put",profileID:this.state.userprofile.id,btnText:"Update"})))}}]),t}(r.a.Component),_e=Object(l.b)(function(e){return{token:e.auth.token}})(Ie),Ne=function(e){function t(e){return Object(v.a)(this,t),Object(y.a)(this,Object(k.a)(t).call(this,e))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}}]),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement(S.b,{exact:!0,path:"/",component:ke}),r.a.createElement(S.b,{exact:!0,path:"/home",component:ke}),r.a.createElement(S.b,{exact:!0,path:"/profile/:profileID/",component:_e}),r.a.createElement(S.b,{exact:!0,path:"/chat/",component:ye}),r.a.createElement(S.b,{exact:!0,path:"/login/",component:de}),r.a.createElement(S.b,{exact:!0,path:"/signup/",component:be}),r.a.createElement(S.b,{exact:!0,path:"/chat/:chatID/",component:ce}))}}]),t}(r.a.Component),xe=Object(l.b)(function(e){return{authenticated:e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(B())}}})(Ne),Ue=a(390),Fe=a(397),Me=Ue.a.Header,He=Ue.a.Content,Re=Ue.a.Footer,Le=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(Ue.a,{className:"layout"},r.a.createElement(Me,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(Fe.b,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},r.a.createElement(Fe.b.Item,{key:"1"},r.a.createElement(C.b,{to:"/#page-top"},"Home")),r.a.createElement(Fe.b.Item,{key:"2"},r.a.createElement(C.b,{to:"/#about"},"About")),r.a.createElement(Fe.b.Item,{key:"3"},r.a.createElement(C.b,{to:"/#signUp"},"Contact")),this.props.authenticated?r.a.createElement(Fe.b.Item,{key:"4"},r.a.createElement(C.b,{to:"/profile/".concat(this.props.username,"/")},"Profile")):r.a.createElement(Fe.b.Item,{key:"4"},r.a.createElement(C.b,{to:"/login"},"Login")),this.props.authenticated?r.a.createElement(Fe.b.Item,{key:"5",onClick:this.props.logout},"Logout"):r.a.createElement(Fe.b.Item,{key:"5"},r.a.createElement(C.b,{to:"/signup"},"signup")),this.props.authenticated&&r.a.createElement(Fe.b.Item,{key:"6"},r.a.createElement(C.b,{to:"/chat"},"Chat")))),r.a.createElement(He,{style:{padding:"0 0px"}},r.a.createElement("div",null,this.props.children)),r.a.createElement(Re,{style:{textAlign:"center"}},"Ant Design \xa92016 Created by Ant UED"))}}]),t}(r.a.Component),Be=Object(S.e)(Object(l.b)(null,function(e){return{logout:function(){return e(M())}}})(Le)),We=function(e){function t(e){var a;return Object(v.a)(this,t),a=Object(y.a)(this,Object(k.a)(t).call(this,e)),I.addCallbacks(a.props.setMessages.bind(Object(w.a)(a)),a.props.addMessage.bind(Object(w.a)(a))),a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}}]),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(Be,this.props,r.a.createElement(xe,{banan:"stupid"})))}}]),t}(r.a.Component),qe=Object(l.b)(function(e){return{showAddChatPopup:e.nav.showAddChatPopup,authenticated:e.auth.token,username:e.auth.username}},function(e){return{onTryAutoSignup:function(){return e(B())},closeAddChatPopup:function(){return e({type:"CLOSE_ADD_CHAT_POPUP"})},addMessage:function(t){return e(W(t))},setMessages:function(t){return e(q(t))}}})(We),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d;var Ve=function(){var e=Object(c.c)({auth:h,nav:f,message:b});return Object(c.e)(e,Ge(Object(c.a)(i.a)))}(),ze=r.a.createElement(l.a,{store:Ve},r.a.createElement(qe,null));s.a.render(ze,document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.ee70e8db.chunk.js.map