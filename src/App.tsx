import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Pokemons, Pokemon } from './pages';

function App() {

  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Suspense>
  );
}

export default App;
