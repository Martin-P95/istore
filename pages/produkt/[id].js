import React from 'react'
import { useRouter } from 'next/router'
import produkty from '../../resources/produkty';


export default function Produkt() {
    const router = useRouter()
    const { id } = router.query
    produkty.map(item => console.log(item.id))
    let produkt = produkty.filter(item => { return parseInt(item.id) === parseInt(id) })
    return (
        <div>
            <h1>{produkt[0].nazev}</h1>

        </div>
    )
}
