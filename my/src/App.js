import Projets from './pages/Projets';
import Welcome from './pages/Welcome';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/card/:id" element={ <Projets /> }/>
        </Routes>
    </div>
  );
}

export default App;
