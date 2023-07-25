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
                        scroll(0);
                    }}
                >
                    Home
                </p>
                <p
                    className={style.btn_item}
                    onClick={() => {
                        scroll(900);
                    }}
                >
                    About
                </p>
                <p
                    className={style.btn_item}
                    onClick={() => {
                        scroll(1400);
                    }}
                >
                    Skill
                </p>
                <p
                    className={style.btn_item}
                    onClick={() => {
                        scroll(2300);
                    }}
                >
                    Project
                </p>
                <p
                    className={style.btn_item}
                    onClick={() => {
                        scroll(3200);
                    }}
                >
                    Contact
                </p>
            </div>
        </div>
    );
};

const scroll = (val) => {
    $("#Contents").animate(
        {
            scrollTop: val,
        },
        1000
    );
};

export default Header;
