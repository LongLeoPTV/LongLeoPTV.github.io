
import './App.css'
import Button from './component/Button/Button';
import Copyright from './component/Footer/Copyright';
import Footer from './component/Footer/Footer';
import NavBar from './component/Header/NavBar';

function App() {
  return (
    <div className="App">
        <Button/>
        <NavBar/>
        <Footer/>
        <Copyright/>
    </div>
  );
}
export default App;