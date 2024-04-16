import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <div style={{"padding":"5px"}}>
			Video Browser ( powered by <a href="http://www.ashishkumarkc.com" target="_blank">Ashish&#39;s Web</a> )
		</div>
		<br/>
		<input
          value={this.state.term}
		  placeholder="Enter a keyword / phrase to browse videos"
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
