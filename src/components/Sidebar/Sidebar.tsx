import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt=""
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/jhameson.png" />
        <strong>Jhameson</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
