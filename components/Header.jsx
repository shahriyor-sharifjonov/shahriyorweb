import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Header = ({page}) => {
    const [menuOpen, setMenuOpen] = useState('')
    const [open, setOpen] = useState(false)

    const handleClickMenuButton = () => {
        setMenuOpen(open?'':styles.open)
        setOpen(!open)
    }

    return (
        <header className={`${styles.header} ${menuOpen}`}>
            <ul className={styles.left}>
                <li>
                    <Link href="/">
                        <a className={`${styles.link} ${styles.logo}`}>shahriyor-web
                            <motion.div initial="pageInitial" animate="pageAnimate" variants={{
                                    pageInitial: {
                                        opacity: 0
                                    },
                                    pageAnimate: {
                                        opacity: 1
                                    }
                            }} className={styles.border}></motion.div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className={page == "home" ? `${styles.link} ${styles.active}` : `${styles.link}`}>_hello
                            <motion.div initial="pageInitial" animate="pageAnimate" variants={{
                                pageInitial: {
                                    opacity: 0
                                },
                                pageAnimate: {
                                    opacity: 1
                                }
                            }} className={styles.border}></motion.div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className={page == "about" ? `${styles.link} ${styles.active}` : `${styles.link}`}>_about-me
                            <motion.div initial="pageInitial" animate="pageAnimate" variants={{
                                pageInitial: {
                                    opacity: 0
                                },
                                pageAnimate: {
                                    opacity: 1
                                }
                            }} className={styles.border}></motion.div>
                        </a>
                    </Link>
                </li>
            </ul>
            <ul className={styles.right}>
                <li>
                    <Link href="/contacts">
                        <a className={page == "contacts" ? `${styles.link} ${styles.active} ${styles.last}` : `${styles.link} ${styles.last}`}>_contact-me
                            <motion.div initial="pageInitial" animate="pageAnimate" variants={{
                                pageInitial: {
                                    opacity: 0
                                },
                                pageAnimate: {
                                    opacity: 1
                                }
                            }} className={styles.border}></motion.div>
                        </a>
                    </Link>
                </li>
            </ul>
            <div className={`${styles.buttonWrap} ${menuOpen}`}>
                <button onClick={handleClickMenuButton} className={`${styles.button} ${menuOpen}`}>
                    <span className={styles.buttonLine}>
                    </span>
                </button>
            </div> 
            <div className={`${styles.menu} ${menuOpen}`}>
                <button className={styles.menuCloseOverlay} onClick={handleClickMenuButton}></button>
                <div className={styles.menuBody}>
                    <ul className={styles.menuList}>
                        <li>
                            <Link href="/">
                                <a className={page == "home" ? `${styles.menuLink} ${styles.active}` : `${styles.menuLink}`}>_hello</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className={page == "about" ? `${styles.menuLink} ${styles.active}` : `${styles.menuLink}`}>_about-me</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <a className={page == "contacts" ? `${styles.menuLink} ${styles.active}` : `${styles.menuLink}`}>_contact-me</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header> 
    )
}

export default Header