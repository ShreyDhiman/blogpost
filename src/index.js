import React from "react";
import { render } from "react-dom";
import profile1 from "./img/pPic.jpg";
import Card from "./card";
import "./index.css";

const App = () => {
  return (
    <div>
      <Card
        name="Shrey"
        time="Today at 5:00pm"
        img={profile1}
        text="Hello, How you doin."
      />
      <Card
        name="Shrey"
        time="Today at 6:00pm"
        img={profile1}
        text="Hello, How you doin."
      />
      <Card
        name="Shrey"
        time="Today at 7:00pm"
        img={profile1}
        text="Hello, How you doin."
      />
    </div>
  );
};

render(<App />, document.querySelector("#root"));
