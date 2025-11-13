function Header() {
    return (
        <nav className="grey darken-4">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    Search_movies
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="sass.html">Sass</a>
                    </li>
                    <li>
                        <a href="badges.html">Components</a>
                    </li>
                    <li>
                        <a href="!#">JavaScript</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
