import { useState } from "react";
import {data} from "./data";
import logo from "./images/logo.svg";
import {AiOutlineShoppingCart} from "react-icons/ai";
import avatar from "./images/image-avatar.png";

function Header() {
  return (
    <div>
      <img src={logo} alt=""></img>

      <nav>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div>
        <ul>
          <li><button></button></li>
            <AiOutlineShoppingCart />
          <li><img src={avatar} alt=""></img></li>
        </ul>
      </div>
  </div>
  )
}

function App() {
  const [products] = useState(data) // state value

  return (
    <>
      <Header />
    </>
  );
}

export default App;
