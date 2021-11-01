import './Avatar.css'

const Avatar = (props) => {
  const { image, alt } = props

  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={image}
        alt={alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  )
}

export default Avatar
