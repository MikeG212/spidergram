import React from 'react';
import { withRouter } from 'react-router';
import SearchResults from './search_results';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            render: false,
        };

        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch() {
        return e =>
            this.setState({
                searchTerm: e.currentTarget.value
            });
    }

    render() {
        let { searchTerm, render } = this.state;
        let results = (<SearchResults searchTerm={searchTerm} />)
        return (
            <div className="search-container">
                <input className="user-search"
                    type="search"
                    onChange={this.updateSearch()}
                    value={this.state.username}
                    placeholder="Search" />
                <ul className="search-results">{results}</ul>

            </div>
        )
    }
}

export default withRouter(Search);
