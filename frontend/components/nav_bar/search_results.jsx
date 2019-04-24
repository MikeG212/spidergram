import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import { fetchUsers } from '../../actions/user_actions';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: this.props.searchTerm,
            users: this.props.users,
        };

        this.renderUsers = this.renderUsers.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers(this.props.searchTerm);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.searchTerm !== newProps.searchTerm) {
            this.setState({ searchTerm: newProps.searchTerm })
            this.props.fetchUsers(this.props.searchTerm)
                .then(() => this.setState({ users: newProps.users }))
        }
        if (JSON.stringify(this.props.users) != JSON.stringify(newProps.users)) {
            this.props.fetchUsers(this.props.searchTerm)
                .then(() => this.setState({ users: newProps.users }))
        }
    }

    renderUsers() {
        this.props.users
    }

    render() {
        let { users } = this.state;
        let { searchTerm, currentUserId } = this.props;


        let searchedUsers = merge({}, users);
        delete searchedUsers[currentUserId];

        return (
            <ul className="search-results">
                {this.renderUsers()}
            </ul>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        currentUserId: state.session.id
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: (term) => dispatch(fetchUsers(term))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults))