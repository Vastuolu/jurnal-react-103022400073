import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Panel from './components/Panel'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Naufal";
  const N = 73;
  const jam = 9
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
      <Panel children={{N}} judul={"Menu Pagi Hari"}/>
    </>
  )
}

export default App
