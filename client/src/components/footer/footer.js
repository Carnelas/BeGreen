
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';

class Footer extends Component {

    render () {
return (
<div className="foter">
        <a href="#" target='_blank' title='blog'><img src="http://jthink.net/images/blogger.png" alt="blog" title=" blog" className="btn btn-outline"/></a>
        <a href="#" target="_blank" title="Facebook page"><img src="http://jthink.net/images/facebook.png" alt="Facebook page" title=" Facebook page" height="32" width="32"/></a>&nbsp;
        <a href="#" target="_blank" title="Google+ page"><img src="http://jthink.net/images/google_plus.png" alt="google_plus" title=" Google+ page" height="32" width="32"/></a>&nbsp;
        <a href="#" target="_blank" title="YouTube channel"><img src="http://jthink.net/images/youtube.png" alt="YouTube" title=" YouTube channel" height="32" width="32"/></a>
        <a href="#" target="_blank" title="Email"><img src="http://jthink.net/images/email.png" alt="Email" title="Email" height="32" width="32"/></a>&nbsp;
        <a href="#" target="_blank" title="Subscribe to Weekly Newsletter"><img src="http://jthink.net/images/subscribe_newsletter.png" alt="Subscribe to Weekly Newsletter" title="Subscribe to Weekly Newsletter"/></a>&nbsp;
</div>
   )   }

}
export default Footer;

