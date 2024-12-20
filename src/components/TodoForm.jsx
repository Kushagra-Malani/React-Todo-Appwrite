import React, {useState, useEffect} from 'react';
import {databases, ID} from '../appwrite/appwriteConfig.js'
import conf from '../conf/conf.js';

function TodoForm() {
    const userId = ID.unique() 
    const [todo, setTodo] = useState('test')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("test1 todo is: ",todo);
        try {
            const result = await databases.createDocument(
                conf.appwriteDatabaseId, // databaseId
                conf.appwriteCollectionId, // collectionId
                userId, // documentId
                {todo_str_attribute: todo}, // data
            );
            console.log("Entry added in database",result);
        } catch (error) {
            console.log("error has occured:")
            console.log(error);
        }
        //window.location.reload()
    }

    useEffect(() => {
        console.log("Updated todos:", todo);
    }, [todo]);

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <form
              action=""
                onSubmit={handleSubmit}
              className="flex justify-center mb-10"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Todo"
                className="border p-2 w-2/3 rounded-md"
                onChange={(e) => {
                    const todoData = e.target.value
                    setTodo(todoData) 
                }}
              />
              <button
                className="bg-purple-500 p-2 text-white ml-2 rounded-md"
                type="submit"
              >
                Add Todo
              </button>
            </form>
        </div>
    );
}

export default TodoForm;