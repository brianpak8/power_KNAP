import React from 'react';
import axios from 'axios';

class FBLoginBtn extends React.Component {
  constructor(props) {
    super(props);
    this.getFBInfo = this.getFBInfo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  // initialze and setup facebook js sdk
   window.fbAsyncInit = function() {
    FB.init({
      appId      : '168772223720117',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
      });

    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }.bind(this);

  // Load the SDK asynchronously
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=168772223720117';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  window.handleClick = this.handleClick;
}

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      // document.getElementById('status').innerHTML =
      // 'Thanks for logging in, ' + response.name + '!';
    });
  }

// This is called with the results from from FB.getLoginStatus().
  statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      //this.testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      // document.getElementById('status').innerHTML = 'Please log ' +
      // 'into Facebook.';
      // alert('Please log into Facebook.');
    }
  }

  checkLoginState() {
    console.log('********checkLoginState');
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }

  handleClick() {
    // console.log('clicked');
    // FB.login(this.checkLoginState());
    FB.login(response => {
      this.checkLoginState();
      console.log('FBLoginBtn response: ', response);
      if (response.authResponse) {
        this.getFBInfo();
      }
    });
  }

  getFBInfo() {
    FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
      console.log('get user fb info: ', response);

      axios.post(`/fbinfo/${response.id}/${response.first_name}/${response.last_name}`, {
        id: response.id,
        firstName: response.first_name,
        lastName: response.last_name
      })
      .then(function (response) {
        console.log('axios post success: ',response);
      })
      .catch(function (error) {
        console.log('axios post error: ',error);
      });
    });
  }

  render() {
    return(
      <div id="fb-root">
        <div class="fb-login-button"
        data-max-rows="1"
        data-size="large"
        data-button-type="login_with"
        data-show-faces="true"
        data-auto-logout-link="true"
        data-use-continue-as="true"
        data-onlogin="handleClick();">
        </div>
      </div>
    )
  }
}

export default FBLoginBtn;
