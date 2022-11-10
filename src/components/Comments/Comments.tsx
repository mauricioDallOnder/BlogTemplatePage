import { ThumbsUp, Trash } from "phosphor-react"
import { useState, useContext, useEffect } from 'react';

import { Avatar } from "../Avatar/Avatar"
import styles from "./Comments.module.scss"




export const Comment = ({ item, OnDeleteComent,src}: { item: string, OnDeleteComent: Function,src?:string}) => {
   

    const [like, setLike] = useState(0)

    const handleLike = () => {
        setLike((LikeCount) => {
            return LikeCount + 1
        })
    }
    const handleDelete = () => {
        OnDeleteComent(item)
    }

    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src={src}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>Mauricio Dall onder</strong>
                            <time title="11 de maio as 00:13h" dateTime="2022-05-11 08:13:30"></time>
                        </div>
                        <button

                            onClick={handleDelete}>

                            <Trash size={20}

                            />
                        </button>
                    </header>
                    <p>{item}</p>
                </div>
                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp />
                        Aplaudir <span>{like}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}