import React, { useState } from 'react'

function Todo() {
    const [Task, setTask] = useState('')
    const [Tasks, setTasks] = useState([{ id: 1, title: "cleaning" }, { id: 2, title: "Studying" }])

    const addTask = () => {
        if (Task) {
            const newTask = { id: new Date().getTime().toString(), title: Task };
            setTasks([...Tasks, newTask])
            setTask("")
        }
    }
    return (
        <div className='container row'>
            <h1 className='mt-3 text-white'>To-Do App</h1>
            <h1 className='mt-3 text-white'>{Task}</h1>
            <div className='col-8'>
                <input
                    name='task'
                    type='text'
                    placeholder='Write your task'
                    className='form-control'
                    value={Task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <div className='col-4'>
                    <button className='btn btn-primary form-control' onClick={addTask}>
                        Add
                    </button>
                </div>

                <div className='badge'>
                    You have
                    {!Tasks.length ? "no tasks" : ` ${Tasks.length} tasks`}
                </div>
                {
                    Tasks.map((task) => (
                        <React.Fragment key={task.id}>
                            <div className='col-11'>
                                <span
                                    className='form-control bg-white btn mt-2'
                                    stye={{
                                        textAlign: 'left',
                                        font: "bold"
                                    }}>
                                    {task.title}
                                </span>
                            </div>

                            <div className='col-1'>
                                <button
                                    className='btn btn-warning'
                                >Delete</button>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo