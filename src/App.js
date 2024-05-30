import "./App.css";
import Button from "./components/Button.js";
import { Link } from "react-router-dom";
import Arrow from "./icons/regular/Arrow.jsx";

function App() {
  return (
    <>
      {/* <Button children={"hello world"} /> */}
      <Button
        // styles="flex justify-center flex-row"
        styles={`flex flex-row`}
        children={"Take an Appointment"}
        iconStyle={""}
        // href={"http://www.google.com"}
        icon={<Arrow />}
      />
      {/* <Arrow /> */}
    </>
  );
}

export default App;
