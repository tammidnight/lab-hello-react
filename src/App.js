import logo from "./images/ironhack-logo-xs.png";
import hamburger from "./images/menu-top-xs.png";
import iconOne from "./images/icon1.png";
import iconTwo from "./images/icon2.png";
import iconThree from "./images/icon3.png";
import iconFour from "./images/icon4.png";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt=""></img>
      <img src={hamburger} className="hamburger" alt=""></img>
    </div>
  );
}

function HeaderText() {
  return (
    <div>
      <div>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
      </div>
      <button>Awesome!</button>
    </div>
  );
}

function ContentOne() {
  return (
    <div className="bgDark">
      <Header />
      <HeaderText />
    </div>
  );
}

function Declarative() {
  return (
    <div>
      <img src={iconOne} alt=""></img>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
  );
}

function Components() {
  return (
    <div>
      <img src={iconTwo} alt=""></img>
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state.</p>
    </div>
  );
}

function SingleWay() {
  return (
    <div>
      <img src={iconThree} alt=""></img>
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the component's.</p>
    </div>
  );
}

function JSX() {
  return (
    <div>
      <img src={iconFour} alt=""></img>
      <h3>JSX</h3>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
  );
}

function ContentTwo() {
  return (
    <div className="contentTwo">
      <Declarative />
      <Components />
      <SingleWay />
      <JSX />
    </div>
  );
}

function App() {
  return (
    <div>
      <ContentOne />
      <ContentTwo />
    </div>
  );
}

export default App;
