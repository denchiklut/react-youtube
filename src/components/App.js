import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchVideo} from "../actions";
import SearchBar from "./search-bar";
import Content from "./content";
import '../style/style.css'


class App extends Component {
  onSearchSubmit = term => {
    this.props.fetchVideo(term)
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <Content playlist={this.props.videos} video={this.props.selectedVideo}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchVideo }, dispatch)
}

const mapStateToProps = ({videos, selectedVideo}) => {
  return {videos, selectedVideo}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
