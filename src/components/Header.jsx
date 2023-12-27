import EarthIcon from "../assets/earth-icon.svg"

const Header = () => {
  return (
    <div className="header-container">
      <img src={EarthIcon} alt="World Icon" />
      <h3 className="header--title">my travel journal.</h3>
    </div>
  )
}
export default Header