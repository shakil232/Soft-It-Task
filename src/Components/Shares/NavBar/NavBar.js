import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth'
// import toast, { Toaster } from 'react-hot-toast';
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

;

const NavBar = () => {
    // const { user, logOut } = useAuth();

    // //   logOut-Handel 
    // const handelLogOut = () => {
    //     logOut({});
    //     toast.success("Logged Out", {
    //         duration: 4000,
    //     });
    // };

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" sticky="top" >
            {/* <Toaster /> */}
            <Container>
                <Navbar.Brand  className="d-flex justify-content-center align-content-center  text-danger" as={Link} to="/" >
                    Soft-It-Task
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" className="me-3 " >Home</Nav.Link>
                        <Nav.Link as={Link} to="/shop" className="me-3 " >Shop</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="me-3 " >About us</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard" className="me-3 " >Dashboard</Nav.Link>

                        {/* {
                            user?.email ?
                                <NavDropdown
                                    style={{ marginTop: '-6px' }}
                                    title={
                                        user?.photo ?
                                            <Image
                                                width="40"
                                                height="40"
                                                roundedCircle
                                                src={user?.photo} /> :

                                            <Image
                                                width="40"
                                                height="40"
                                                roundedCircle
                                                src="https://i.ibb.co/5GzXkwq/user.png"
                                                alt="user-pp" />

                                    }
                                    id="collasible-nav-o,ag" >

                                    <strong className="text-center d-block mt-1">{user.displayName}</strong>
                                    <strong className="text-center d-block mt-2">{user.email}</strong>
                                    <div className="text-center my-2">
                                        <Link onClick={handelLogOut} className=" btn btn-logout bg-transparent border-danger text-danger  rounded-3" to="/">LogOut</Link>
                                    </div>
                                </NavDropdown>
                                : <Link className=" btn btn-main border-0 rounded-3 " to="/login">Login</Link>
                        // } */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;