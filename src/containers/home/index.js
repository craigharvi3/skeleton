import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter';

const Home = ({
  count,
  incrementAction,
  incrementAsyncAction,
  isIncrementing,
  decrementAction,
  decrementAsyncAction,
  isDecrementing,
  changePage,
}) => (
  <div>
    <h1>Home</h1>
    <p>Count: {count}</p>

    <p>
      <button type="button" onClick={incrementAction}>
        Increment
      </button>
      <button
        type="button"
        onClick={incrementAsyncAction}
        disabled={isIncrementing}
      >
        Increment Async
      </button>
    </p>

    <p>
      <button type="button" onClick={decrementAction}>
        Decrement
      </button>
      <button
        type="button"
        onClick={decrementAsyncAction}
        disabled={isDecrementing}
      >
        Decrement Async
      </button>
    </p>

    <p>
      <button type="button" onClick={() => changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
);

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      incrementAction: increment,
      incrementAsyncAction: incrementAsync,
      decrementAction: decrement,
      decrementAsyncAction: decrementAsync,
      changePage: () => push('/about-us'),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
