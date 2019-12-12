import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {  setSubModel, getWatchModels, getWatchBrands } from '../actions/watchBrandActions'
// import { Link } from 'react-router-dom';

class Watches extends React.Component {

  // renderImage = () => {
  //   if(this.props.models.models !== null) {
  //     console.log(this.props.models.models)
  //     this.props.models.models.map(image =>
  //        (
  //         <div className="col-md-4">
  //           <div className="card mb-4 shadow-sm">
  //           {console.log(image)}
  //             <img src={image.image_url} alt={image.model}/>
  //           </div>
  //         </div>
  //       )
  //     )
  //   }
  //   else {
  //     return (null)
  //   }
  // }
  render () {
  let watchImage;

  if(this.props.models.models !== null) {
    watchImage = this.props.models.models.map(image =>
         (
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            {console.log(image)}
              <img src={image.image_url} alt={image.model}/>
            </div>
          </div>
        )
      )
  }

    return (
      // <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {watchImage}
          </div>
        </div>
      // </div>
    )
  }
}
//
// <div classname="search">
//   <img style={{height: "35%", width: "18%", marginTop: "12%", marginbottom: "10%"}}src={this.props.models.subModel[0].image_url} class="rounded mx-auto d-block" alt="..."/>
// </div>


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







// import React from 'react'
// import PropTypes from 'prop-types'
//
// import { connect } from 'react-redux'
//
// import {  setSubModel, getWatchModels, getWatchBrands } from '../actions/watchBrandActions'
// // import { Link } from 'react-router-dom';
//
// class Watches extends React.Component {
// // this.props.models["models"][0].image_url || this.props.models.subModel[0].image_url
//   showImage = () => {
//     let image = {};
//     if(this.props.models.subModel === null)  {
//          image.image_url = this.props.models["models"][0].image_url
//          image.model = this.props.models["models"][0].model
//     } else {
//       image.image_url = this.props.models.subModel[0].image_url
//       image.model = this.props.models.subModels[0].model
//     }
//     console.log(image)
//     return image
//   }
//
//   render () {
//     return (
//
//       <figure className="figure">
//         <img src={this.props.models.subModel[0].image_url} className="figure-img img-fluid rounded" alt="nothing" />
//         <figcaption style={{color: "white"}} className="figure-caption">"Nothing here chief"</figcaption>
//      </figure>
//     )
//   }
// }
// //
// // <div classname="search">
// //   <img style={{height: "35%", width: "18%", marginTop: "12%", marginbottom: "10%"}}src={this.props.models.subModel[0].image_url} class="rounded mx-auto d-block" alt="..."/>
// // </div>
//
//
// Watches.propTypes = {
//   brands: PropTypes.array.isRequired,
//   getWatchBrands: PropTypes.func.isRequired,
//   getWatchModels: PropTypes.func.isRequired,
//   setSubModel: PropTypes.func.isRequired
// }
//
// const mapStateToProps = (state) => ({
//   brands: state.brands,
//   models: state.models,
//   subModel: state.subModel
// })
//
// export default connect(mapStateToProps, {  getWatchModels, setSubModel, getWatchBrands })(Watches);
