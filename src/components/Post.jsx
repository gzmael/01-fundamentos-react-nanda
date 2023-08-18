import { Avatar } from './Avatar';
import { format, formatDistanceToNow }from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment';
import styles from './Post.module.css';

import { LineSegment } from 'phosphor-react';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments]= useState ([
   'Post muito bacana'
  ])
  const [NewCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt,"d 'de' LLL 'Às' HH:mmh",{
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
    function handleCreateNewComment(){
      event.preventDefault()
      
      setComments([...comments, NewCommentText]);
      setNewCommentText('');
    }
    function handleNewCommentChange() {
      setNewCommentText(event.target.value);
    }
    function deleteComment (commentToDelete) {
      setComments();
      const commentWithoutDeletedOne = comments.filter( comment =>{
       return comment !== commentToDelete;
      })
       setComments(commentWithoutDeletedOne);
    }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          < Avatar src={author.avatarUrl}/>
          <div className={styles.authorinfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>    
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
         {content.map(line => {
           if (line.type === 'paragraphy'){
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
         })}
         </div>
           <form onSubmit={handleCreateNewComment}className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea
        name="comment"
        value={NewCommentText}
        placeholder="Deixe um comentario"
        onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">publicar</button>
        </footer>
      </form>
            <div className={styles.commentList}>
              {comments.map(comment => {
                return <Comment
                 key={comment}
                  content={comment} 
                    onDeleteComment={deleteComment} />
              })}
           </div>
      </article>
  )
}