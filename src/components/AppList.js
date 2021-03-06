import React from 'react';
import AppForm from './AppForm';

class AppList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        // seed data
        { description: 'a', id: '1' },
        { description: 'b', id: '2' }
      ]
    }
  };

  addNewItem(newItem) {
    const item = {
      description: newItem.description,
      id: newItem.id
    };

    const addItems = [...this.state.items, item];
    /*
      const addItems = this.state.items.concat(item);
    */

    this.setState({
      items: addItems
    });
  };

  render() {
    return (
      <div>
        <AppForm changeNewItem={this.addNewItem.bind(this)} />
        <h4>App List - from AppList Component</h4>
        {this.state.items.map((item) => {
          return (<p key={item.id}>{item.description}</p>)
        })}
      </div>
    )
  }
};

export default AppList;
