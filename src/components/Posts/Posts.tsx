
import { FormEvent, useState, ChangeEvent, useContext } from 'react';
import { ApiContext } from '../../Context/Context';

import { Avatar } from "../Avatar/Avatar"
import { Comment } from "../Comments/Comments"
import styles from "./Posts.module.scss"

export interface IIPosts{
    id: number;
    author:{
        avatarUrl: string;
        name: string;
        role: string;
    },
    content:{
        type: 'paragraph'| 'link';
        ValueContent: string;
    }[],
    time:string
}




export const Post = ({ author, content,time }: IIPosts) => {

  

    const [comments, setComments] = useState([
        'teste de post'
    ])

    const [newcoment, setnewComments] = useState('')

    const handlenewComment = (event:FormEvent) => {
        event.preventDefault()
        setComments([...comments, newcoment])
        setnewComments('')
    }

    const handleNewComentsChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setnewComments(event.target.value)
    }

   const DeleteComents =(commentToDelete:string)=>{
        const commentsFiltered = comments.filter(comment=>{
            return comment!==commentToDelete
        })
        setComments(commentsFiltered)
   }

    const IsNewCommentsEmpty = newcoment.length === 0

    const ContextValues = useContext(ApiContext)

    const Imagens=ContextValues.map((item, index)=>{
        return item.author.avatarUrl
    })
  
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.autor}>
                    <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/107154619?v=4" alt="" />
                    <div className={styles.AutorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                    <time dateTime={new Date().toDateString()}>{time}</time>
                </div>

            </header>


            <section className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.ValueContent}>{line.ValueContent}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.ValueContent}><a href="#">{line.ValueContent}</a></p>
                    }
                })}

            </section>

            <form onSubmit={handlenewComment} className={styles.commentForm}>
                <strong>deixe o seu feedback</strong>
                <textarea
                    name="comentario"
                    placeholder={"deixe seu comentario"}
                    value={newcoment}
                    onChange={handleNewComentsChange}
                />


                <footer >
                    <button
                        className={styles.button}
                        disabled={IsNewCommentsEmpty}
                    >
                        enviar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((item, index) => {
                    return (
                        <Comment key={index}
                       
                        src={Imagens[Math.floor(Math.random() * (Imagens.length - 1))]}
                            item={item}
                            OnDeleteComent={DeleteComents}
                        />
                    )
                })}
            </div>
        </article>

    )

}