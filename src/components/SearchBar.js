import React from 'react'
import SelectListGroup from './SelectListGroup.js'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { getWatchBrands, getWatchModels, setSubModel } from '../actions/watchBrandActions'

class SearchBar extends React.Component {

  state = {
    searchBy: "",
    model: "",
    brand: "",
    modelChosen: false,
    chosenBrand: "",
    models: [],
    chosenModel: []
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      modelChosen: true,
    })
    this.props.getWatchModels(event.target.value)

  }

  onModelSelect = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      chosenModel: event.target.value,
    })
    this.props.setSubModel(event.target.value, this.props.history)
  }

  componentDidMount() {
    this.props.getWatchBrands()
  }

  componentWillReceiveProps(nextProps){
    this.setState({models: nextProps.models})
  }

   renderModels = () => {
     let selectMoreOptions = []
     if(this.state.models.models === null || this.state.models.length <= 1) {
       selectMoreOptions.push({label: 'Model', value: 'model'})
     } else {
        this.state.models.models.map((model, index) => {
          selectMoreOptions.push({label: model.model, id: model.model, value: model.image_url, key: index})
        })
     }
     return selectMoreOptions
  }

  onSubmit = () => {
    this.props.history.push('/watches')
  }


  render () {
    const { brands } = this.props.brands
    let moreOptions;

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
    return (
      <div className="search">
        <div className="dark-overlay search-inner text-light">
          <div className= "create-profile">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="disply-4 text-center">Search for Watches</h1>
                   <form onSubmit={() => this.onSubmit()}>
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
                          <input type="submit" value="Search" className="btn btn-dark btn-block mt-4"/>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
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
export default connect(mapStateToProps, { getWatchBrands, getWatchModels, setSubModel })(SearchBar);
