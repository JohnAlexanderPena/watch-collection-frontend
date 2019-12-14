import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {  getWatchBrands } from '../actions/watchBrandActions'
import {  setSubModel, getWatchModels } from '../actions/watchModelActions'

const rotate = {
  borderRadius: "50%",
 width: "100%",
 height: "95%",
 topMargin:"15px",

}

const column = {
  padding:"5px",
    margin:"50px",
    marginLeft: "13%",
     height: "55%",

    topMargin:"15px",
    flex: "0 0 calc(16.66% - 20px)",

}

class RolexGrid extends React.Component {

  renderWatches = () => {
    // debugger;
    let watchImage;
    if(this.props.models.rolexSubModels === null && this.props.models.models === null) {
      watchImage = (
                    <div style={column} className="">
                        <img  style={rotate} src="null" alt="nil"/>
                    </div>
                  )
    } else if (this.props.models.models !== null && this.props.models.rolexSubModels === null) {
      watchImage = this.props.models.models.map(image =>
           (
               <div style={column} className="">
                 <img  style={rotate} src={image.image_url} alt={image.model}/>
              </div>
          )
        )
    } else if (this.props.models.models !== null && this.props.models.rolexSubModels !== null){
      watchImage = this.props.models.rolexSubModels.map(image =>
           (
               <div style={column}className="">
                 <img  style={rotate} src={image.image_url} alt={image.description}/>
              </div>
          )
        )
    }
    return watchImage
  }


  render () {

  // let watchImage;
  // if(this.props.models.models !== null && this.props.models.rolexSubModels.length < 1) {
  //   watchImage = this.props.models.models.map(image =>
  //        (
  //            <div style={{marginBottom: "10%", maxWidth: "20%"}}className="column">
  //              <img  style={rotate} src={image.image_url} alt={image.model}/>
  //           </div>
  //       )
  //     )
  // } else {(this.props.models.rolexSubModels.length > 1){
  //   watchImage = this.props.models.rolexSubModels.map(image =>
  //        (
  //            <div style={{marginBottom: "10%", maxWidth: "20%"}}className="column">
  //              <img  style={rotate} src={image.image_url} alt={image.description}/>
  //           </div>
  //       )
  //     )
  // }}

    return (
        <div style={{  marginTop: "5%"}}className="row">
            {this.renderWatches()}
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
