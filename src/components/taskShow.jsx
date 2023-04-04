import React, { useState } from 'react'
import TaskCreate from './TaskCreate'

function TaskShow({ task, onDelete, onUpdate }) {
    const handleDeleteClick = () => {
        onDelete(task.id)

    }
    const [showEdit, setShowEdit] = useState(false)
    const handleEditClick = () => {
        setShowEdit(!showEdit)

    }
    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false)
        onUpdate(id, updatedTitle, updatedTaskDesc)
    }


    return (
        <div className={`border flex items-center flex-col border-green-500  py-16 px-20 rounded-xl`}>

            {
                showEdit ? <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} /> : <>
                    <h1 className='font-bold'>Göreviniz</h1>
                    <p className='my-2  text-sm'>{task.title}</p>
                    <h1 className='font-bold'>Yapılacaklar</h1>
                    <p className='my-2  text-sm'>{task.taskDesc}</p>
                    <div className="btn">
                        <button onClick={handleDeleteClick} className='bg-red-600 my-3 px-4 rounded-3xl  border border-red-600 mr-6 text-white  hover:bg-red-500  duration-500 '>Sil</button>
                        <button onClick={handleEditClick} className='bg-blue-600 my-3 px-4 rounded-3xl  border border-blue-600 text-white  hover:bg-blue-500  duration-500'>Güncelle</button>

                    </div></>
            }

        </div>
    )
}

export default TaskShow