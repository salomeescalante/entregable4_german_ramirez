import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm' 




function App() {

  const [users, setUsers] = useState() 
  const [upDateInfo, setUpDateUser] = useState ()
  const [isFormOpen, setIsFormOpen] = useState(false)


  const getAllUsers = () => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
      axios.get(URL)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
  }

    useEffect(() => {
      getAllUsers()
    }, [])

  const handleOpenForm = () => setIsFormOpen(true)

  const handleCloseForm = () => setIsFormOpen(false)
    
  return (
    <div className="App">
    <h1 className='title__card'>Users CRUD</h1>
    <button className='open_form' onClick={handleOpenForm}>OPEN FORM</button>
    <div className= {isFormOpen ? 'form-container' : 'form-none'}>
      <UsersForm 
        getAllUsers={getAllUsers}  
        upDateInfo={upDateInfo}
        setUpDateUser={setUpDateUser}   
        handleCloseForm={handleCloseForm} 
      />
      </div>
      <div className='card-container'>


        {
          users?.map(user => (
            
            <UsersList 
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpDateUser={setUpDateUser}
              handleOpenForm={handleOpenForm}

          />
          ))
        }
    </div>
    </div>
    
  )
}

export default App
