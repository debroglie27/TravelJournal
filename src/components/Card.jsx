import LocationIcon from "../assets/location-icon.svg"

const Card = (props) => {
  return (
    <div className="card-container">
      <img className="card--image" src={props.item.imageUrl} alt={`Image of ${props.item.title}`} />
      <div className="card--content-container">
        <div className="card--location-container">
          <img src={LocationIcon} alt="Location Icon" />
          <h2>{props.item.location.toUpperCase()}</h2>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <p>{props.item.startDate} - {props.item.endDate}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}
export default Card