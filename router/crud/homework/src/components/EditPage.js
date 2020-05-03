import React,{ useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import useJsonFetch from '../hooks/useJsonFetch'

export default function EditPage({match}) {
    const img_15x15 = 'http://placehold.it/15x15';
    const img_25x25 = 'http://placehold.it/25x25';
    const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, [])
    const id = Number(match.params.id);

    const [form, setForm] = useState({
        id: id,
        content: ''})
       
    useEffect(()=> {
        if(data.length > 0) {
            let d = data.find(i => Number(i.id) === Number(match.params.id))
            setForm(prev => ({...prev, content: d.content}))
        }
    }, [data, match.params.id])

    const handleChange = (e) => {
        const {value} = e.target
        setForm(prev => ({...prev, content: value}))
    }

    const handleSubmit = () => {
        fetch(process.env.REACT_APP_DATA_URL, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
    
    }

    return (
        <div>
            <h1>Карточка редактирования</h1>
            <form>
                <div className="block-comment">
                    <div className="create">
                        <button className="exit">
                            <NavLink to='/' exact><img src={img_15x15} alt="exit" width={15} className="like"/></NavLink>
                        </button>
                    </div>
                    <div className="content">
                        <div className="head-content">
                            <img className="avatar" src={img_25x25} alt="avatar" width={25}></img>
                        </div>
                        <div className="text-content">
                            <textarea value={form.content} onChange={handleChange} /> {/* Сообщение поста */}
                        </div>    
                    </div>
                        <div className="tops">
                            <ul className="list-btns">
                                <li>
                                <img src={img_15x15} alt="video" width={15} className="like"/>
                                    Фото/видео
                                </li>
                                <li>
                                    <img src={img_15x15} alt="cinema" width={15} className="like"/>
                                    Чувства/действия
                                </li>
                                <li>
                                    <img src={img_15x15} alt="ellipsis" width={15} className="like"/>
                                    GIF
                                </li>
                                <li>
                                    <img src={img_15x15} alt="ellipsis" width={15} className="like"/>
                                    Отметить посещение
                                </li>
                                <li>
                                    <img src={img_15x15} alt="ellipsis" width={15} className="like"/>
                                    Отметить друзей
                                </li>
                            </ul>
                        </div>
                        <div className="create">
                            <button className="button-create">
                                <NavLink className="button-create" to='/' exact onClick={handleSubmit}>Сохранить</NavLink>
                            </button>
                        </div>
                </div>
            </form>
        </div>
    )
}