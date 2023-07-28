
import { Routes, Route } from 'react-router-dom';
import Apps from './Task';
import Birds from './Birds';
import Counter from './Counter';
import Navigation, { Home, Blog, Contact } from './Navigation';

function App() {
  return (
    <>
      
      <Apps />
      <Birds />
      <Counter />
       <Navigation />
     <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Bad Request</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
