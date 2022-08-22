import axios from "axios";
import React from "react";

const UsersList = ({ user, getAllUsers, setUpDateUser, handleOpenForm }) => {

  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleUpDateClick = () => {
    handleOpenForm()
    setUpDateUser(user)

  }

  return (
    <article className="card">
      <h2 className="card__title">{user.id}</h2>
      <hr className="card__hr" />
      <ul className="card__list">
        <li className="card__item">
        First Lame: <span className="card__span">{user.first_name}</span>
        </li>
        <li className="card__item">
          Last Name: <span className="card__span">{user.last_name}</span>
        </li>
        <li className="card__item">
          Email: <span className="card__span">{user.email}</span>
        </li>
        <li className="card__item">
          Password: <span className="card__span">{user.password}</span>
        </li>
        <li className="card__item">
          Birthday: <span className="card__span">{user.birthday}</span>
        </li>
        {/* <li className="card__item">
          Release Date{" "}
          <span className="card__span">{movie["release_date"]}</span>
        </li> */}
      </ul>
      <footer className="card__footer" >
                        
      
        <button onClick={deleteUser} className="card__btn"><img src="./src/assets/Group.png" alt="" /></button>
             
        <button onClick={handleUpDateClick}className="card__btn"><img src="./src/assets/Vector (2).png" alt="" /></button>
      </footer>
    </article>
    
  );
};

export default UsersList;
