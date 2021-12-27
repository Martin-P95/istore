import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'

export default function objednavka() {
    return (
        <>
        <div className='small-container card-page'>
            <div className='table-karta'>
<table>
    <tr>
        <th>produkt</th>
        <th>množství</th>
        <th>cena</th>
    </tr>
    <tr>
        <td>
            <div className='card-info'>
             <img src="/obrázky/mbp-14.png" alt="" /> 
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
             <img src="/obrázky/mbp-14.png" alt="" /> 
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
<div className='total-price'>
    <table>
    <tr>
        <td>subtotal</td>
        <td>2000kč</td>
    </tr>
    <tr>
        <td>tax</td>
        <td>2000kč</td>
    </tr>
    <tr>
        <td>total</td>
        <td>2000kč</td>
    </tr>
    </table>
</div>
</div>
<button className='tlačítko'>koupit</button>
       </div>
        </>
    )
}
