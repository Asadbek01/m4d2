import './App.css';
import  MyNavbar from'./components/MyNavbar'
import MyFooter from './components/MyFooter';
import Jumbo from './components/jumbotron';
import HistoryBooks from "./components/images and definitions"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<div>
<MyNavbar />
<Jumbo />
<HistoryBooks />
<MyFooter />
</div>
  )
}

export default App;
