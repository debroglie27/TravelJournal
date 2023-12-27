import EarthIcon from "../assets/earth-icon.svg"

const Navbar = () => {
  return (
    <div className="nav-container">
      <img src={EarthIcon} alt="World Icon" />
      <h3>my travel journal.</h3>
    </div>
  )
}
export default Navbar