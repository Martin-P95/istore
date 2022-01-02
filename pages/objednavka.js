import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function objednavka() {
    return (
        <>
            <div className="small-container card-page">
                <div className='table-karta'>
                    <table>
                        <tr>
                            <th>Produkt</th>
                            <th>Množství</th>
                            <th>Cena</th>
                        </tr>
                        <tr>
                            <td>
                                <div className="card-info">
                                    <img src="/obrázky/iphonese.png" alt="" />
                                    <div>
                                        <p>Ipad pro 2020</p>
                                        <small>cena:500kč</small>
                                        <br />
                                        <a href="">odebrat</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" value="1"></input></td>
                            <td>5000 kč</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="card-info">
                                    <img src="/obrázky/mbp16.png" alt="" />
                                    <div>
                                        <p>Ipad pro 2020</p>
                                        <small>cena:500kč</small>
                                        <br />
                                        <a href="">odebrat</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" value="1"></input></td>
                            <td>5000 kč</td>
                        </tr>

                    </table>
                    <div className="total-price">
                        <table>
                            <tr>
                                <td>Daň</td>
                                <td>2000kč</td>
                            </tr>
                            <tr>
                                <td>Celkem</td>
                                <td>2000kč</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='dotaznik'>
                    <h3 className='dotaznikN'>Jméno Příjmení</h3>
                    <input type="text" className='poled' />
                    <h3 className='dotaznikN'>E-mail</h3>
                    <input type="text" className='poled' />
                    <h3 className='dotaznikN'>Adresa doručení</h3>
                    <input type="text" className='poled' />
                    <h3 className='dotaznikN'>Číslo karty</h3>
                    <input type="text" className='poled' />
                    <button className="tkoupit">Objednat</button>
                </div>

            </div>
        </>
    )
}
