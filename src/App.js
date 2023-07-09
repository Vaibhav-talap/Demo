import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/questionnaire/:id' element={<Quiz />}  ></Route>

        {/* <Route path='/edit/:rollno' element={<Update />}></Route> */}
      </Routes>
    </BrowserRouter >
  );
}




export default App;
