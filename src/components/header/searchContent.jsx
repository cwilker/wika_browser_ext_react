import React from 'react'
import AppContext from "../../utils/context";

class SearchContent extends React.Component {
  static contextType = AppContext;

  render(){
    return(
      <div className="popup">
        <input className="search" autoFocus type="text" 
          name="search" placeholder='Search' />
      </div>
    )
  }
}

export default SearchContent;

