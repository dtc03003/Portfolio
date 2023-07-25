/* css import */
import style from "./../styles/Header.module.css";
import $ from "jquery";

const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.btn_items}>
                <p
                    className={style.btn_item}
                    onClick={() => {
                        $("#Contents").scrollTop(0);
                    }}
                >
                    Home
                </p>
                <p className={style.btn_item}>About</p>
                <p className={style.btn_item}>Skill</p>
                <p className={style.btn_item}>Project</p>
                <p className={style.btn_item}>Contact</p>
            </div>
        </div>
    );
};

// const scroll = (name) => {
//     var location = document.querySelector("." + name).offsetTop;
//     window.scrollTo({ top: location, behavior: "smooth" });
//     console.log("작동");
// };

export default Header;
