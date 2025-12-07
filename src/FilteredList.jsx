import React, {Component} from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component{
    constructor(props){
        super(props);

        // Added a new key/value pair in the state to keep track of type
        this.state = {
            search: "",
            type: "All"
        };
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // Added condition to check item's type
        return item.name.toLowerCase().search(this.state.search) !== -1 &&
               (this.state.type === "All" || item.type === this.state.type);
    }

    // Event handling method for when an item in dropdown is selected
    // Per the DropdownButton documentation, this function takes in an eventKey and event
    onSelectType = (eventKey) => {
        this.setState({type: eventKey});
    }

    render(){
        return(
            <div className="filter-list">
                <h1>Produce Search</h1>
                <div className="filter-controls">
                    <input type="text" placeholder="Search" onChange={this.onSearch} />
                    <DropdownButton
                        id="typeDropdown"
                        title={`Type: ${this.state.type}`}
                        onSelect={this.onSelectType}
                        variant="primary"
                    >
                        <Dropdown.Item eventKey="All">All</Dropdown.Item>
                        <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                        <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
                    </DropdownButton>
                </div>
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}

export default FilteredList;
