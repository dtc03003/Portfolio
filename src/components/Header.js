/* css import */
import style from "./../styles/Header.module.css";

const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.inner}>
                <header className={style.title}>
                    <p
                        className={style.btn_item}
                        onClick={() => {
                            scroll("Main");
                        }}
                    >
                        DH's Portfolio
                    </p>
                </header>
                <nav className={style.btn_items}>
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
                </nav>
            </div>
        </div>
    );
};

const scroll = (val) => {
    document.getElementById(val).scrollIntoView({ behavior: "smooth" });
};

export default Header;
