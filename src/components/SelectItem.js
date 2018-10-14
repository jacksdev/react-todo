import React from 'react';


const SelectItem = (props) => (

  <div>
    <button
      className="big-button"
      onClick={props.handleSelectedItem}
      disabled={!props.hasOptions}
      >Random item on list </button>
  </div>
);

export default SelectItem;
