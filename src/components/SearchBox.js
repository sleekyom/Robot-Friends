import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div>
      <input
        className="pa3 br2 ba b--green bg-lightest-blue"
        type="Search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
