import React from 'react'
import { NavLink } from 'react-router-dom'
import useJsonFetch from '../hooks/useJsonFetch'
import {nanoid} from 'nanoid'

export default function HeadPage() {
    const img_15x15 = 'http://placehold.it/15x15';
    const img_25x25 = 'http://placehold.it/25x25';
    const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, [])
   
    const handleChange = (event) => {
        if(event.target.scrollTop > 0){
            event.target.style.height = event.target.scrollHeight + "px";
        }
        if(event.target.value.length > 45) {
            event.target.setAttribute('cols', 84)
        } else {
            event.target.setAttribute('cols', 20)
        }
    }

    return (
        <div>  
            <h1>Главная</h1>
            <>
                {data.length > 0 && 
                <span>{data.map(o => 
                    <span key={nanoid()}>  
                        <div className="block">

                            <NavLink className="id" to={'/posts/' + o.id} exact />

                            <div className="create">
                                <NavLink className="button-create" to='/posts/new' exact>Добавить пост</NavLink> {/*перейти на новую страницу*/}  
                            </div>
                            <div className="content">
                                <div className="head-content">
                                    <img className="avatar" src={img_25x25} alt="avatar" width={25}></img>
                                </div>
                                <div className="text-content">
                                    <h4>Иван Иванович</h4>
                                    <p>🙒 Основатель группы 8мин.</p>
                                </div>
                            </div>
                            <div className="article">
                                <p>{o.content}</p> {/* Сообщение с сервера */}
                            </div>
                            <div>
                                <div className="footer">
                                    <button className="button-like" src={img_15x15}>
                                        <img src={img_15x15} alt="like" width={15} className="like"/>
                                        Нравится
                                    </button>
                                    <button className="button-commit">
                                        <img src={img_15x15} alt="chat" width={15} className="chat"/>
                                        Комментировать
                                    </button>
                                </div>
                            </div>
                            <div className="commit">
                                <img className="avatar" src={img_25x25} alt="avatar" width={25}></img>
                                <form method="post" name="commit">  
                                    <div className="input">
                                        <textarea name="text" type="text" placeholder="Напишите комментарий" row="1" onChange={handleChange}/>
                                        <div className="img-reaction">
                                            <img src={img_15x15} alt="smile" width={15}></img>
                                            <img src={img_15x15} alt="addphoto" width={15}></img>
                                            <img src={img_15x15} alt="gif" width={15}></img>
                                            <img src={img_15x15} alt="sticker" width={15}></img>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </span>)}
                </span>
                }
                {data.length === 0 && 
                    <span>
                        <div className="block">
                            <div className="create">
                                <NavLink className="button-create" to='/posts/new' exact>Добавить пост</NavLink> {/*перейти на новую страницу*/}  
                            </div>    
                        </div>
                    </span>
                }
            </>
        </div>
    )
}