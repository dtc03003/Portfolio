/* css import */
import style from "./../styles/Header.module.css";

const Header = () => {
    return (
        <div className={style.Header}>
            여긴 해더
            <div className={style.Header_wrap}>
                <div className={style.btn_items}>
                    <p className={style.btn_item}>Home</p>
                    <p className={style.btn_item}>About</p>
                    <p className={style.btn_item}>Skill</p>
                    <p className={style.btn_item}>Project</p>
                    <p className={style.btn_item}>Contact</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
