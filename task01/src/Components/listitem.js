import React from "react";

export default function ListItem(props) {
  return (
    <div className="w-1/2 py-2 pl-4 border-solid border border-blue-200 cursor-pointer hover:border-blue-500">
      <p className="text-lg font-semibold">{props.item}</p>
      <p className="text-sm">{props.itemDetail}</p>
    </div>
  );
}
