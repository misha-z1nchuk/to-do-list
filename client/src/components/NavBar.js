import React, {useContext} from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {Redirect} from "react-router-dom";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink to={MAIN_ROUTE}>ToDoList</NavLink>
            <Nav className="ml-auto">
                {user.isAuth ?
                    <Button variant={"outline-light"} onClick={() => logOut()}>Log out</Button>
                    :
                    <Button variant={"outline-secondary"} ><NavLink to={REGISTRATION_ROUTE}>Authorization</NavLink></Button>
                }
            </Nav>
        </Navbar>



    );
});

export default NavBar;