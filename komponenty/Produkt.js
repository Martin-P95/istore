import React from 'react'

export default function Produkt({ produkt }) {
    const { id, nazev, popis, cena } = produkt;
    return (
        <div>
            <h2>{nazev}</h2>
            <h3>{popis}</h3>
            <h3>{cena}</h3>
        </div>
    )
}
