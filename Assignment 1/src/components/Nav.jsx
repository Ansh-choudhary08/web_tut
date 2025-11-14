import { Link } from "react-router-dom";

const navStyle = {
    display: "flex",
    gap: "24px",
    padding: "20px 40px",
    background: "#222",
    alignItems: "center",
};

const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    padding: "8px 16px",
    borderRadius: "4px",
    transition: "background 0.2s",
};

const activeLinkStyle = {
    background: "#444",
};

const Nav = () => {
    return (
        <nav style={navStyle}>
            <Link to="/" style={linkStyle}>
                Home
            </Link>
            <Link to="/login" style={linkStyle}>
                Login
            </Link>
            <Link to="/register" style={linkStyle}>
                Register
            </Link>
        </nav>
    );
};

export default Nav;
