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
                        $("#Contents").animate(
                            {
                                scrollTop: 0,
                            },
                            1000
                        );
                    }}
                >
                    Home
                </p>
                <p
                    className={style.btn_item}
                    onClick={() => {
                        $("#Contents").animate(
                            {
                                scrollTop: 900,
                            },
                            1000
                        );
                    }}
                >
                    About
                </p>
                <p
                    className={style.btn_item}
                    onClick={() => {
                        $("#Contents").animate(
                            {
                                scrollTop: 1400,
                            },
                            1000
                        );
                    }}
                >
                    Skill
                </p>
                <p
                    className={style.btn_item}
                    onClick={() => {
                        $("#Contents").animate(
                            {
                                scrollTop: 2300,
                            },
                            1000
                        );
                    }}
                >
                    Project
                </p>
                <p
                    className={style.btn_item}
                    onClick={() => {
                        $("#Contents").animate(
                            {
                                scrollTop: 3200,
                            },
                            1000
                        );
                    }}
                >
                    Contact
                </p>
            </div>
        </div>
    );
};

export default Header;
