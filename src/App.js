import logo from "./logo.svg";
import "./App.css";

function App() {
  const friends = ["Rana", "Juan", "Faruk", "Rasel"];

  const products = [
    { name: "Photoshop CS6", price: "$60.70" },
    { name: "PDF Reader", price: "$6.70" },
    { name: "illustrator", price: "$10.20" },
    { name: "Windows Pro-11", price: "$300.20" },
    { name: "Windows Pro-10", price: "$200.20" },
    { name: "Windows-8", price: "$150.20" },
    { name: "Windows Ultimate-7", price: "$120.20" },
    { name: "Windows Server-2019", price: "$500.20" },
    { name: "Windows Server-2012", price: "$450.20" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn React Js</p>

        <div>
          {products.map((pwd) => (
            <Product product={pwd}></Product>
          ))}
        </div>
        <div>
          <ul>
            {friends.map((nak) => (
              <li>{nak}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {products.map((pwd) => (
              <li>{pwd.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

// Componante :01
function Product(props) {
  const productStyle = {
    color: "salmon",
    border: "1px solid grey",
    borderRadius: "10px",
    backgroundColor: "lightgrey",
    margin: "5px",
    height: "300px",
    width: "250px",
    float: "left",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    color: "#000",
    backgroundColor: "#f79307",
    fontSize: "14px",
    fontWeight: "bolder",
    borderRadius: "10px",
    padding: "10px",
   
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h6>Name: {name}</h6>
      <h5>Price: {price}</h5>
      <button style={buttonStyle}>Bay Now</button>
    </div>
  );
}
export default App;
