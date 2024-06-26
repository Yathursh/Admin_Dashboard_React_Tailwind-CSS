import { useState } from 'react';
import { loginFields } from "../../lib/constants/FormField";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }


    // const authenticateUser = () => {
    //     const { username, password } = loginState;
    
    //     axios.get('/login.json')
    //         .then(response => {
    //             const data = response.data;
    //             console.log('Fetched data:', data);
    //             const users = data.users || [];
    //             console.log('Users:', users);
    //             const user = users.find(user => {
    //                 console.log('User:', user);
    //                 return user && user.username && username && user.username.trim() === username.trim() && user.password === password;
    //             });
    //             console.log('Found user:', user);
    //             if (user) {
    //                 navigate('/admin');
    //             } else {
    //                 setError('Invalid username or password');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error fetching login data:', error);
    //         });
    // }

    // const authenticateUser = async () => {
    //     try {
    //         const response = await axios.get('https://fakestoreapi.com/auth/login');
    //         const users = response.data;
    //         const { username, password } = loginState;
    //         const user = users.find(user => user.username === username && user.password === password);
    //         if (user) {
    //             navigate('/admin'); 
    //         } else {
    //             setError('Invalid username or password');
    //         }
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //         setError('An error occurred while trying to log in');
    //     }
    // }

    const users = [
        { email: 'user1@gmail.com', password: '123456' },
        { email: 'user2@gmail.com', password: '123456' },
        { email: 'user3@gmail.com', password: '123456' },
    ];
    
    const authenticateUser = () => {
        const { email, password } = loginState;
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            setSuccessMessage('Login successful!');  
            setError('');
        } else {
            setError('Invalid username or password');
            setSuccessMessage('');
        }
    }
    

    


    
    


    return (
        <div className="flex justify-center items-center h-screen -mt-12">
            <form className="mr-50 p-8 bg-gray-100 rounded-lg shadow-lg" style={{ width: "10cm", height: "10cm" }} onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4 mt-5">
                     {fields.map(field =>
                         <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            className="w-full"
                />
                )}
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />

            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}

        </form>
        </div>
    );
}
