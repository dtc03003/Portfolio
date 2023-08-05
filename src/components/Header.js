/* css import */
import style from "./../styles/Header.module.css";

const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.inner}>
                <div className={style.title}>
                    <p>DH's Portfolio</p>
                </div>
                <div className={style.btn_items}>
                    <p
                        className={style.btn_item}
                        onClick={() => {
                            scroll("Main");
                        }}
                    >
                        Home
                    </p>
                    <p
                        className={style.btn_item}
                        onClick={() => {
                            scroll("About");
                        }}
                    >
                        About me
                    </p>
                    <p
                        className={style.btn_item}
                        onClick={() => {
                            scroll("Skills");
                        }}
                    >
                        Skills
                    </p>
                    <p
                        className={style.btn_item}
                        onClick={() => {
                            scroll("Project");
                        }}
                    >
                        Projects
                    </p>
                    <p
                        className={style.btn_item}
                        onClick={() => {
                            scroll("Contact");
                        }}
                    >
                        Contact
                    </p>
                </div>
            </div>
        </div>
    );
};

const scroll = (val) => {
    document.getElementById(val).scrollIntoView({ behavior: "smooth" });
};

export default Header;
