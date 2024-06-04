import "./App.css";

import FooterSocialLinks from "./components/FooterSocialLInks";
import Facebook from "./icons/regular/Facebook";

function App() {
  return (
    <>
      <div className="bg-primary">
        <FooterSocialLinks img={<Facebook/>} />
      </div>
    </>
  );
}

export default App;
