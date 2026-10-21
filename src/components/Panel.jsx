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
            {children}
        </div>
        </>
    )
}