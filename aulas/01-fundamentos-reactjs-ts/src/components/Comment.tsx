import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }


    function handleDeleteCommment(){
        onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/FerrazM.png" alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                   <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title='14 de dezembro ás 13:43h' dateTime='2023-12-14 13:43:30'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick = {handleDeleteCommment} title="Deletar comentário">
                        <Trash size={24}/>
                    </button>
                   </header>

                   <p>{content}</p> 
                </div>

                <footer>
                  <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Curtir <span>{likeCount}</span>
                  </button>
                </footer>
            </div>
        </div>
    )
}