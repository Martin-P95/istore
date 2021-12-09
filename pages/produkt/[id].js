import React from "react";
import produkty from "../../resources/produkty";
import logo from "../../public/iStoreLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faShoppingCart, faShuttleVan } from "@fortawesome/free-solid-svg-icons";

export default function Produkt({ produkt }) {
    return (
        <div >
            {produkt !== null ? (
                <>
                <div className="stranka">
                
                <div className="row">
                  
                <div className="col-md-6">
                <div className="sinfo">
                        <h1 className="nazevP">{produkt.nazev}</h1>
                        <h2 className="popisP">{produkt.popis}</h2>
                        <h2 className="cenaP">{produkt.cena} kč</h2>
                        <button className="tlačítko">Koupit</button>
                        </div>
                </div>
                    
                <div className="col-md-6"> 
                <div className="sobrazek">
                <img className="obrazekP" src={produkt.obrazek} alt="" />
                </div>    
                </div>
                </div>
                </div>
                </>
               
            ) : (
                <h1>Produkt nenalezen</h1>
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