import React from 'react'
import SelectListGroup from './SelectListGroup.js'
import PropTypes from 'prop-types';
import Watches from './Watches'
import WatchGrid from './WatchGrid'
import RolexGrid from './RolexGrid'
import { connect } from 'react-redux'
import {  getRolexSubModels, setSubModel, getWatchModels, getRolexModels } from '../actions/watchModelActions'
import { getWatchBrands } from '../actions/watchBrandActions'
import RolexSubModel from './RolexSubModel'

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
    showRolexSubModels: false,
    rolexSubModel: null
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
      this.setState({
        [event.target.name]: event.target.value,
        modelChosen: true,
        showWatch: true,
        showWatches: false,
        showRolexSubModels: false,
        chosenBrand: event.target.value
      })
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
    this.setState({models: nextProps.models, rolexSubModel: null})
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

  handleSubModels = (e) => {
    // debugger;
    e.preventDefault()
    let index = e.target.selectedIndex;
    let optionElement = e.target.childNodes[index].id
    let model = this.props.models.rolexSubModels.filter(model => model.watch_url === optionElement)

    this.setState({
      rolexSubModel : model,
    })
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
            onChange={this.onModelSelect}
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
                onChange={this.handleSubModels}
                info="Select Rolex Sub Model"
                />
            </div>
            )
      }

    // console.log(this.props," <--- Props", this.state, "<----State")
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
                          <button type="button" onClick={this.onSubmit} className="btn btn-dark btn-block mt-4">View Watch</button><br/>
                </div>

              </div>
            </div>
            {this.state.chosenBrand !== "Rolex" || this.props.brands.brands.length < 1 ? <WatchGrid /> : <RolexGrid/>}
            { this.state.showWatches && this.state.chosenBrand !== "Rolex" ? <Watches /> : null}
        </div>
        { this.state.rolexSubModel !== null ? <RolexSubModel model={this.state.rolexSubModel}/> : null}

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
