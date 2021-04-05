import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <p align="center">You have come to the right place for authentic Thai food. Here you will find fresh, delicious, high quality Thai food that is never cooked with MSG and always prepared just as spicy as you like it by our expert chef from Thailand.
</p>
        <table border="5" align="center">
            <tr>
                <td><img src="thaiexample1.jpg" alt="Thai Food" width="300" height="250"/></td>
                <td><img src="thaiexample2.jpg" alt="Thai Food" width="300" height="250"/></td>
                <td><img src="thaiexample3.jpg" alt="Thai Food" width="300" height="250"/></td>
                <td><img src="thaiexample4.jpg" alt="Thai Food" width="300" height="250"/></td>
            </tr>
        </table>
        <blockquote>"Super great Thai food! We ordered the spicy tilapia, drunken noodles, spring rolls, and chicken and broccoli. Everything tasted delicious. The service was great. Loved our waiter! The food came out fast and it was so tasty. Highly recommend!"-Chandi R.</blockquote>
 
        <p align="center">“Kao Thai” means both Thai rice and Thai food, and here you will experience the essence of Thai food complete with the four Thai flavors (sweet, sour, spicy, and salty), aromatic spices and herbs that Thai food is known for. Rice is a staple of the Thai diet, and we hope that our Thai food will become a favorite of yours. From noodles to curries, stir-fry’s to seafood, of course desserts and much more, we invite you to enjoy our family’s perfected recipes.</p>
      </div>
    );
  }
}
 
export default Home;