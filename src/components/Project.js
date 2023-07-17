/* css import */
import style from "./../styles/Project.module.css";

const Project = () => {
    return (
        <div className={style.Project}>
            <div className={style.inner}>
                <h1>My Project</h1>
                <div className={style.projects}>
                    <div className={style.project}>포트폴리오</div>
                    <div className={style.project}>게시판</div>
                    <div className={style.project}>todo list</div>
                    <div className={style.project}>chat</div>
                    <div className={style.project}>싸피 프로젝트 1</div>
                    <div className={style.project}>싸피 프로젝트 2</div>
                </div>
            </div>
        </div>
    );
};

export default Project;
