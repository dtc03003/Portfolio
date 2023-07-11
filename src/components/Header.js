/* css import */
import style from "./../styles/Header.module.css";

const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.btn_items}>
                <p className={style.btn_item}>Home</p>
                <p className={style.btn_item}>About</p>
                <p className={style.btn_item}>Skill</p>
                <p className={style.btn_item}>Project</p>
                <p className={style.btn_item}>Contact</p>
            </div>
        </div>
    );
};

export default Header;
