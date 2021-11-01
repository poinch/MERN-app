import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [{
    id: 'ui1',
    name: 'Mark Pollo',
    image: 'https://images.pexels.com/photos/3417403/pexels-photo-3417403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    places: 3
  }]

  return <UsersList items={USERS} />
}

export default Users
