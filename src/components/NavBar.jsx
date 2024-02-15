import './NavBar.css'

function NavBar() {
    return (
        <div className="nav-container mt-3">
        <nav>
            <ul>
                <li><a href="#header">Back to Top</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar