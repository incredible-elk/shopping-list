import React from 'react';

export default function StoreComponent({ storeName, itemList }) {
  return (
    <li>
      {storeName}
      <ul>
        {itemList.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </li>
  );
}
