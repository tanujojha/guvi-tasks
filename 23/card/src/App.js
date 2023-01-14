import './App.css';
import Card1 from './card1';
import Card2 from "./card2";
import Card3 from "./card3";

function App() {
  

  return (
    <section className='pricing py-5'>
      <div className='container'>
        <div className='row'>
          <Card1/>
          <Card2/>
          <Card3/>
        </div>
      </div>
    </section>
  );
}

export default App;
