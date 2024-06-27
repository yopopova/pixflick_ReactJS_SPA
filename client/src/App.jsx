import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
    {/* <div className='app'>
        <FontAwesomeIcon icon={faEnvelope} />
    </div> */}

      <Header />
      <Home />
    </div>
  );
}

export default App;