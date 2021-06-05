import {$host} from "./index";

export const createTask = async (name) => {
    const data = await $host.post('api/tasks/', {name: name})
    return data
}

export const getTasks = async () => {
    const {data} =  await $host.get('api/tasks/')
    return data
}

export const deleteTask = async (name) => {
    const {data} = await $host.post('api/tasks/delete/',{name: name})
    return data
}




