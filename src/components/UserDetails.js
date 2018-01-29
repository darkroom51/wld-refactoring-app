import React from 'react'
import {withRouter} from 'react-router-dom'

const styles={

}

const UserDetails = props => {
    const arrWithUsers = props.usersData || []
    const currentUserEmail = props.match.params.email
    //const currentUserData = arrWithUsers.filter((el) => el.email === currentUserEmail)[0]
    const currentUserData = arrWithUsers.find((el) => el.email === currentUserEmail)
  //FUNKCJA FIND ZAMIAST FILTER!

    return (
        <div>

            {
                currentUserData ?
                    <div>{currentUserData.name.first}</div>
                    :
                    'No user in database'
            }
        </div>
    )
}

export default withRouter(UserDetails) //komponent wyzszego rzedu withRouter, dzieki temu mozna bylo przekazac params przy zastowowaniu render