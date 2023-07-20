/* css import */
import style from "./../styles/Project.module.css";
import Modal1 from "./Modal/Modal1";
import Modal2 from "./Modal/Modal2";
import Modal3 from "./Modal/Modal3";
import Modal4 from "./Modal/Modal4";
import Modal5 from "./Modal/Modal5";
import Modal6 from "./Modal/Modal6";

const Project = () => {
    return (
        <div className={style.Project}>
            <div className={style.inner}>
                <h1>My Project</h1>
                <div className={style.projects}>
                    <Modal1></Modal1>
                    <Modal2></Modal2>
                    <Modal3></Modal3>
                    <Modal4></Modal4>
                    <Modal5></Modal5>
                    <Modal6></Modal6>
                </div>
            </div>
        </div>
    );
};

export default Project;
