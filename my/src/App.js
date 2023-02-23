import Projets from './pages/Projets';
import Welcome from './pages/Welcome';
// import Error from './pages/Error'

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/projet/:id" element={ <Projets /> }/>
          {/* <Route path="*" element={<Error />}/> */}
        </Routes>
    </div>
  );
}

export default App;
