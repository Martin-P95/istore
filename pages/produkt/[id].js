import React from "react";
import produkty from "../../resources/produkty";
import logo from "../../public/iStoreLogo.svg";

export default function Produkt({ produkt }) {
    return (
        <div >
            {produkt !== null ? (
                <div className="cele" >
                    <h1>{produkt.nazev}</h1>
                    <h2>{produkt.cena} kč</h2>
                    <img src={produkt.obrazek} alt="" />
                    <img src={logo} alt="" />



                </div>
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