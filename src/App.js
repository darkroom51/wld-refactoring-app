import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import UsersList from './components/UsersList'
import UserDetails from './components/UserDetails'
const App = (props) => (
    <Router>
    <div>
        <Route path={"/"} exact render={()=> (
            <UsersList usersData={props.usersData} />
        )}/>
        <Route path={"/user-details/:email"} render={()=> (
            <UserDetails usersData={props.usersData} />
        )}/>

    </div>
    </Router>
)

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

export default connect(
    mapStateToProps
)(App)
