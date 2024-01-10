import React from "react";
import { Banner } from "../components/Banner";
import { GridItems } from "../components/GridItems";
import { ItemPopup } from "../components/ItemPopup";

export const Home = () => {
  return (
    <>
      <Banner />
      <GridItems />
      <ItemPopup />
    </>
  );
};
