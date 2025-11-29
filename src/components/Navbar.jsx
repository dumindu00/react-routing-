import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" width="130"/>
        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar