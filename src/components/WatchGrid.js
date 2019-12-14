import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {  getWatchBrands } from '../actions/watchBrandActions'
import {  setSubModel, getWatchModels } from '../actions/watchModelActions'

const textStyle = {
  flex: "100 0 calc(16.66% - 20px)",
  background: "#222831",
  color: "#525252",
  padding: "20px",
  margin: "10px",
}

class WatchGrid extends React.Component {

  watchImage = () => {
    let watchImage;
    if(this.props.models.models !== null && this.props.models.models.length > 1) {
       watchImage = this.props.models.models.map(image =>
        (
          <div className="column">
            <img  className="none" src={image.image_url} alt={image.model}/>
          </div>
        )
      )
    } else if
      (this.props.models.models === null && this.props.models.length === undefined) {
       watchImage =
      (<div style={textStyle} className="">
        <h1>No Watches to show!</h1>
      </div>)
    } else if (this.props.models.models.length < 1 && this.props.models.length === undefined) {
         watchImage =
        (<div style={textStyle} className="">
          <h1>No Watches to show!</h1>
        </div>)
      }
    return watchImage
  }

  render () {


    return (
      // <div className="album py-5 bg-light">
          <div className="row">
            {this.watchImage()}
          </div>
      // </div>
    )
  }
}


WatchGrid.propTypes = {
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

export default connect(mapStateToProps, {  getWatchModels, setSubModel, getWatchBrands })(WatchGrid);
