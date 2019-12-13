import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {  setSubModel, getWatchModels, getWatchBrands } from '../actions/watchBrandActions'
// import { Link } from 'react-router-dom';

class Watches extends React.Component {

  showImage = () => {
    // debugger;
    let image = {};
    if (this.props.models.models === null) {
      image.image_url = "NUll"
      image.model = "Null"
  } else if (this.props.models !== null && this.props.models.subModel === null) {
    console.log(this.props.models)
    image.image_url = this.props.models.models[0].image_url === undefined ? "No Images" : this.props.models.models[0].image_url
    image.model = this.props.models.models[0].model === undefined ? "No Model" : this.props.models.models[0].model
  } else {
    console.log(this.props.models.subModel[0])
    image.image_url = this.props.models.subModel[0].image_url
    image.model = this.props.models.subModel[0].model
  }
    return image
  }

  render () {
    console.log(this.props)
    return (
      <figure className="figure">
        <img src={this.showImage().image_url} className="figure-img img-fluid rounded" alt="nothing" />
        <figcaption style={{color: "white"}} className="figure-caption">{this.showImage().model}</figcaption>
     </figure>
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

export default connect(mapStateToProps, {  getWatchModels, setSubModel, getWatchBrands })(Watches);
