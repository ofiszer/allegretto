import { useState } from 'react';
import data from './data';

function AddProductForm() {
  const [nazwa, setNazwa] = useState('');
  const [klucz, setKlucz] = useState('');
  const [kategoria, setKategoria] = useState('');
  const [obrazek, setObrazek] = useState('');
  const [cena, setCena] = useState(0);
  const [dostepnych, setDostepnych] = useState(0);
  const [marka, setMarka] = useState('');
  const [ocena, setOcena] = useState(0);
  const [recenzje, setRecenzje] = useState(0);
  const [opis, setOpis] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      nazwa,
      klucz,
      kategoria,
      obrazek,
      cena,
      dostepnych,
      marka,
      ocena,
      recenzje,
      opis,
    };

    data.produkty.push(newProduct);

    setNazwa('');
    setKlucz('');
    setKategoria('');
    setObrazek('');
    setCena(0);
    setDostepnych(0);
    setMarka('');
    setOcena(0);
    setRecenzje(0);
    setOpis('');

    // Możesz dodać dodatkową logikę, np. wywołanie funkcji po dodaniu nowego produktu
    // np. funkcja aktualizująca stan w komponencie nadrzędnym
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Dodaj nowy produkt</h2>
      <label>
        Nazwa:
        <input type="text" value={nazwa} onChange={(e) => setNazwa(e.target.value)} />
      </label>
      <label>
        Klucz:
        <input type="text" value={klucz} onChange={(e) => setKlucz(e.target.value)} />
      </label>
      <label>
        Kategoria:
        <input type="text" value={kategoria} onChange={(e) => setKategoria(e.target.value)} />
      </label>
      <label>
        Obrazek:
        <input type="text" value={obrazek} onChange={(e) => setObrazek(e.target.value)} />
      </label>
      <label>
        Cena:
        <input type="number" value={cena} onChange={(e) => setCena(e.target.value)} />
      </label>
      <label>
        Dostępnych:
        <input type="number" value={dostepnych} onChange={(e) => setDostepnych(e.target.value)} />
      </label>
      <label>
        Marka:
        <input type="text" value={marka} onChange={(e) => setMarka(e.target.value)} />
      </label>
      <label>
        Ocena:
        <input type="number" value={ocena} onChange={(e) => setOcena(e.target.value)} />
      </label>
      <label>
        Recenzje:
        <input type="number" value={recenzje} onChange={(e) => setRecenzje(e.target.value)} />
      </label>
      <label>
        Opis:
        <textarea value={opis} onChange={(e) => setOpis(e.target.value)} />
      </label>
      <button type="submit">Dodaj produkt</button>
    </form>
  );
}

export default AddProductForm;
