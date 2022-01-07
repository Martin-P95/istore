import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { faCaravan, faTrash, faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";

export default function Objednavka() {
  const [produkty, setProdukty] = useState([]);
  const [form, setForm] = useState({
    jmeno: "",
    email: "",
    adresa: "",
    cislo: "",
  });

  const changeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  useEffect(() => {
    setProdukty(JSON.parse(Cookies.get("kosik") !== undefined ? Cookies.get("kosik") : false) || []);
  }, []);

  const odebrat = (id) => {
    setProdukty(produkty.filter((produkt, i) => i !== id));
    Cookies.set("kosik", JSON.stringify(produkty.filter((produkt, i) => i !== id)));
  };

  const spocitejCenu = () => {
    let cena = 0;
    produkty.forEach((produkt) => (cena += produkt.cena));
    return cena;
  };

  return (
    <>
      <div className="small-container card-page">
        <div className="table-karta">
          <table>
            <tbody>
              <tr>
                <th>Produkt</th>
               
                <th>Cena</th>
              </tr>
              {produkty.map((produkt, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <div className="card-info">
                        <img src={produkt.obrazek} alt="" />
                        <div>
                          <p>{produkt.nazev}</p>
                          <small>cena:{produkt.cena}</small>
                          <br />
                          <span onClick={() => odebrat(i)}><FontAwesomeIcon icon={faTrash}/></span>
                        </div>
                      </div>
                    </td>
                    
                    <td>{produkt.cena} kč</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="total-price">
            <table>
              <tbody>
                <tr>
                  <td>Daň</td>
                  <td>{spocitejCenu() * 1.05-spocitejCenu()}kč</td>
                </tr>
                <tr>
                  <td>Celkem</td>
                  <td>{spocitejCenu() * 1.05}kč</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="dotaznik">
          <h3 className="dotaznikN">Jméno Příjmení</h3>
          <input type="text" className="poled" name="jmeno" value={form.jmeno} onChange={(e) => changeForm(e)} />
          <h3 className="dotaznikN">E-mail</h3>
          <input type="text" className="poled" name="email" value={form.email} onChange={(e) => changeForm(e)} />
          <h3 className="dotaznikN">Adresa doručení</h3>
          <input type="text" className="poled" name="adresa" value={form.adresa} onChange={(e) => changeForm(e)} />
          <h3 className="dotaznikN">Číslo karty</h3>
          <input type="text" className="poled" name="cislo" value={form.cislo} onChange={(e) => changeForm(e)} />
          <button
            className="tkoupit"
            onClick={() => {
              window.alert(`
              Zákazník: ${form.jmeno}
              E-mail: ${form.email}
              Objednal si: ${produkty[0].nazev}
              Na adresu: ${form.adresa}
              Platební udeje:${form.cislo}`)
              
            }}
          >
            Objednat
          </button>
        </div>
      </div>
    </>
  );
}
