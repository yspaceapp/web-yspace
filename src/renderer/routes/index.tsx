import {
  MemoryRouter as Router,
  Routes as ReactRouter,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home';

export default function Routes() {
  return (
    <Router>
      <ReactRouter>
        <Route path="/" element={<Home />} />
      </ReactRouter>
    </Router>
  );
}
