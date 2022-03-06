// import logo from './logo.svg';
import './App.css';
import Card from './components/card.js';
  
function App() {  
  const left = { textAlign: "left" }
  return (
    <div id = "main">
      <Card heading="Mobile Operating System" l1="Android" l2="Blackberry" l3="iPhone" l4="Windows Phone" css = {left} />
      <Card heading="Mobile Manufacturers" l1="Samsung" l2="HTC" l3="Micromax" l4="Apple" />
    </div>
  );
}
export default App;
