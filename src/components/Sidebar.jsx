import styles from "./Sidebar.module.css";

import coverProfile from "../assets/cover-profile.svg";

export function Sidebar() {
  <aside className={styles.sidebar}>
    <img className={styles.cover} src={coverProfile} />

    <div className={styles.profile}>
      <strong>Maurício Beretolucci</strong>
      <span>Data Specialit</span>
    </div>

    <footer>
      <a href="#">Editar seu perfil</a>
    </footer>
  </aside>;
}
