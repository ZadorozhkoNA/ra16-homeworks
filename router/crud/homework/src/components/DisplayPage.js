import React,{ useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import useJsonFetch from '../hooks/useJsonFetch'

export default function DisplayPage({match}) {
    const img_25x25 = 'http://placehold.it/25x25';
    const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, [])
    const url = process.env.REACT_APP_DATA_URL + '/' + match.params.id
        
    const [form, setForm] = useState({
        id: match.params.id,
        content: match.params.content})

    useEffect(()=> {
        if(data.length > 0) {
            let d = data.find(i => Number(i.id) === Number( match.params.id))
            setForm(prev => ({...prev, content: d.content}))
        }
    }, [data, match.params.id])

  
    const handleDelete = () => {
        fetch(url, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        })
    }

    return (
        <div>
            <h1>Страница просмотра</h1>
            <form>
                <div className="block-comment">
                    <div className="content">
                        <div className="head-content">
                            <img className="avatar" src={img_25x25} alt="avatar" width={25}></img>
                        </div>
                        <div className="text-content">
                            <h4>Иван Иванович</h4>
                            <p>🙒 Основатель группы 8мин.</p>
                        </div>
                    </div>
                    <span className="article">
                        
                        <textarea value={form.content} />
                    </span>

                    <div className="create">
                        <button className="button-create" >
                            <NavLink className="button-create" to={ match.params.id + '/edit'} exact>Изменить</NavLink>
                        </button>
                        <button className="button-create delete">
                            <NavLink className="button-create delete" to='/' exact onClick={handleDelete}>Удалить</NavLink>
                        </button>
                    </div>
                </div> 
            </form>
        </div>
    )
}