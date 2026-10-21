import LabelHarga from "./LabelHarga"

export default function KartuMenu({
    nama, harga, kategori
}){
    kategori = kategori ?? 'Makanan'
    return (
        <>
        <div className="kartu">
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai={harga} />
        </div>
        </>
    )
}