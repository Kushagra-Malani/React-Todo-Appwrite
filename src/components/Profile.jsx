import React, {useState} from 'react';
import {account} from '../appwrite/appwriteConfig.js'
import {useNavigate, Link} from 'react-router-dom'
import { useEffect } from 'react';
import TodoForm from './TodoForm.jsx';
import Todos from './Todos.jsx';

function Profile() {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await account.get();
                setUserDetails(response);
                console.log(userDetails);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch user details. Please log in again.');
            }
        };

        fetchUserDetails();
    }, [])

    const logoutUser = async(e) => {
        e.preventDefault();
        try {
            const result = await account.deleteSessions();
            console.log(result);
            navigate('/'); // '/' is the url for login page
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <>
           {userDetails ? (
            <>
              <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
                <div>
                  <p className="text-xl">Hello {userDetails.name}</p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-red-400 text-white p-1 rounded-md"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </div>
              </div>
              {/* TODO FORM */}
              <TodoForm />
              {/* TODOS BOX */}
              <Todos />
            </>
            ) : (
              <p className="mt-4">
                Please Login To see Profile{" "}
                <Link to="/">
                  <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
                    Login
                  </span>
                </Link>
              </p>
            )}
        </>
    );
}

export default Profile;