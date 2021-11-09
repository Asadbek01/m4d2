import './App.css';
import  MyNavbar from'./components/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './components/MyFooter';
import Jumbo from './components/jumbotron';
import Images from './components/images and definitions';

function App() {
  return (
<div>
<MyNavbar />
<Jumbo />
<Images />
<MyFooter />
</div>
  )
}

export default App;
