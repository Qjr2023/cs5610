import React, {  useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function AddTask() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();
    async function submitHandler(e){
        e.preventDefault();
        const newTask = {
            title: title,
            date: date
        }
        console.log("new task is ", newTask);
        setTitle("");
        setDate("");
        try {
            const response = await fetch("http://localhost:3000/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            });
            if (!response.ok) {
                if(response.status === 401) {
                    // <Alert>Your post need authentication</Alert>
                    console.log("Your post need authentication");
                }
                return;
            }
            const data = await response.json();
            console.log(data);
            if (data.acknowledged) {
                navigate(`tasks/${data.insertedId}`);
            }
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






