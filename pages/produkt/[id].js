import React from "react";
import produkty from "../../resources/produkty";

export default function Produkt({ produkt }) {
    return <div>{produkt !== null ? <h1>{produkt.nazev}</h1> : <h1>Produkt nenalezen</h1>}</div>;
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const produkt = produkty.find((item) => item.id === +id);
    return {
        props: { produkt: produkt !== undefined ? produkt : null },
    };
}