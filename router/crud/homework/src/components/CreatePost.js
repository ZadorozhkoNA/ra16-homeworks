import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom'

export default function CreatePost() {
    const img_15x15 = 'http://placehold.it/15x15';
    const img_25x25 = 'http://placehold.it/25x25';
    const [form, setForm] = useState({
        id: '',
        content: ''})
    
    const handleChange = (e) => {
        const {value} = e.target
        setForm(prev => ({...prev, id: 0, content: value}))
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
        <h1>Страница создания</h1>
        <form>
            <div className="block-comment">
                <div className="tops-create">
                    <ul className="list-btns-create">
                        <li>
                            <img src={img_15x15} alt="pencilregular" width={15} className="like"/>
                            Публикация
                        </li>
                        <li>
                        <img src={img_15x15} alt="video" width={15} className="like"/>
                            Фото/видео
                        </li>
                        <li>
                            <img src={img_15x15} alt="cinema" width={15} className="like"/>
                            Прямой эфир
                        </li>
                        <li>
                            <img src={img_15x15} alt="ellipsis" width={15} className="like"/>
                            Ещё
                        </li>
                    </ul>
                    <button className="exit">
                        <NavLink to='/' exact><img src={img_15x15} alt="exit" width={15} className="like"/></NavLink>
                    </button>
                </div>
                <span className="article">
                    <img className="avatar" src={img_25x25} alt="avatar" width={25}/>
                    <textarea value={form.content} onChange={handleChange} />
                </span>
                <div className="create">
                    <NavLink className="button-create" to='/' exact onClick={handleSubmit}>Опубликовать</NavLink>
                </div>
            </div>
        </form>
        </div>
    )
}