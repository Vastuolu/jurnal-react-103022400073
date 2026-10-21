import { useState } from "react"
import LabelHarga from "./LabelHarga"

export default function KartuMenu({
    nama, harga, kategori
}){
    const [jumlah, setJumlah] = useState(0);
    kategori = kategori ?? 'Makanan'
    return (
        <>
        <div className="kartu">
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai={harga} />
            <button disabled={jumlah <= 0 ? true :false} onClick={()=>setJumlah(jumlah-1)}>-</button>
            {jumlah}
            <button onClick={()=>setJumlah(jumlah+1)}>+</button>
        </div>
        </>
    )
}