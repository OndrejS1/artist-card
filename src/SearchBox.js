import React from 'react';



const SearchBox = ({ searchfield, searchChange }) => {

  return (

    <div className="search-container">
    <form action="/action_page.php">
      <input
         type="search"
         placeholder="Enter the album name ... "
         className="searchbox" name="search"
         onChange={searchChange}/>
    </form>

  </div>

  );

}



export default SearchBox;
