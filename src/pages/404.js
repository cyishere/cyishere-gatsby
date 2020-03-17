import React from 'react';
import { Link } from 'gatsby';
import Layout from '../templates/layout';

const PageNotFound = () => {
  const bg404 = `/404.png`;
  return(
    <Layout>
      <div className="uk-container uk-width-2-3@l uk-width-2-3@xl uk-align-center uk-margin-large" style={{ position: `relative` }}>
        <div style={{ backgroundImage: `url(${bg404})`, backgroundPosition: `right top`, backgroundRepeat: `no-repeat` }}>
          <h1>Page Not Found</h1>
          <p>Oops, the page you're looking for has been removed or relocated.</p>
          <p>
            <Link className="uk-button uk-button-primary" to="/">Go back to home</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
};

export default PageNotFound;