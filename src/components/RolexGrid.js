import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {  getWatchBrands } from '../actions/watchBrandActions'
import {  setSubModel, getWatchModels } from '../actions/watchModelActions'

const rotate = {
  borderRadius: "50%",
 width: "100%",
 height: "75%",
 topMargin:"15px",
}

const column = {
background: "-moz-linear-gradient(left, rgba(0,0,0,0.65) 0%, rgba(255,255,255,0) 48%, rgba(2,2,2,1) 100%)", /* FF3.6-15 */
background: "-webkit-linear-gradient(left, rgba(0,0,0,0.65) 0%,rgba(255,255,255,0) 48%,rgba(2,2,2,1) 100%)", /* Chrome10-25,Safari5.1-6 */
background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%,rgba(255,255,255,0) 48%,rgba(2,2,2,1) 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#020202',GradientType=1 )", /* IE6-9 */

  padding:"10px",
    margin:"50px",
    // marginLeft: "13%",
     height: "75%",
     borderRadius: "50%",
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
    return (
        <div style={{  marginLeft: "15%", marginRight: "5%", marginTop: "5%"}}className="row">
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
