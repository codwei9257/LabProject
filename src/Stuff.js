import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Menu</h2>
        <p>We have a lot of excellent choices to chose from when it comes to your Thai cuisine experience. Please select from the list below. </p>
        <ul>
          <li><b>Tom Yum Soup</b>
          <p>A signature Thai soup, the broth is flavored with lemon grass, mushrooms, tomatoes and your choice of chicken or shrimp</p></li>
          <li><b>Golden Spring Rolls</b>
          <p>A classic starter, our crispy vegetable rolls are filled with celery, carrots, cabbage and cellophane noodle and are served with sweet and sour sauce. (4 Pieces)</p></li>
          <li><b>Roti Kanai w/ Yellow Curry Chicken</b>
          <p>Yellow chicken curry made with potatoes and carrots served with grilled roti bread for dipping</p></li>
          <li><b>Thai Chili Tilapia</b>
          <p>Fresh crispy Tilapia filet served over a bed of steamed mixed vegetables with Thai style chili sauce on top</p></li>
          <li><b>Panang Curry</b>
          <p>A Thai comfort food, this curry dish is made with your choice of meat simmered in a savory curried peanuts sauce with coconut milk and aromatic kaffir lime leaves served with a side of steamed broccoli</p></li>
        </ul>
      </div>
    );
  }
}
 
export default Stuff;