import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';

function App() {
  const [searce,setSearce] = useState('')

  return (
    <div className="App ">
      <Header setSearce={setSearce}/>
      <Body searce={searce} />
      <Footer/>
    </div>
  );
}

export default App;
