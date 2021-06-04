import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";



const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin  = location.pathname === "/login"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const click = async () => {
        try {
            let data;
            if (isLogin){
                const response = await login(email, password)
            }
            else {
                const response = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(MAIN_ROUTE)
        }catch (e)
        {
            alert(e.response.data.message)
        }


    }
    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width:600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <Form.Control
                            className="mt-3"
                            placeholder="Enter your password"
                            value={password}
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />

                    </Form>
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                No account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                            </div>
                            :
                            <div>
                                Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                            </div>
                        }
                        <Button
                            variant="outline-success"
                            onClick={click}
                        >
                            {isLogin ?
                                'Login':
                                'Register'
                            }
                        </Button>
                    </Row>

                </Card>

            </Container>
        </div>
    );
});

export default Auth;