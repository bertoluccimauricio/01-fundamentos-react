import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css'
export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Mauricio Bertolucci"
            content="bla bla bjo dskdm dalkh ldsajlhfas"
          />
          <Post
            author="Mauricio Bertolucci"
            content="bla bla bjo dskdm dalkh ldsajlhfas"
          />
        </main>
      </div>
    </div>
  )
}
