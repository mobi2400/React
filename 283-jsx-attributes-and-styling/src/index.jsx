import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false">My Favourite Foods</h1>
    <div>
      <img  className="food-img" src="https://madscookhouse.com/wp-content/uploads/2021/01/Subz-Vegetable-Biryani.jpg" alt="biryani" />
      <img  className="food-img" src="https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=800&q=82&auto=format&fit=crop&dm=1662474181&s=70c29a2dbd0cfbac22bb3fdedf6fbd29" alt="" />
      <img  className="food-img" src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="" />
    </div>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
