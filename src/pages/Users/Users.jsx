import React from 'react'
import './Users.css'
export default function Users() {
    return (
        <div class="col-8 content px-0">
      <div class="content__wrapper">
        <ul class="content__tabs">
          <li class="content__tab">
            <a href="users-admin.html" class="content__tab-link">
              <span class="fa fa-user"></span>
              کاربران
            </a>
          </li>
          <li class="content__tab">
            <a href="infomation-admin.html" class="content__tab-link">
              <span class="fa fa-book"></span>
              اطلاعات
            </a>
          </li>
          <li class="content__tab">
            <a href="products-admin.html" class="content__tab-link">
              <span class="fa fa-store"></span>
              دوره‌ها
            </a>
          </li>

          <li class="content__tab">
            <a href="weblog-admin.html" class="content__tab-link">
              <span class="fa fa-newspaper"></span>
              وبلاگ
            </a>
          </li>
        </ul>
        <div class="active"></div>

        <div class="users">
          <form action="#" class="form row justify-content-between gap-3 mx-0">
            <div class="form__box-input col-8 px-0">
              <span class="fa fa-search form__icon form__icon-search"></span>

              <input
                type="search"
                name=""
                id="search"
                placeholder="نام یا ایمیل کاربر را وارد کنید "
                class="form-control form__input users-input"
                required
              />
            </div>
            <button type="reset" class="btn-custome btn-custome--gray col-3">
              حذف کاربر
            </button>
          </form>

          <div class="users__list-container">
            <div class="users__list users__list-wrapper">
              <div class="uesrs__item">
                <div class="users__info">
                  <img
                    src="../../img/admin/profile/banana.png"
                    alt="photo user"
                    class="users__img"
                  />
                  <div class="users__details">
                    <p class="users__name my-0">محمدامین سعیدی راد</p>
                    <p lang="en" class="users__email">
                      ce01010101it@gmail.com
                    </p>
                  </div>
                </div>
                <div class="users__btns">
                  <button class="btn-custome btn-custome--gray">پیام ها</button>
                  <button class="btn-custome btn-custome__blue">اطلاعات</button>
                  <button class="btn-custome btn-custome__red">حذف</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}