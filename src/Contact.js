import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Need to get ahold of us?</h2>
        <img src="map.png" alt="Map" width="500" height="300" class="center" />
        <p>Our restaurant is located at <address>550 First Colonial Rd #309, Virginia Beach, VA 23451.</address>
        Please feel free to reach out to us at <em>839-283-2835</em>
        </p>
      </div>
    );
  }
}
 
export default Contact;