import UserItem from './UserItem'
import './UsersList.css'

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    )
  }

  return (
    <ul className="users-list">
      {items.map(({ id, image, name, places }) => {
        return (
          <UserItem
            key={id}
            id={id}
            image={image}
            name={name}
            placeCount={places}
          />
        )
      })}
    </ul>
  )
}

export default UsersList
