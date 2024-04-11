
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

 const dataProducts = [ "Feature", "Enterprise", "Support", "Pricing" ];

function App() {
  return (
    <div>          
        <Header dataProducts={dataProducts}/>
        <Pricing/>
        <div className="container">           
           <Cards/>
           <Footer/>
        </div>
    </div>
  );
}

export default App;

