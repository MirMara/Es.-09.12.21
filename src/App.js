import foto from './Mais.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="CV">
        <div className="top">
        <img src={foto} className="foto" alt="foto" />
        <p>
          <h3> Miriana Maranzano </h3>
        </p>
        </div>
        <div className="description">

          <h4> Description </h4>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="container">

          <div> <h4>Esperienze Lavorative</h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>  </div>


          <div> <h4> Languages </h4>
            <p> Italian, English and Spanish</p> </div>

          <div> <h4> Hobby </h4>
            <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> </div>

        </div>

        <div className="Mycontacts">
          <form>
            <h4> Contact me </h4>
            <label for="contact">Object</label>
            <textarea id="obj"> </textarea>
            <label for="contact">Message</label>
            <textarea id="msg"> </textarea>
          </form>
        </div>

        <div className="footer">
          <p>miriana.maranzano@virgilio.it</p>
        </div>
      </header>
    </div>

  );
}

export default App;
