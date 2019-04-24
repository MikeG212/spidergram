import React from 'react';
import { withRouter } from 'react-router';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        };
    }

    update(field) {
        return e =>
            this.setState({
                username: e.currentTarget.value
            });
    }

    render() {
        return (
            <div className="search-container">
                <input className="user-search"
                    type="search"
                    onChange={this.update()}
                    value={this.state.username}
                    placeholder="Search" />
                <ul className="search-results">Results</ul>

            </div>
        )
    }
}

export default withRouter(Search);
