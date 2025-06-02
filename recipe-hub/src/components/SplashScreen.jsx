import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div style={{
      position: 'fixed', top:0, left:0, width:'100vw', height:'100vh',
      backgroundColor: '#84AE92',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      color: 'white',
      fontSize: '3rem',
      fontWeight: '700',
      zIndex: 9999,
      userSelect: 'none',
    }}>
      Recipe Hub
    </div>
  )
}
