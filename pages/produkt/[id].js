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
                <img className="logo"src="/iStoreLogo.svg" alt="" />
                <div className="row">
                  
                <div className="col-md-6">
                <div className="Sinfo">
                        <h1>{produkt.nazev}</h1>
                        <h2>{produkt.popis}</h2>
                        <h2>{produkt.cena} kč</h2>
                        </div>
                </div>
                    
                <div className="col-md-6"> 
                <div className="Sobrazek">
                <img src={produkt.obrazek} alt="" />
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