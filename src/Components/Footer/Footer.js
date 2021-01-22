import "./Footer.css"

const Footer = () => {
    return(
        <footer className="footer-container">
            <span>Copyright © 2021 Roy Luca Alberto Kachani.</span>
            <span>
                <a href="https://github.com/roykachani" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-2x" ></i></a>
                <a href="https://linkedin.com/in/roykachani" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
            </span>
        </footer>
    )
}

export default Footer;