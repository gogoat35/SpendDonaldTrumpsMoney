import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Billgates from "./components/Bill/Billgates";
import Money from "./components/money/Money";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div>
      <Header />
      <Billgates />
      <Money />
      <Main />
      <Cart />
    </div>
  );
}

export default App;
