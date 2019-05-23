import React from 'react';
import availableResources from './../../DummyData/items';

class testForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory : 'basicresources',
      selectedResource : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let state = Object.assign({}, this.state);
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(state);
  }

  render(){
    console.log(this.state);
    return (
      <div>
        <select name='selectedCategory' onChange={this.handleChange}>
          {
            Object.keys(availableResources.categories).map( (categoryKey) => {
              const category = availableResources.categories[categoryKey];
              return <option value={categoryKey}>{category.name}</option>;
            })
          }
        </select>
        <select>
          {
            Object.keys(availableResources.categories[this.state.selectedCategory].resources).map( (resourceKey) => {
              const resource = availableResources.categories[this.state.selectedCategory].resources[resourceKey];
              return <option value={categoryKey}>{resource.name}</option>;
            })
          }
        </select>
      </div>
    );
  }
}

export default testForm;
