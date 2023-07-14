/* css import */
import style from "./../styles/Skills.module.css";

const Skills = () => {
    return (
        <div className={style.Skills}>
            <div className={style.inner}>
                <h1>📚Tech stack📚</h1>
                <div className={style.Main}>
                    <h1>📕Used as the main</h1>
                    <div className={style.skills}>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                    </div>
                </div>
                <div className={style.Sub}>
                    <h1>📒Used at least once</h1>
                    <div className={style.skills}>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                        <div className={style.skill}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
