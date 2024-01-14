import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBomb } from "react-icons/fa";

const Sidebar = ({ zines }) => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h2>Index</h2>
        <ul>
          {Array.isArray(zines) ? (
            zines.map((zine, index) => (
              <div key={index}>
                <li>
                  <ScrollLink to={zine.title} smooth={true} duration={500}>
                    <FaBomb />
                    &nbsp;
                    {zine.title}, {zine.author}
                  </ScrollLink>
                </li>
              </div>
            ))
          ) : (
            <li>No zines available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
