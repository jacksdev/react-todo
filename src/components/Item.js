import React from 'react';


//Item Component
const Item = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.itemText}</p>
    <button
      className="button--link"
      onClick={(e) => {
        props.handleDeleteItem(props.itemText)
      }}>clear item </button>
  </div>
);
export default Item;
