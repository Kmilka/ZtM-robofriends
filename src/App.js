import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox.js';
import Scroll from './Components/Scroll.js';
import Header from './Components/Header';
import './App.css';
import CounterButton from './Components/CounterButton'

import {searchField, requestRobots} from './actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(searchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount () {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter
        ( 
            robot => {return robot.name.toLowerCase().includes(searchField.toLowerCase())}
        );
        return isPending ? 
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <Header />
                    <CounterButton color={'red'} />
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filteredRobots} />
                    </Scroll>
                </div>
            )   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);