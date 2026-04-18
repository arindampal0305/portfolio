import { useState } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'

function App() {
  const [loaded, setLoaded] = useState(
    sessionStorage.getItem('loaderShown') === 'true'
  )

  function handleComplete() {
    sessionStorage.setItem('loaderShown', 'true')
    setLoaded(true)
  }

  return (
    <>
      {!loaded && <Loader onComplete={handleComplete} />}
      {loaded && <Hero />}
    </>
  )
}

export default App