import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {  setSubModel, getWatchModels, getWatchBrands } from '../actions/watchBrandActions'
// import { Link } from 'react-router-dom';
const rotate = {
  transform: "rotate(90deg)"
}
class RolexGrid extends React.Component {


  render () {
  let watchImage;
  if(this.props.models.models !== null) {
    watchImage = this.props.models.models.map(image =>
         (
             <div style={{marginBottom: "10%", maxWidth: "20%"}}className="column">
               <img  style={rotate} src={image.image_url} alt={image.model}/><br/>
            </div>
        )
      )
  }

    return (
        <div style={{  marginTop: "5%"}}className="row">
            {watchImage}
        </div>
    )
  }
}
//
// <div classname="search">
//   <img style={{height: "35%", width: "18%", marginTop: "12%", marginbottom: "10%"}}src={this.props.models.subModel[0].image_url} class="rounded mx-auto d-block" alt="..."/>
// </div>


RolexGrid.propTypes = {
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

export default connect(mapStateToProps, {  getWatchModels, setSubModel, getWatchBrands })(RolexGrid);
