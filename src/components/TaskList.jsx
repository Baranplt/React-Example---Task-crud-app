import React from 'react'
import TaskShow from './taskShow'
function TaskList({ tasks, onDelete, onUpdate }) {

    return (
        <div className='   m-20 grid grid-cols-4 gap-5'>
            {
                tasks.map((task, index) => {
                    return (
                        <TaskShow onUpdate={onUpdate} onDelete={onDelete} key={index} task={task} />
                    )
                })
            }
        </div>
    )
}

export default TaskList