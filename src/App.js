import './App.css';
import  MyNavbar from'./components/MyNavbar'
import MyFooter from './components/MyFooter';
import Jumbo from './components/jumbotron';
import HistoryBooks from "./components/images and definitions"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Reservation from './components/Reservation';
import WarningSign from './components/warningSign';

function App() {
  return (
<div>
<MyNavbar />
<WarningSign text="Do smth" />
<Jumbo />
{/* <Reservation /> */}
<HistoryBooks />
<MyFooter />
</div>
  )
}

export default App;
