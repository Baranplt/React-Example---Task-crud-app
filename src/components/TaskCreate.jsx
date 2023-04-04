import React, { useState } from 'react'

function TaskCreate({ onCreate, taskFormUpdate, task, onUpdate }) {


    const [title, setTitle] = useState(task ? task.title : '')
    const [taskDesc, settaskDesc] = useState(task ? task.taskDesc : '')
    const HandleChange = (e) => {

        setTitle(e.target.value)
    }
    const HandleTaskChange = (e) => {
        settaskDesc(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskFormUpdate) {
            onUpdate(task.id, title, taskDesc)
        } else {
            onCreate(title, taskDesc)

        }
        setTitle('')
        settaskDesc('')
    }


    return (
        <div>

            {
                taskFormUpdate ? <div className='w-[200px]'>
                    {
                        taskFormUpdate ? <h3 className='font-bold'>Lütfen Taskı Güncelleyiniz</h3> : <h3 className='font-bold'>Lütfen Task Ekleyiniz</h3>
                    }
                    <form onSubmit={handleSubmit} className='flex flex-col ' >
                        <label className='my-1 italic font-normal' htmlFor="Head">Başlık</label>
                        <input value={title} onChange={HandleChange} id="Head" autoComplete='off' className='border border-black rounded-[10px] p-1 outline-none' />
                        <label className='my-1 italic font-normal' htmlFor="task">Task Giriniz</label>
                        <textarea value={taskDesc} onChange={HandleTaskChange} id="task" autoComplete='off' rows={2} className='border border-black rounded-[10px] outline-none p-2' ></textarea>
                        <button onClick={handleSubmit} className='bg-green-600 my-2 rounded-lg p-1 font-semibold italic border border-green-600 text-white text-base hover:bg-green-500  duration-500'>Düzenle</button>

                    </form>
                </div> : <div className='w-[450px]'>
                    {
                        taskFormUpdate ? <h3 className='font-bold'>Lütfen Taskı Güncelleyiniz</h3> : <h3 className='font-bold'>Lütfen Task Ekleyiniz</h3>
                    }
                    <form onSubmit={handleSubmit} className='flex flex-col ' >
                        <label className='my-3 italic font-normal' htmlFor="Head">Başlık</label>
                        <input value={title} onChange={HandleChange} id="Head" autoComplete='off' className='border border-black rounded-[10px] p-1 outline-none' />
                        <label className='my-3 italic font-normal' htmlFor="task">Task Giriniz</label>
                        <textarea value={taskDesc} onChange={HandleTaskChange} id="task" autoComplete='off' rows={5} className='border border-black rounded-[10px] outline-none p-2' ></textarea>
                        <button onClick={handleSubmit} className='bg-green-600 my-3 rounded-lg p-2 font-semibold italic border border-green-600 text-white text-lg hover:bg-green-500  duration-500'>Oluştur</button>

                    </form>
                </div>
            }
        </div>
    )
}

export default TaskCreate