import './App.css'
import React, { Suspense } from 'react'
const GameManager = React.lazy(() => import('./GameManager'))

function App() {
  return (
    <div className="App">
    <Suspense fallback={<div>Chargement...</div>}>
      <GameManager/>
      </Suspense>
    </div>
  );
}

export default App
