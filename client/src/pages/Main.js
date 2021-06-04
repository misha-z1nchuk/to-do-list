import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {createTask, deleteTask, getTasks} from "../http/taskApi";
import {Button, Card, ListGroup, Row} from "react-bootstrap";
import {login} from "../http/userApi";
import {map} from "react-bootstrap/ElementChildren";
import CreateTask from "../components/modals/CreateTask";


const Main = observer(() => {
    const {user} = useContext(Context)
    const [tasks, setTasks] = useState([])
    const [taskVisible, setTaskVisible] = useState(false)


    useEffect(() => {
        getTasks().then(data => setTasks(data))
    }, [])


    const addTask = async (name) => {
        await createTask(name)
    }

    const HereDeleteTask = async (name) => {
        await deleteTask(name)
        alert("Task deleted")
        window.location.reload()
    }


    return (
        <div>

            {user.isAuth ?
                <div>
                    <ListGroup>
                        {tasks.map((type, index) =>
                            <ListGroup.Item
                                style={{cursor: 'pointer'}}
                                key={index}
                            ><Row >
                                {type.name}
                                <Button id={type.name} onClick={(e) => HereDeleteTask(type.name)} className="ml-auto">Delete</Button>
                            </Row>

                            </ListGroup.Item>
                        )}
                    </ListGroup>
                    <Button onClick={() => setTaskVisible(true)}  className="ml-3" variant="outline-success">Add Task</Button>
                    <CreateTask show={taskVisible} onHide={() => setTaskVisible(false)}/>
                </div>
                :
                "First you need to authorize"
            }
        </div>
    );

});

export default Main;