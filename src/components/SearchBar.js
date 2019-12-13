import React from 'react'
import SelectListGroup from './SelectListGroup.js'
import PropTypes from 'prop-types';
import Watches from './Watches'
import WatchGrid from './WatchGrid'
import RolexGrid from './RolexGrid'
import { connect } from 'react-redux'
import {  getRolexSubModels, setSubModel, getWatchModels, getRolexModels } from '../actions/watchModelActions'
import { getWatchBrands } from '../actions/watchBrandActions'

class SearchBar extends React.Component {

  state = {
    searchBy: "",
    model: "",
    brand: "",
    modelChosen: false,
    chosenBrand: "",
    models: [],
    chosenModel: [],
    showWatches: false,
    showRolexSubModels: false
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      modelChosen: true,
      showWatch: true
    })
    if(event.target.value === 'Rolex') {
      this.setState({
        chosenBrand: "Rolex",
      })
      this.props.getRolexModels()
    } else {
      this.props.getWatchModels(event.target.value)
    }
  }

  onModelSelect = (event) => {
    let model;
    if(this.state.brand === "Rolex") {
      this.setState({
        showRolexSubModels: true,
        [event.target.name]: event.target.value,
        chosenModel: event.target.value,
      })
      model = this.state.models.models.filter(model => model.image_url === event.target.value)

      this.props.getRolexSubModels(model)
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        chosenModel: event.target.value,
      })
        this.props.setSubModel(event.target.value, this.props.history)
    }
  }

  componentDidMount() {
    this.props.getWatchBrands()
  }

  componentWillReceiveProps(nextProps){
    this.setState({models: nextProps.models})
  }

   renderModels = () => {
     // debugger;
     let selectMoreOptions = []
     //Check if models array is empty or null to show default select
     if(this.state.models.models === null || this.state.models.length <= 1) {
       selectMoreOptions.push({label: 'Model', value: 'model'})
     } else  {
        this.state.models.models.map((model, index) => { //Map through models to push into options array
          if(this.state.brand === "Rolex"){ //render Rolex models and push with differentrolex model properties
            selectMoreOptions.push({label: model.rolex_model, id: model.rolex_url, value: model.image_url, key: index})
          } else {
            //push regular models into array
            selectMoreOptions.push({label: model.model, id: model.model, value: model.image_url, key: index})
          }
        })
     }
     return selectMoreOptions
  }

  handleSubModels = (event) => {
    event.preventDefault()
    this.setState({
      showRolexSubModels: true,
      [event.target.name]: event.target.value,
      chosenModel: event.target.value,
    })
    let model = this.state.models.models.filter(model => model.image_url === event.target.value)
    debugger;
    this.props.getRolexSubModels(model)
  }


  renderRolexSubmodels = () => {
    let selectMoreOptions = []
    if(this.props.models.rolexSubModels === null) {
      selectMoreOptions.push({label: 'Model', value: 'model'})
    } else  {
    this.props.models.rolexSubModels.map((model, index) => {
        selectMoreOptions.push({label: model.description, id: model.watch_url, value: model.name, key: index})
    })
  }
    return selectMoreOptions
 }

  onSubmit = () => {
    this.setState({
      showWatches: true
    })
  }

  render () {
    
    const { brands } = this.props.brands
    let moreOptions;
    let renderRolexSubModels;

    let showBrands = () => {
      let options = []
      if(!brands) {
         options.push({ label: 'Model', value: 'model'})
      } else {
        brands.map(brand =>
          options.push({label: brand.name, value: brand.name, key: brand.index})
        )
      }
      return options
    }

    if (this.state.modelChosen) {
      moreOptions = (
        <div>
        <SelectListGroup
            placeholder="Status"
            name="model"
            value={this.state.model}
            options={this.renderModels()}
            onChange={this.handleSubModels}
            info="Select Model"
            />
        </div>
        )
      }

      if(this.state.showRolexSubModels === true) {
          renderRolexSubModels = (
            <div>
            <SelectListGroup
                placeholder="Status"
                name="model"
                value={this.state.model}
                options={this.renderRolexSubmodels()}
                onChange={this.onModelSelect}
                info="Select Model"
                />
            </div>
            )
      }


    return (
      <div className="landing">
        <div className="dark-overlay search-inner text-light">
            <div className="container">
              <div style={{marginTop: "20%"}}className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="disply-4 text-center">Search for Watches</h1>
                      <SelectListGroup
                          placeholder="Status"
                          name="brand"
                          value={this.state.brand}
                          options={showBrands()}
                          onChange={this.onChange}
                          info="Select Brand"
                          />
                          {
                            moreOptions
                          }
                          {
                            renderRolexSubModels
                          }
                          <button type="button" onClick={this.onSubmit} className="btn btn-dark btn-block mt-4">Search!!</button><br/>
                </div>
              </div>
              { this.state.showWatches ? <Watches /> : null}
            </div>
            {this.state.chosenBrand !== "Rolex" ? <WatchGrid /> : <RolexGrid/>}
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  brands: PropTypes.array.isRequired,
  getWatchBrands: PropTypes.func.isRequired,
  getWatchModels: PropTypes.func.isRequired,
  rolexSubModels: PropTypes.array.isRequired,
  getRolexSubModels: PropTypes.func.isRequired,
  getRolexModels: PropTypes.func.isRequired,
  setSubModel: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  brands: state.brands,
  models: state.models,
  subModel: state.subModel,
  rolexSubModels: state.rolexSubModels
})
export default connect(mapStateToProps, { getWatchBrands, getRolexSubModels, getWatchModels, setSubModel, getRolexModels })(SearchBar);
