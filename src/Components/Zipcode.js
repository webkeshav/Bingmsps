import React from "react";
import { useState } from "react";

function Zipcode({ uniquePostal }) {
  const [zipvalue, setZipvalue] = useState(null);

  const handleZipCodeValue = () => {

  };
  return (
    <div className="dropdown my-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Zip Codes
      </button>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="dropdownMenuButton2"
      >
        {uniquePostal.map((element) => {
          return (
            <li key={element}>
              <a
                className="dropdown-item"
                onClick={handleZipCodeValue}
                href="#"
              >
                {element}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Zipcode;
