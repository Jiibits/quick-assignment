
import React, { useState } from "react";
import "./DropDown.css";

function DropDown({
  groupOption,
  setGroupOption,
  orderOption,
  setOrderOption,
}) {
  const handleGroupOptionChange = (option) => {
    setGroupOption(option);
  };

  const handleOrderOptionChange = (option) => {
    setOrderOption(option);
  };

  const [displayOpen, setDisplayOpen] = useState(false);

  const toggleDisplay = () => {
    setDisplayOpen(!displayOpen);
  };

  return (
    <div className="DropDown">
      <div className="display-box" onClick={toggleDisplay}>
        <label id="me" htmlFor="displayDropdown">Display</label>
      </div>
      {displayOpen && (
        <div className="column-box">
          <div className="dropdown">
            <label htmlFor="groupDropdown">Grouping:</label>
            <select
              id="groupDropdown"
              value={groupOption}
              onChange={(e) => handleGroupOptionChange(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="prioritygrouping">Priority</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="orderDropdown">Ordering:</label>
            <select
              id="orderDropdown"
              value={orderOption}
              onChange={(e) => handleOrderOptionChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;

