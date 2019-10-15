import React from "react";
import Review from "./components/Review";
import GetReviews from "./components/GetReviews";
import Test from "./components/Test";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Example from "./components/Example";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Example />
      <Landing />
      <Review />
      <GetReviews />
      {/* <Test /> */}
    </div>
  );
}

export default App;
