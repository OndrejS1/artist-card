import React, { Component } from 'react';
import AlbumList from './AlbumList';
import { albums } from './Albums'
import SearchBox from './SearchBox';
import './App.css';



class App extends Component {

  constructor() {
    super()
    this.state = {
      albums: albums,
      searchfield: ''
    }

  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log(event.target.value);

  }

  render() {
    const filterAlbums = this.state.albums.filter(albums => {

      return albums.name.toLowerCase().includes(this.state.searchfield.toLowerCase())


    })
    return (

      <div className="App">
        <SearchBox searchChange={this.onSearchChange}/>
        <AlbumList albums ={filterAlbums}/>
      </div>


    );

  }

}

export default App;
