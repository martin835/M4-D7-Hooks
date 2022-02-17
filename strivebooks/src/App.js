import './App.css';
import MyNavbar from './components/MyNavbar'
import MyJumbotron from './components/MyJumbotron'
import MyFooter from './components/MyFooter'
/* import LatestRelease from './components/LatestRelease' */
import BookList from './components/BookList'
import Reservations from "./components/Reservations";
import horror from './data/horror.json'
import fantasy from './data/fantasy.json'
import scifi from './data/scifi.json'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <MyNavbar storeName="StriveBooks" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyJumbotron />
              <BookList books={scifi} />
            </>
          }
        />
        <Route path="/reservations" element={<Reservations/>}/>
      </Routes>

      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
