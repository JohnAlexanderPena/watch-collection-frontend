import React from 'react'
import SelectListGroup from './SelectListGroup.js'

class SearchBar extends React.Component {

  state = {
    searchBy: "",
    model: "",
    brand: "",
    brands: []
  }

  onChange = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/watch_brands')
    .then(resp => resp.json())
    .then(response => {
      this.setState({
        brands: response
      })
    })
  }

  render () {
    console.log(this.state.brands)
    let moreOptions;

    const options = [
      this.state.brands.map((brand, index) => {
        return {label: brand.name, value: brand.name, key: brand.index}
      })
    ]

    const selectMoreOptions = [
      { label: 'Model', value: 'model'}
    ]


    if (this.state.brand) {
      moreOptions = (
        <div>
        <SelectListGroup
            placeholder="Status"
            name="model"
            value={this.state.model}
            options={selectMoreOptions}
            onChange={this.onChange}
            info="Select Model"
            />
        </div>
        )
      }
    console.log(options)
    return (
      <div className="search">
        <div className="dark-overlay search-inner text-light">
          <div className= "create-profile">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="disply-4 text-center">Search for Watches</h1>
                   <form onSubmit={this.onSubmit}>
                      <SelectListGroup
                          placeholder="Status"
                          name="brand"
                          value={this.state.brand}
                          options={options[0]}
                          onChange={this.onChange}
                          info="Select Brand"
                          />
                          {
                            moreOptions
                          }
                          <input type="submit" value="Submit" className="btn btn-dark btn-block mt-4"/>
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

export default SearchBar;
