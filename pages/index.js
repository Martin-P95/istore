import Head from "next/head";
import Image from "next/image";
import produkty from "../resources/produkty";
import Produkt from "../komponenty/Produkt";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("");
  console.log(produkty);
  return (
    <>
      <Head>
        <title>Hlavní stránka-iStore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul className="navcontainer">
        <li onClick={() => setCategory("iphone")}>iPhone</li>
        <li onClick={() => setCategory("mac")}>Mac</li>
        <li onClick={() => setCategory("ipad")}>iPad</li>
        <li onClick={() => setCategory("applewatch")}>Apple Watch</li>
        <li onClick={() => setCategory("other")}>Příslušenství</li>
      </ul>

      <div className="produkty container">
        {produkty.map(
          (produkt, i) =>
            (category === produkt.category || category === "") && (
              <Produkt produkt={produkt} key={i} />
            )
        )}
      </div>
    </>
  );
}
