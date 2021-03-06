import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <div className="header__title">
                <div className="header__picture">
                    <Link to = "/Frontier-Family/"><img src="https://i.ibb.co/hZzLR7d/Silverdawn.png" alt="Sd logo"/></Link>
                </div>
                <h1>Welcome to the Frontier's Rover!</h1>
            </div>
            <nav className="nav">
                <ul className="nav__ul">
                    <li className="nav__li"><Link to = "/Frontier-Family/">Home</Link></li>
                    <li className="nav__li"><Link to = "/ttrpg">TTRPGs</Link></li>
                    <li className="nav__li"><Link to = "/schedule">Schedule</Link></li>
                    <li className="nav__li"><Link to = "/trips">Games</Link></li>                
                </ul>
            </nav>
        </header>
    );
}

export default Header ;