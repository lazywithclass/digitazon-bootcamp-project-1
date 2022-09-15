import './App.css';
import Products from './components/products'

function App() {
  return (
    <div className="container">
      <div className="horizontal-no-space">
        <h1 className="text-center">Digi-レストラン</h1>
        <img className="logo" src="img/logo.png" alt="Logo" />
      </div>
        <Products />
    </div>
  );
}

export default App;
