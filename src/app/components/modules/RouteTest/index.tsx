import * as React from 'react';
import { Link } from 'react-router-dom';

class RouteTest extends React.Component {
  render() {
    return (
      <div>
        Route Tested!
        <Link to="/">Back to home</Link>
      </div>
    );
  }
}

export default RouteTest;
