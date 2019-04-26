import React from 'react';
import { withRouter } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            displaySearch: false
        };

        this.update = this.update.bind(this);
        this.renderUsers = this.renderUsers.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.searchCssClass = this.searchCssClass.bind(this);
        this.navigateToUserShow = this.navigateToUserShow.bind(this);
        this.showList = this.showList.bind(this);
        this.hideList = this.hideList.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    navigateToUserShow(id) {
        this.setState({ username: "" }, () => this.props.history.push(`/users/${id}`));
    }
    renderUsers() {
        const that = this;
        if (this.props.searchUsers.length > 0) {
            return this.props.searchUsers.map((user) => {
                return <li className="search-result-item"
                    key={user.id}
                    onClick={() => this.navigateToUserShow(user.id)}
                    onBlur={this.props.clearSearchUsers}
                    value={user.id}>
                    <div className="search-item-info">
                        <img className="search-avatar" src={user.avatar_url} alt="" />
                        {user.username}
                    </div>
                </li>;
            });
        }
    }

    searchCssClass() {
        if (this.props.searchUsers.length > 0) {
            return "search-results";
        } else {
            return "display-none";
        }
    }

    handleChange(e) {
        e.preventDefault();
        const that = this;
        this.setState({ username: e.currentTarget.value },
            () => that.props.requestUsers(this.state.username));
    }

    showList() {
        debugger
        this.setState({ displaySearch: true });
    }

    hideList() {
        debugger
        setTimeout(() => this.setState({ displaySearch: false }), 200);
    }

    render() {
        let listCssClass = "display-none";

        if (this.state.displaySearch && this.props.searchUsers.length > 0) {
            listCssClass = "search-results";
        } else {
            listCssClass = "display-none";
        }

        return (
            <div className="search-container">
                <input className="user-search"
                    type="search"
                    onChange={this.handleChange}
                    value={this.state.username}
                    onFocus={this.showList}
                    onBlur={this.hideList}
                    placeholder="Search" />
                <ul className={listCssClass}>{this.renderUsers()}</ul>
            </div>
        );
    }
}

export default withRouter(Search);
