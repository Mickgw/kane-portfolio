
import { useLocation } from "react-router-dom";

function Transition() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div id="loader" className="pageloader">
      <div className="pageloader-inner">
        <h2 id="text" className="pageloader-text">
          {splitLocation[1].replace(/\//g, "")}
        </h2>
      </div>
    </div>
  );
}

export default Transition;
