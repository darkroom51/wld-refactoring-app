import React from 'react'
import {withRouter} from 'react-router-dom'

const styles={

}

const UserDetails = props => {
    const arrWithUsers = props.usersData || []
    const currentUserEmail = props.match.params.email
    const currentUserData = arrWithUsers.filter((el) => el.email === currentUserEmail)

    return (
        <div>
            {props.match.params.email}
            {
                JSON.stringify(currentUserData)
            }
        </div>
    )
}

export default withRouter(UserDetails) //komponent wyzszego rzedu withRouter, dzieki temu mozna bylo przekazac params przy zastowowaniu render