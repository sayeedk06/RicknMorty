import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.nav}>
            <Link href={'/'}><h3 className={styles.text}>Rick & Morty Character Index</h3></Link>
        </div>
    )
}