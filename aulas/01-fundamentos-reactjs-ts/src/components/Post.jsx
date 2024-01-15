import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';

import styles from './Post.module.css';

export function Post({author, publishedAt, content}){
const [comments, setComments] = useState([
    'Post muito bom'
])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});

    const publishedDateRealtiveToNow = formatDistanceToNow (publishedAt, {
        locale: ptBR, addSuffix: true
    });

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        // imutabilidade => as variáveis não sofrem mutação. Nós criamos um novo valor (um novo espaço na memória.)
        const commentsWithoutDeletedOne = comments.filter (comment => {
            return comment != commentToDelete
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentInputEmpty = newCommentText.length === 0

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src= {author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='14 de dezembro ás 13:43h' dateTime='2023-12-14 13:43:30'>
                    {publishedDateRealtiveToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line=>{
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.conent}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                name = 'comment' 
                placeholder='Deixe um comentário'
                value = {newCommentText}
                onChange = {handleNewCommentChange}
                onInvalid = {handleNewCommentInvalid}
                required
                />

                <footer>
                    <button type="submit" disabled={ isNewCommentInputEmpty }>Publicar</button>
                </footer>
                
            </form>
            <div className={styles.commentList}>
                {comments.map (comment => {
                    return(
                    <Comment
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    )
}