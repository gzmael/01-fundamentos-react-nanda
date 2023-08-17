import { Avatar } from './Avatar';
import { format, formatDistanceToNow }from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(publishedAt,"d 'de' LLL 'Às' HH:mmh",{
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR
  })
    
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
        <time title={publishedDateFormatted} dateTime="2022-05-11 08:13:30">Publicado ha 1 hr</time>
        {publishedDateFormatted}
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea 
        placeholder="Deixe um comentario"
        />
        <footer>
          <button type="submit">publicar</button>
        </footer>
      </form>
            <div className={styles.commentList}>
              <Comment />
              <Comment />
              <Comment />
                </div>
    </article>
  )
}