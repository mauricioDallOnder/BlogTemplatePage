import styles from './Header.module.scss'
import Logo from "../../../src/assets/logo-ignite.svg"
export const Header=()=>{
    return(
        <header className={styles.header}>
            <img src={Logo} alt="logo do site" />
        </header>
    )
}