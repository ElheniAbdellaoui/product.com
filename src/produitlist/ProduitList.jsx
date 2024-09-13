import React from "react";
import ProduitCard from "../produitcard/ProduitCard";

const ProduitList = ({ produit, search }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {produit
        .filter((el) =>
          el.name.toUpperCase().trim().includes(search.toUpperCase().trim())
        )
        .map((el) => (
          <ProduitCard el={el} key={el.id} />
        ))}
    </div>
  );
};

export default ProduitList;
