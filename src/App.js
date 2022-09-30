import "./styles.css";
import "./CartItem1";
import CartItem1 from "./CartItem1";
import Calculator from "./Calculator";
// let name = "Syed";
let hours;
let date = new Date();
// let x = prompt("Enter Your Name");
hours = date.toLocaleString("en-US", { hour: "numeric", hour12: false });
// hours = 11;
console.log(hours);
export default function App() {
  return (
    <div className="App">
      <CartItem1 />
      <h1>Welcome to React</h1>
      {hours >= 12 ? (
        hours >= 16 ? (
          <h1 className="dinner">Dinner</h1>
        ) : (
          <h1 className="break">Lunch Break</h1>
        )
      ) : (
        <h1 className="lunch">Break Fast time, Hurry!</h1>
      )}
      {console.log(hours)}

      <Calculator />
    </div>
  );
}
