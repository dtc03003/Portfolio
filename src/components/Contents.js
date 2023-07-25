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
        </div>
    );
};

export default Contents;
