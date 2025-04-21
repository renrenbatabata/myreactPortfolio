import { useState } from "react";
import Link from "next/link";
import NavStyles from "./nav.module.css";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleBtn = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`${NavStyles.nav} ${isOpen ? NavStyles.open : ""}`}>
                <div className={NavStyles.navArea}>
                    <div className={NavStyles.inner}>
                        <ul className={NavStyles.ul}>
                            <li><Link href="/">Top</Link></li>
                            <li><Link href="/#about">About</Link></li>
                            <li><Link href="/#skill">Skill</Link></li>
                            <li><Link href="/#journey">Journey</Link></li>
                            <li><Link href="/#blog">Blog</Link></li>
                            <li><Link href="/email">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={`${NavStyles.toggle_btn} ${isOpen ? NavStyles.open : ""}`} onClick={onToggleBtn}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {isOpen && (
                <button className={NavStyles.close_btn} onClick={() => setIsOpen(false)}></button>
            )}

            <div className={`${NavStyles.mask} ${isOpen ? NavStyles.show : ""}`} onClick={() => setIsOpen(false)}></div>
        </>
    );
};

export default Nav;
