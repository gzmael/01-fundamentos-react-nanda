import { Comment } from './Comment';
import styles from './Post.module.css';
export function Post (){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/diego3g.png"></img>
          <div className={styles.authorinfo}>
            <strong>Fernanda Fernandes</strong>
            <span>Estagiaria</span>
          </div>    
        </div>
        <time title="maio Às 08:13h" dateTime="2022-05-11 08:13:30">Publicado ha 1 hr</time>
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