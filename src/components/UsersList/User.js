import React from 'react'
import {Link} from 'react-router-dom'

const styles={
    margin: 10,
    padding: 10,
    backgroundColor: '#eee'
}

const User = props => (
    <Link to={"/user-details/" + props.user.email}>
    <div key={props.user.email} style={styles}>
        {props.user.name.first} {props.user.name.last}
    </div>
    </Link>
)

export default User