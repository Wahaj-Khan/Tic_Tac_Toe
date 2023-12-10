import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="mainContainer">
      <div style={{flexDirection: "row"}}>
      <div style={{display: "flex"}}>
      <Card num ={'1'}/>
      <Card num ={'2'}/>
      <Card num ={'3'}/>
      </div>
      
      <div style={{display: "flex"}}>
      <Card num ={'4'}/>
      <Card num ={'5'}/>
      <Card num ={'6'}/>
      </div>
      <div style={{display: "flex"}}>
      <Card num ={'7'}/>
      <Card num ={'8'}/>
      <Card num ={'9'}/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
