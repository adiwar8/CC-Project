import axios from 'axios';

export const getTasksRequest = async () => {
    return await axios.get("http://3.104.110.137:4000/tasks");
}

export const createTaskRequest = async (task) => {
    return await axios.post("http://3.104.110.137:4000/tasks", task);
}

export const deleteTaskRequest = async (id) => {
    return await axios.delete(`http://3.104.110.137:4000/tasks/${id}`);
}

export const getTaskRequest = async (id) => {
    return await axios.get(`http://3.104.110.137:4000/tasks/${id}`);
}

export const updateTaskRequest = async (id, newFields) => {
    return await axios.put(`http://3.104.110.137:4000/tasks/${id}`, newFields);
}

export const toggleTaskDoneRequest = async (id, done) => {
    return await axios.put(`http://3.104.110.137:4000/tasks/${id}`, {
        done,
    });
}