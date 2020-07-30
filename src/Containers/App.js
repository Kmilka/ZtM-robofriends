import React, { Component } from 'react';
import {connect} from 'react-redux';
import MainPage from '../Components/MainPage'
import robotsAPI from '../API';

import {searchField, requestAnything} from '../actions.js';

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
        onRequestRobots: () => dispatch(requestAnything(robotsAPI))
    }
}

class App extends Component {

    render() {
        return <MainPage {...this.props} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);