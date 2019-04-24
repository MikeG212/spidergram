import React from 'react';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            displaySearch: false
        };

        this.update = this.update.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleChange(e) {
        e.preventDefault();
        const that = this;
        this.setState({ username: e.currentTarget.value });
        that.props.requestUsers(this.state.username);
    }

    render() {
        let listCssClass = "blank-class";

        // // if (this.state.displaySearch && this.props.searchUsers.length > 0) {
        //     listCssClass = "search-results";
        // } else {
        //     listCssClass = "blank-class";
        // }

        return (
            <div className="search-container">
                <input className="search-input"
                    type="search"
                    onChange={this.handleChange}
                    value={this.state.username}
                    onFocus={this.showList}
                    onBlur={this.hideList}
                    placeholder="Search" />
                {/* <ul className={listCssClass}>{this.renderUsers()}</ul> */}
            </div>
        );
    }
}

export default withRouter(Search);