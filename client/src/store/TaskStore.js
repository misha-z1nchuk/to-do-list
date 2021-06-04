import {makeAutoObservable} from "mobx"

export default class TaskStore{
    constructor() {
        this._taskList = []
        makeAutoObservable(this)
    }

    setTaskList(tasks){
        this._tasksList = tasks
    }

    get taskList(){
        return this._tasksList
    }


}