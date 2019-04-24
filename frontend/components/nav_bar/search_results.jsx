import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import { searchUsers } from '../../actions/user_actions';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: this.props.searchTerm,
            searchResults: this.props.searchResults,
        };

        this.renderUsers = this.renderUsers.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.searchTerm !== newProps.searchTerm) {
            this.setState({ searchTerm: newProps.searchTerm })
            this.props.searchUsers(newProps.searchTerm)
                .then(() => this.setState({ searchResults: newProps.searchResults }))
        }
        if (JSON.stringify(this.props.users) != JSON.stringify(newProps.users)) {
            this.props.searchUsers(this.props.searchTerm)
                .then(() => this.setState({ users: newProps.users }))
        }
        setTimeout(() => {
            window.addEventListener('click', this.setState({ searchTerm: "" }))
        });
    }

    renderUsers(users) {
        if (this.props.searchTerm.length > 0) {
            const arrayOfUsers = Object.values(users);
            return arrayOfUsers.map(user => {
                return (<li key={user.id} className="search-result-user"
                    onClick={() => this.props.history.push(`/users/${user.id}`)}>
                    <img className="search-result-user-image" src={user.avatar_url} alt={user.username} />

                    {user.username}
                </li>)
            });
        }
    }

    render() {
        debugger
        let { searchResults } = this.state;
        let { searchTerm, currentUserId } = this.props;


        let searchedUsers = merge({}, searchResults);
        delete searchedUsers[currentUserId];

        return (
            <ul className="search-results">
                {this.renderUsers(searchedUsers)}
            </ul>
        )
    }

}


const mapStateToProps = (state) => {
    debugger
    return {
        searchResults: state.entities.search,
        currentUserId: state.session.id
    };
}

const mapDispatchToProps = (dispatch) => ({
    searchUsers: (term) => dispatch(searchUsers(term))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults))