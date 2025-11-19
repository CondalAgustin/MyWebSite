 import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      lerp: 0.1,
      wheelMultiplier: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <SmoothScroll />
    <App />
  </>
)
