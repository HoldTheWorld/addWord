import styles from './header.module.css'
import { Link } from 'react-router-dom'

function Header() {


  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.header_logo}> 
          logo 
        </div>

        <div className={styles.header_links_block}>
          <Link className={styles.header_link} to='/'>Домой</Link>
          <Link className={styles.header_link} to='/login'>Войти</Link>
          <Link className={styles.header_link} to='/register'>Регистрация</Link>
          <Link className={styles.header_link} to='/logout'>Выйти</Link>
        </div>
      </div>
    </div>
  )

}

export default  Header
