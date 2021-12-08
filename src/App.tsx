import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Total from './components/Total';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Total />
      <Footer />
    </div>
  );
}

export default App;
