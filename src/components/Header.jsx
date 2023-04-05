import b from "../assets/images/b.svg";
const Header = () => {
    return (
        <>
            


                <header className="Header">
                    <nav className="nav">
                        <a className="nav_title" href="#">
                          <h1>Site Logo</h1>
                        </a>
                        <ul className="nav_list">
                            <li><a href="#">Works</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <img className="burger" src={b} alt="" />
                    </nav>
                </header>
            


        </>
    )
}
export default Header