import Nav from "./nav";
import Styles from './header.module.css';

const Header = () => {
    return (
        <div className={Styles.header}>
            <Nav />
        </div>
    );
};

export default Header;

