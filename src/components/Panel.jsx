import KartuMenu from "./KartuMenu";

export default function Panel({
    children, judul
}){
    return (
        <>
        <div className="panel">
            {judul ? (
                <h2 className="judul" >{judul}</h2>
            ):(
                <></>
            )}
            <KartuMenu 
                nama={"Nasi Ayam Geprek"}
                harga={10000 + (children.N * 100)}
            />
            <KartuMenu 
                nama={"Es Teh Lemon"}
                kategori={"Minuman"}
                harga={6000}
            />
            <KartuMenu 
                nama={"Mie Goreng Telur"}
                kategori={"Makanan"}
                harga={12000}
            />
        </div>
        </>
    )
}