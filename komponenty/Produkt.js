import React from 'react'

export default function Produkt({ produkt }) {
    const { id, nazev, popis, cena } = produkt;
    return (
        <div>
            <div class="card">
                <div class="imgBx">
                    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000"></img>
                </div>
                <div class="contentBx">
                    <h3 class="name">{nazev}</h3>
                    <h2 class="price">{cena}<small>kč</small></h2>
                    <a href={`/produkt/${id}`} class="buy">Koupit</a>
                </div>
            </div>
        </div>
    )
}
