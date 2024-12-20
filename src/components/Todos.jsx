import React, {useState, useEffect} from 'react';
import {databases, ID} from '../appwrite/appwriteConfig.js'
import conf from '../conf/conf.js';

function Todos() {

    const [todoData, setTodoData] = useState([])
    const [loader, setLoader] = useState(false)
    const [todoToDelete, setTodoToDelete] = useState(false)

    useEffect(() => {
        console.log("useEffect started");
        setLoader(true)
        const getTodos = databases.listDocuments(
            conf.appwriteDatabaseId, // databaseId
            conf.appwriteCollectionId, // collectionId
        );

        getTodos.then(response => {
            setTodoData(response.documents)
            console.log(response.documents); // Accesses the `documents` array in the promise
        }).catch(error => {
            console.log("error occured while listing the todos:");
            console.error(error); // Logs any errors
        });

        setLoader(false)
    }, [todoData])

    const deleteTodo = async(id) => {
        setTodoToDelete(true)
        const result = await databases.deleteDocument(
            conf.appwriteDatabaseId, // databaseId
            conf.appwriteCollectionId, // collectionId
            id // documentId
        );
        console.log("Todo deleted", result);
        setTodoToDelete(false)
        //window.location.reload()
    }

    useEffect(() => {
        
    }, [todoToDelete]);

    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-xl font-bold mb-2">Todo List</p>
            {loader ? (
              <p>Loading ...</p>
            ) : (
            <div>
                {todoData && todoData.map(item => (
                    <div key={item.$id}>
                    <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                      <div>
                        <p>{item.todo_str_attribute}</p>
                      </div>
                      <div>
                        <span
                          className="text-red-400 cursor-pointer"
                          onClick={() => {
                            deleteTodo(item.$id)
                          }}
                        >
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                  )
                )}
            </div>
            )}
        </div>
    );
}

export default Todos;