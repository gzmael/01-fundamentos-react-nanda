import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';
import { Avatar } from './Avatar';
export function Comment(){
return (
  <div className={styles.comment}>
    < Avatar hasBorder={false} src="https://github.com/diego3g.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="maio Às 08:13h" dateTime="2022-05-11 08:13:30">Publicado ha 1 hr</time>
            </div>
                <button title="Deletar comentario">
                      <Trash size={24}
                            />
                </button>
          </header>
          <p>Muito bom Davon, parabéns</p>
            <footer>
                <button>
                  <ThumbsUp
                        />
        Aplaudir <span>20</span>
                </button>
        </footer>
          </div>
      </div>
   </div>
)
}