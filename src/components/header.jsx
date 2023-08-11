import styles from './Header.module.css'

import igniteLogo from '../assets/Ignite.png';
export function Header (){
  return (
<header className={styles.header}>
  <img src={igniteLogo} alt="logotipo do ignite"/>
</header>
  
  )
}
