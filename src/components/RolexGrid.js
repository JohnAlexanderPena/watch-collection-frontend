import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {  getWatchBrands } from '../actions/watchBrandActions'
import {  setSubModel, getWatchModels } from '../actions/watchModelActions'

const rotate = {
  // transform: "rotate(90deg)",
  borderRadius: "50%",
 // display: "inline-block",
 width: "50%",
 height: "50%"
 // position: "relative"
}
class RolexGrid extends React.Component {


  render () {
  let watchImage;
  if(this.props.models.models !== null) {

    watchImage = this.props.models.models.map(image =>
         (
             <div style={{marginBottom: "10%", maxWidth: "20%"}}className="column">
               <img  style={rotate} src={image.image_url} alt={image.model}/>
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
