import styles from "./SideBar.module.scss"
import imgSideBar from "../../assets/img-sidebar.svg"
import { PencilLine } from "phosphor-react"
export const SideBar = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={imgSideBar} alt="" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/107154619?v=4" alt="" />
                <strong>Mauricio</strong>
                <span>web developer</span>
            </div>
            <footer>
                
                <a href="#"> <PencilLine size={20}/>Edite seu perfil</a>
            </footer>
        </aside>
    )
}