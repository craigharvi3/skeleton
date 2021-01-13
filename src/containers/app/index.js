import React from 'react';
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Home from '../home';
import About from '../about';

const App = () => (
  <>
    <header className="header gs-u-p+ gs-u-mb+">
      <div className="gel-wrap">
        <Link className="header__link gs-u-mr+ gs-o-link" to="/">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link className="header__link gs-o-link" to="/about-us">
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </Link>
      </div>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </>
);

export default App;
