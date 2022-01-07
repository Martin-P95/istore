import React from "react";
import produkty from "../../resources/produkty";
import logo from "../../public/iStoreLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartArrowDown, faSearch, faShoppingCart, faShuttleVan } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

export default function Produkt({ produkt }) {
  const pridatDoKosiku = () => {
    let produkty = JSON.parse(Cookies.get("kosik") !== undefined ? Cookies.get("kosik") : false) || [];
    produkty.push(produkt);
    Cookies.set("kosik", JSON.stringify(produkty));
  };

  return (
    <div>
      {produkt !== null ? (
        <>
          <div className="stranka">
            <div className="row">
              <div className="col-md-6">
                <div className="btext">
                  <div className="sinfo">
                    <h1 className="nazevP">{produkt.nazev}</h1>
                    <h2 className="cenaP">Cena: {produkt.cena} kč</h2>
                    <button className="tlačítko" onClick={pridatDoKosiku}>
                      Přidat <FontAwesomeIcon icon={faCartArrowDown} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sobrazek">
                  <img className="obrazekP" src={produkt.obrazek} alt="" />
                </div>
              </div>
              <div className="popisC">
                <h2 className="popisP">{produkt.popis}</h2>
              </div>
            </div>
          </div>
          <div className="košíkP2">
      <a  className="košík" href="http://localhost:3000/objednavka"><FontAwesomeIcon icon={faCartArrowDown}/></a>
      </div>
        </>
        
      ) : (
        <h1 className="popisP">Produkt nenalezen</h1>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const produkt = produkty.find((item) => item.id === +id);
  return {
    props: { produkt: produkt !== undefined ? produkt : null },
  };
}
