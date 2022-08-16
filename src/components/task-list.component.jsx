import React, { useState } from 'react'
import Task from './task.component';
import "./task-list.styles.css";

const TaskList = () => {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const task = {
            id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        setTaskList(task.taskName !== "" ? [...taskList, task] : taskList);
    };

    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };

    const completeTask = (id) => {
        setTaskList(
            taskList.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                } else {
                    return task;
                }
            })
        );
    };
    
    return (
        <>
            <h1>Task List</h1>
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}> Add Task</button>
            </div>
            <div style={{marginBottom:"2rem"}} className="list">
                {taskList.map((task) => {
                    return (
                        <Task
                            key={task.id}
                            taskName={task.taskName}
                            id={task.id}
                            completed={task.completed}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />
                    );
                })}
            </div>
        </>
    )
    }   

export default TaskList