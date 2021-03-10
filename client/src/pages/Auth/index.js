import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import './Auth.scss'

const Auth = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }

    return (

        <div className="card card-80 mt-5">
            <div className="card-body">
                <h5 className="card-title">Автоизация</h5>

                <div>
                    <div className="mb-3">
                        <label className="form-label">Email </label>
                        <input
                            placeholder="Введите email"
                            id="email"
                            type="text"
                            name="email"

                            value={form.email}
                            onChange={changeHandler}
                            className="form-control"
                        />
                        <p id="emailHelp" className="form-text form-text__color">Тут да придет письмо, с потверждением</p>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Пароль</label>
                        <input
                            placeholder="Введите пароль"
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={changeHandler}
                            className="form-control"

                        />
                        <p id="passwordHelpBlock" className="form-text form-text__color">Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры.</p>
                    </div>


                </div>

                <button
                    disabled={loading}
                    className="btn btn-primary"
                    onClick={loginHandler}
                >Войти</button>

                <button
                    className="btn btn-link ml-1"
                    onClick={registerHandler}
                    disabled={loading}
                >Зарегестрироваться</button>
            </div>
        </div >



    )
}

export default Auth