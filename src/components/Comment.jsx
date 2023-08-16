import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';
export function Comment(){
return (
  <div className={StyleSheet.comment}>
    <img src="https://github.com/diego3g.png"/>
      <div className={styles.commentbox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="maio Às 08:13h" dateTime="2022-05-11 08:13:30">Publicado ha 1 hr</time>
            </div>
                <button title="Deletar comentario">
                      <Trash size={20}
                            />
                </button>
          </header>
          <p>Muito bom Davon, parabéns</p>
        </div>
        <footer>
                <button>
                  <ThumbsUp
                        />
        Aplaudir <span>20</span>
                </button>
        </footer>
     </div>
  </div>
)
}