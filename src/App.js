import './App.css';
import logo from './logo.png';

function App() {
  return (
      <header>
        <div className="container">
          {/*<img src={turtle}/>*/}
            <nav>
                <img id="logo" src={logo} alt="Logo"/>
                <div id={"navButtons"}>
                    <div id={"button1"} className={"buttons"}>Home</div>
                    <div id={"button2"} className={"buttons"}>About</div>
                    <div id={"button3"} className={"buttons"}>Pricing</div>
                    <div id={"button4"} className={"buttons"}>Blog</div>
                    <div id={"button5"} className={"buttons"}>Contact</div>
                </div>
            </nav>
        </div>
      </header>
  );
}

export default App;
