import React from "react";
import AdmiProduit from "../../produitcard/admiproduit/AdmiProduit";

const AdminCardList = ({ produit, search, del }) => {
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
          <AdmiProduit el={el} key={el.id} del={del} />
        ))}
    </div>
  );
};

export default AdminCardList;
