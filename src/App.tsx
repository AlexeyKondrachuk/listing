import Listing from './components/listing';
import '../src/css/main.css';
import data from './data/etsy.json'

function App() {
  return (
    <div className='wrapper'>
    <Listing items={data} />
    </div>
  )
}

export default App;
