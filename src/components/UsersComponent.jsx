import React, { useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import { getUsers } from '../redux/actions/users'
import Card from './CardComponent'

const Users = props => {
  const {
    loading,
    error,
    users,
    getUsers,
  } = props

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {users.loading && <p>Users are loading...</p>}
      {users.length > 0 && users.map(user => ( 
        <Card user={user} key={user.id} />
      ))}
      {users.length === 0 && !loading && <p>No Users Available</p>}
      {error && !loading && <p>{error}</p>}
    </>
  )
}

const mapStateToProps = ({users}) => {
  return {
    users: users.users,
    loading: users.loading,
    error: users.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)