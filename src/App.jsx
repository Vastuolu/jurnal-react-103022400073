import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Panel from './components/Panel'
import KartuMenu from './components/KartuMenu'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Naufal";
  const N = 73;
  const jam = 9
  const children = [
    {nama:"Nasi Ayam Geprek", harga:13700},
    {nama:"Es Teh Lemon", kategori:"Minuman" ,harga:13700},
    {nama:"Nasi Ayam Geprek", kategori:"Makanan" ,harga:13700},
  ]
  return (
    <>
      <h1 className='judul' style={{
        fontWeight: 'bold',
        fontSize: '40px',
        textAlign: 'center'
      }}>Kantin {nama}</h1>
      <p>Saldo awal kartu kantin: Rp {N * 1000}</p>
      <p>{jam < 12 ? "Selamat Pagi.": "Selamat Siang."}</p>
      <button disabled>Bayar</button>
      <Panel judul={"Menu Pagi Hari"}>
            <KartuMenu
                nama={"Nasi Ayam Geprek"}
                harga={10000 + (N * 100)}
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
      </Panel>
    </>
  )
}

export default App
