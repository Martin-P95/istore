import React from "react";
import { useRouter } from "next/router";
import produkty from "../../resources/produkty";
import { useEffect, useState } from "react";

export default function Produkt() {
    const [produkt, setProdukt] = useState(null);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (id !== undefined) {
            setProdukt(produkty.find((item) => item.id === +id));
        }
    }, [id]);
    return <div>{produkt !== undefined && produkt !== null ? <h1>{produkt.nazev}</h1> : "Načítání"}</div>;
}