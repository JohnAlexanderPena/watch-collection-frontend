import React from 'react'
import { Link } from 'react-router-dom';




class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <div className="home">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4" id="landingheader">Watch Master
                  </h1>
                  <p className="lead"> Search for, and compare hundreds of watches!</p>
                  <hr />
                  <Link to="/search" className="btn btn-lg btn-dark mr-2">Start Browsing</Link>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default LandingPage;
