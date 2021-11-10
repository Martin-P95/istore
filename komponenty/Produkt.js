import React from 'react'

export default function Produkt({ produkt }) {
    const { id, nazev, popis, cena } = produkt;
    return (
        <div>
            <div class="card">
                <divc class="imgBx">
                    <img src="https://www.datart.cz/foto/250/5/9/6/product_4777695.jpg"></img>
                </divc>
                <div class="contentBx">
                    <h3 class="name">{nazev}</h3>
                    <h2 class="price">{cena}<small>kč</small></h2>
                    <a href="#" class="buy">Koupit</a>
                </div>
            </div>
        </div>
    )
}
