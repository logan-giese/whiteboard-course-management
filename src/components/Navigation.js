import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

export const Navigation = (props) => {
  const { user, handleLogout } = props;

  return (
    <Navbar bg="dark" expand="lg" style={{ width: "100%" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/">
            Home
          </NavLink>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/about">
            About
          </NavLink>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/profile">
            Profile
          </NavLink>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/courses">
            Courses
          </NavLink>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/messages">
            Messages
          </NavLink>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/tools">
            Tools
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <div style={{ float: "right" }}>
        <span style={{ color: "white", padding: "14px" }}>
          Logged in as {user.first_name} {user.last_name}
        </span>
        <Button variant="secondary" href="#" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Navbar>
  );
};
