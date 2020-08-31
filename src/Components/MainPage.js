import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox.js";
import Scroll from "../Components/Scroll.js";
import Header from "../Components/Header";
import "./MainPage.css";
import CounterButton from "../Components/CounterButton";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return filteredRobots;
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <Header />
        <CounterButton color={"red"} />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={this.filterRobots()} />
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
