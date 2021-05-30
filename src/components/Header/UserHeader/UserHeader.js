import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CloudUpload from '@material-ui/icons/CloudUpload';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";


/**
 * The navigation bar that renders when the user is logged in
 * Contains: Flickr button, You button, Explore button, Get Pro button, Search, Upload, Notifications, UserSettings 
 * @author Dina Mohsen
 * @example <UserHeader />
 */
//bg="dark" variant="dark"
const UserHeader = () => {

    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');

    //To avoid the refreshing problem:
    //https://stackoverflow.com/questions/63880605/react-js-how-to-prevent-page-reload-once-click-on-the-link-right-now-the-whole

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (searchQuery === '') {
            return;
        }
        setSearchQuery('');
        history.push("/SearchPage");
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{backgroundColor: '#F0F8FF'}}>
            {/* <Navbar.Brand href="/home">Flickr</Navbar.Brand> */}
            <Link to="/home" style={{textDecoration: 'none'}}>Flickr</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="You" id="collasible-nav-dropdown" >
                <NavDropdown.Item onSelect={() => history.push("/about")}>About</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => history.push("/photostream")}>PhotoStream</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => history.push("/albums")}>Albums</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => history.push("/faves")}>Faves</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => history.push("/galleries")}>Galleries</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => history.push("/groups")}>Groups</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => history.push("/cameraroll")}>CameraRoll</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Explore" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/about">Recent Photos</NavDropdown.Item>
                <NavDropdown.Item href="/trending">Trending</NavDropdown.Item>
                <NavDropdown.Item href="/galleries">Galleries</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/get-pro">Get Pro</Nav.Link>
            
            </Nav>
        <Nav>
            
        <Form inline>
                <FormControl value={searchQuery} onChange={handleChange} type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info" type="submit" onClick={handleClick}>Search</Button>
            </Form>
  
    <CloudUpload style={{color: 'white', marginTop: '10px', width: '35px', height: '35px', marginLeft: '10px'}} />
    <NotificationsIcon style={{color: 'white', marginTop: '10px', width: '35px', height: '35px', marginLeft: '10px'}} /> 
    <AccountCircleIcon style={{color: 'white', marginTop: '10px', width: '35px', height: '35px', marginLeft: '10px'}} /> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default UserHeader;