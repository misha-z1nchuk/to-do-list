import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createTask} from "../../http/taskApi";
import {useHistory} from "react-router-dom";

const CreateTask = ({show, onHide}) => {
    const [value, setValue] = useState("")
    const history = useHistory()
    const addTask = () => {
        if (value.length == 0) {
            alert("You have to name your task")
            return
        }
        createTask(value).then(data => setValue(""))
        onHide()
        window.location.reload()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter name of the task"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button  variant="outline-success" onClick={addTask}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTask;