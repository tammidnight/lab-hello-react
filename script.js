function Header() {
  return (
    <div className="header">
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"></img>
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
        className="hamburger"
      ></img>
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
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"></img>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
  );
}

function Components() {
  return (
    <div>
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"></img>
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state.</p>
    </div>
  );
}

function SingleWay() {
  return (
    <div>
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"></img>
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the component's.</p>
    </div>
  );
}

function JSX() {
  return (
    <div>
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"></img>
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

function MyApp() {
  return (
    <div>
      <ContentOne />
      <ContentTwo />
    </div>
  );
}

ReactDOM.render(<MyApp />, document.querySelector("#app"));
