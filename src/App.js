import HomePage from "./Pages/homePage";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from "./Login/login"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path="/home"/>
          <Route element={<Login/>} path="/login"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
