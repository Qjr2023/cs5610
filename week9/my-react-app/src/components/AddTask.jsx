import React, {  useState } from 'react'

export default function AddTask() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    async function submitHandler(e){
        e.preventDefault();
        const newTask = {
            title: title,
            date: date
        }
        setTitle("");
        setDate("");
        try {
            await fetch("http://localhost:5001/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            });
            // if (response.ok) {
            //     const data = await response.json();
            //     console.log(data);
            // }
            // const data = await response.json();
            // console.log(data);
        } catch (error) {
            console.log("submitHandler", error);
        }
    }
    return (
        <form onSubmit={submitHandler}>
        <div className="form-control">
                <label>Title</label>
                <input type="text" value={title} onChange={function(e){
                    setTitle(e.target.value);
                }}/>
        </div>
        <div className="form-control">
                <label>Date</label>
                <input type="text" value={date} onChange={function(e){
                    setDate(e.target.value);
                }}></input>
        </div>
            <button type="submit"> Save </button>
        </form>
    )
}






