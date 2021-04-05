import React, { Component } from "react";
 
class Order extends Component {
  render() {
    return (
        <div>
            <p>If you would like to order online, please go to the following third-party sites and get hot, authentic Thai food delivered straight to your door!</p>
            <table align="center">
                <tr>
                    <td>
                        <a href="https://www.doordash.com"><img src="DoorDash.png" alt="DoorDash" width="300" height="300"/></a>
                    </td>
                    <td>
                    <a href="https://www.grubhub.com"><img src="GrubHub.png" alt="GrubHub" width="300" height="300"/></a>
                    </td>
                </tr>
            </table>
                </div>
    )
  }
}
export default Order;