/* css import */
import style from "./../styles/Contents.module.css";

import Main from "./Main";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

const Contents = () => {
    return (
        <div className={style.Contents} id="Contents">
            <Main />
            <About />
            <Skills />
            <Project />
            <Contact />
            <div
                className={style.button}
                onClick={() => {
                    scroll("Main");
                }}
            ></div>
            <div
                className={style.button}
                style={{ bottom: "3rem", transform: "scaleY(-1)" }}
                onClick={() => {
                    scroll("Contact");
                }}
            ></div>
        </div>
    );
};

export default Contents;

const scroll = (val) => {
    document.getElementById(val).scrollIntoView({ behavior: "smooth" });
};
