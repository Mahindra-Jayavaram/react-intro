// import logo from './logo.svg';
import './App.css';
import { Card } from './components/card';
// import Card from './components/card.js';
  
function App() { 
  const mobiledata =[
    {
        heading: "MobileOperating System",

        info :[
            "Android","BlueBerry","WIndows","Iphone","Linux"
        ]
    },
    {
        heading: "Mobile Manufactures",

        info :[
            "Samsung","HCL","Micromax","Apple","Nokia"
        ]
    }
]
  const names =[
    {
        heading: "Chocolates",

        info :[
            "Dairymilk","5Star","Kit-kat","Munch","Perk"
        ]
    },
    {
        heading: "Biscutes",

        info :[
            "JIm-Jam","Oero","Parle-G","Unibiq","Bourbon"
        ]
    }
]
  return (
    <div>
      <Card items={mobiledata}/>
      <Card items={names}/>
    </div>
  );
}

export default App;

