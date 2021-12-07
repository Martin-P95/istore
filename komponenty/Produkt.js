import React from 'react'

export default function Produkt({ produkt }) {
    const { id, nazev, popis, cena, obrazek } = produkt;
    return (
        <div>
            <div className="card">
                <div className="imgBx">
                    <img className="obrazek"src={obrazek} />
                </div>
                <div className="contentBx">
                    <h3 className="name">{nazev}</h3>
                    <h2 className="price">{cena}<small>kč</small></h2>
                    <a href={`/produkt/${id}`} className="buy">Koupit</a>
                </div>
            </div>
        </div>
    )
}
