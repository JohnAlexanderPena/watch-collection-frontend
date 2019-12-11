import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {  setSubModel } from '../actions/watchBrandActions'
import { Link } from 'react-router-dom';

class Watches extends React.Component {

  render () {
    console.log(this.props.models.subModel[0].image_url)
    return (
      <div className="search">
        <div className="dark-overlay search-inner text-light">
          <div className= "create-profile">
          <img style={{height: "20%", width: "20%", topMargin: "500px" }}src={this.props.models.subModel[0].image_url} class="rounded mx-auto d-block" alt="..."/>
          <Link to="/search" className= "btn btn-light mb-3 float left">Restart Search</Link>
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                    <div class="row">
                    <div className="col-md-12">
                      <div id="mdb-lightbox-ui" />
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


Watches.propTypes = {
  brands: PropTypes.array.isRequired,
  getWatchBrands: PropTypes.func.isRequired,
  getWatchModels: PropTypes.func.isRequired,
  setSubModel: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  brands: state.brands,
  models: state.models,
  subModel: state.subModel
})

export default connect(mapStateToProps, {  setSubModel })(Watches);
