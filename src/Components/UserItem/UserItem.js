import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../Redux/store/users'
import swal from 'sweetalert'
import { ToastContainer, toast } from 'react-toastify';

export default function UserItem({ firtsname, lastname, email, _id }) {

  const showToast = () => {
    toast.success('کاربر با موفقیت حذف شد', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      rtl: true,
      progress: undefined,
      theme: "light",
    });
  }

  const dispatch = useDispatch()
  const removeHandler = () => {
    swal({
      title: 'آیا از حذف مطمئن هستید ؟',
      icon: 'warning',
      buttons: ['نه', 'آره']
    }).then(result => {
      console.log(result);

      if (result) {
        dispatch(removeUser(_id))
        showToast()

      }
    })
  }


  return (
    <div className="uesrs__item">
      <div className="users__info">
        <img
          src="../../img/admin/profile/banana.png"
          alt="photo user"
          className="users__img"
        />
        <div className="users__details">
          <p className="users__name my-0">{firtsname} {lastname} </p>
          <p lang="en" className="users__email">
            {email}
          </p>
        </div>
      </div>
      <div className="users__btns">
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button className="btn-custome btn-custome__red" onClick={removeHandler}>حذف</button>
      </div>
    </div>
  )
}
