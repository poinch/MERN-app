import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'
import './PlaceList.css'

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    )
  }

  return (
    <ul className="place-list">
      {items.map(
        ({ id, imageUrl, title, description, address, creator, location }) => (
          <PlaceItem
            key={id}
            id={id}
            image={imageUrl}
            title={title}
            description={description}
            address={address}
            creatorId={creator}
            coordinates={location}
          />
        )
      )}
    </ul>
  )
}

export default PlaceList
