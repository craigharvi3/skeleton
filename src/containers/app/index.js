import React from 'react';
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Home from '../home';
import About from '../about';

const App = () => (
  <>
    <header className="gs-u-p+">
      <Link className="gs-u-mr+ gs-o-link" to="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link className="gs-o-link" to="/about-us">
        <FontAwesomeIcon icon={faInfoCircle} /> About
      </Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </>
);

export default App;
