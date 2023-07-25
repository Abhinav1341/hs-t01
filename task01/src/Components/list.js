import React from "react";
import ListItem from "./listitem";

export default function ListOfItems() {
  return (
    <div className="mt-4 flex flex-grow flex-col justify-center items-center">
      <ListItem item="KitKat" itemDetail="A product by Nestle" />
      <ListItem item="Milky Bar" itemDetail="A product by Nestle" />
      <ListItem item="Dairy Milk" itemDetail="A product by Cadbury" />
      <ListItem item="Bournville" itemDetail="A product by Cadbury" />
    </div>
  );
}
