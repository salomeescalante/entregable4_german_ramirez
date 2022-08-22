import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const defaultValue = {

    first_name:'',
    last_name: '',
    Email:'',
    password: '',
    birthday: '',
}


const Form = ({getAllUsers, upDateInfo, setUpDateUser, handleCloseForm}) => {

    useEffect(() => {
        if(upDateInfo){
        reset(upDateInfo)
        }
      }, [upDateInfo])

    const createUser = data => {
        const URL = 'https://users-crud1.herokuapp.com/users/'
        axios.post(URL, data)
            .then(res => {

                console.log(res.data)
                getAllUsers()

            })
            .catch(err => console.log(err))
    }

    const upDateUser = data =>{
        const URL = `https://users-crud1.herokuapp.com/users/${upDateInfo.id}/`
        axios.patch(URL, data)
            .then(res => {
                console.log(res.data)
                getAllUsers()
            })
            .catch(err => console.log(err))
            reset(defaultValue)
            setUpDateInfo()
    }
    const {register, reset, handleSubmit} = useForm()

    const submit = data => {
        if (upDateInfo) {
        
            upDateUser(data)
            setUpDateUser()            
        } else {
            
        createUser(data)
        }
        reset(defaultValue)
        handleCloseForm(setUpDateUser)
    }

  return (
    <form onSubmit={handleSubmit(submit)} className='form'>
        <div onClick={handleCloseForm} className='form__equis'>X</div>
     <h2 className='form__title'>
        {
        upDateInfo ? 
            'Update User Information'
            : 
            'CREATE NEW USER'}
    </h2>   
     <ul className='form__list'>
        <li className='form__item'>
        <label className='label__form' htmlFor="first_name">Last Name</label>
        <input className='input__form' {...register("first_name")} type="text" id='first_name' />
        </li><br />
        <li className='form__item'>
        <label className='label__form' htmlFor="last_name">First Name</label>
        <input className='input__form' {...register("last_name")}type="text" id='last_name' />
        </li><br />
        <li className='form__item'>
        <label className='label__form' htmlFor="email">Email</label>
        <input className='input__form' {...register("email")}type="text" id='email' />
        </li><br />
        <li className='form__item'>
        <label className='label__form' htmlFor="password">Password</label>
        <input className='input__form' {...register("password")}type="text" id='password' />
        </li><br />
        <li className='form__item'>
        <label className='label__form' htmlFor="birthday">Birthday</label>
        <input className='input__form' {...register("birthday")}type="text" id='birthday' />
        </li><br /><br /><br />
     </ul>
     <button className='form__btn'>{upDateInfo ? 'UPDATE' : 'CREATE'}</button>
    </form>
  )
}

export default Form