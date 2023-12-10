import "./App.css";
import Card from "./components/Card";

function App() {
  const pairs = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]

  ]
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
