import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ProduitList from "./produitlist/ProduitList";
import HeaderNav from "./entete/HeaderNav";
import AdminCardList from "./component/admincard/AdminCardList";
import AdminAddProd from "./component/add/AdminAddProd";

function App() {
  const [produit, setProduit] = useState([
    {
      id: Math.random(),
      name: "Ball(world cup)",
      imgURL: [
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsHajBQxVfo6KjKaQ4x71Noc1W3J1DuSbuqxwuYYGBCcG8e_O_aX1TnoHrVfWNVko_48&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQkgNFeNwbpv-QmZkYP63l4GF96lX40ou9MEfVp52BLr3Xv2yq8q3R8Kfu6lMChM3dZU&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlmgjsAJ7X2mDDv49pnapom13Bn31hOtukKiSlo9S9G_MQSG7HjLXrmobpr__jLQsDFI&usqp=CAU",
        },
      ],
      price: 30,
      discount: 15,
    },
    {
      id: Math.random(),
      name: "Tee-shirt(L.messi)",
      imgURL: [
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNfspv4E9JwbXCFpIPwdBQzmt4rNfPRCrUstxrVg--6Tl7d51ijgOjdqZqm-B8jCKXek&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqLJjyQSxbFzGcSImK_358i65t3goTCnb4ol8iHp2cn_uVW9Q_sZSF6qreUpIg_9CW2o&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://acdn.mitiendanube.com/stores/003/160/777/products/b2-875f4198faa7ad501217002420896432-640-0.webp",
        },
      ],
      price: 78,
      discount: 15,
    },
    {
      id: Math.random(),
      name: "Tee-shirt(CR7)",
      imgURL: [
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nbKEFoIIh4H1N-SZiElbjL1kij_6Fw_Smg&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://i.etsystatic.com/6260688/r/il/57b135/5614949019/il_794xN.5614949019_qhi7.jpg",
        },
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKwNmnZCgL4qNjsWDmGrToeTlHQ5VVKRdMw&usqp=CAU",
        },
      ],
      price: 78,
      discount: 15,
    },
    {
      id: Math.random(),
      name: "Tee-shirt SC(CR7)",
      imgURL: [
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvC86hxohjm1sJdlQkjiXMmBW3OPpEAIFFUw&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8t4lI311cMbtIJlgrk1IZLCAP2QacN_EmA&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8WFgwRNYrB2YEIaAlWVkAgDSWo1GHnOvrg&usqp=CAU",
        },
      ],
      price: 45,
      discount: 15,
    },
    {
      id: Math.random(),
      name: "Tee-shirt FC.Barcelona(L.Messi)",
      imgURL: [
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM974UUGCtG2oQi7t5IY439mY53SgKs18d5g&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfJuduwsdg3ArHBxbozkwZXUUmFhQU9L5Qg&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://www.gogoalshopcloud.com/upload/ttmall/img/20210125/a90ae41da5fdda0fb9fc2a0dcb3efac0.png=z-780,780_f-webp",
        },
      ],
      price: 55,
      discount: 15,
    },
    {
      id: Math.random(),
      name: "FootBall Boot(L.Messi)",
      imgURL: [
        {
          id: Math.random(),
          URL: "https://www.kickgame.co.uk/cdn/shop/products/adidas-speedportal1-fg-messi-leyenda-HP9138_2.jpg?v=1671755101&width=1024",
        },
        {
          id: Math.random(),
          URL: "https://www.kickgame.co.uk/cdn/shop/products/adidas-speedportal1-fg-messi-leyenda-HP9138_3.jpg?v=1671755101&width=1024",
        },
        {
          id: Math.random(),
          URL: "https://www.kickgame.co.uk/cdn/shop/products/adidas-speedportal1-fg-messi-leyenda-HP9138_5.jpg?v=1671755101&width=1024",
        },
      ],
      price: 350,
      discount: 15,
    },

    {
      id: Math.random(),
      name: "FootBall Boot(CR7)",
      imgURL: [
        {
          id: Math.random(),
          URL: "https://i0.wp.com/www.soccercleats101.com/wp-content/uploads/2017/01/Nike-CR7-Superfly-Vitorias.jpg",
        },
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFlssqc_m06CmMx9wdEguRhBa1AgRgsYZPt20jk-q79mUeuhPKoenATaMmaWEOmT9MrI&usqp=CAU",
        },
        {
          id: Math.random(),
          URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLqiGZ9Dakc4nCYjyO3rya19A71L5qYP7JH_nkLwSWS5y8T_pDYU2RLyPfxtlcYbAb_0&usqp=CAU",
        },
      ],
      price: 325,
      discount: 15,
    },
    {
      id: Math.random(),
      name: "FootBall Boot(adidas)",
      imgURL: [
        {
          id: Math.random(),
          URL: "https://m.media-amazon.com/images/I/81hblzp9E5L._AC_SL1500_.jpg",
        },
        {
          id: Math.random(),
          URL: "https://m.media-amazon.com/images/I/815fYVGBxGL._AC_SL1500_.jpg",
        },
        {
          id: Math.random(),
          URL: "https://m.media-amazon.com/images/I/71LjC6hvyuL._AC_SL1500_.jpg",
        },
      ],
      price: 265,
      discount: 15,
    },
  ]);
  const [search, setSearch] = useState("");
  const handlesearch = (e) => {
    setSearch(e.target.value);
  };
  const handledelete = (prodID) => {
    setProduit(produit.filter((el) => el.id !== prodID));
  };
  const handleadd = (newProd) => {
    setProduit([...produit, newProd]);
  };
  return (
    <div className="App">
      <HeaderNav search={search} handlesearch={handlesearch} />
      <ProduitList produit={produit} search={search} />
      <hr />
      <hr />
      <AdminCardList produit={produit} search={search} del={handledelete} />
      <AdminAddProd add={handleadd} />
    </div>
  );
}

export default App;
