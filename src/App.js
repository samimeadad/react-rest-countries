import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';

function App () {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}







































/* function Countries () {
  const [ countries, setCountries ] = useState( [] );

  useEffect( () => {
    fetch( 'https://restcountries.eu/rest/v2/all' )
      .then( res => res.json() )
      .then( data => setCountries( data ) );
  }, [] );

  console.log( countries );

  return (
    <div>
      <h1>Traveling around the world!!!</h1>
      <h2>Countries Available: {countries.length} </h2>
      {
        countries.map( country => <Country name={country.name}></Country> )
      }
    </div>
  );
}

function Country ( props ) {
  return (
    <div>
      <h2>Country Name: {props.name}</h2>
    </div>
  )
} */

export default App;