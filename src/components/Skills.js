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
                        <div className={style.skill}>html</div>
                        <div className={style.skill}>css3</div>
                        <div className={style.skill}>javascript</div>
                        <div className={style.skill}>react</div>
                        <div className={style.skill}>java</div>
                        <div className={style.skill}>github</div>
                        <div className={style.skill}>markdown</div>
                    </div>
                </div>
                <div className={style.Sub}>
                    <h1>📒Used at least once</h1>
                    <div className={style.skills}>
                        <div className={style.skill}>vue.js</div>
                        <div className={style.skill}>redux</div>
                        <div className={style.skill}>spring</div>
                        <div className={style.skill}>spring_boot</div>
                        <div className={style.skill}>Node.js</div>
                        <div className={style.skill}>Koa</div>
                        <div className={style.skill}>express.js</div>
                        <div className={style.skill}>mysql</div>
                        <div className={style.skill}>mongodb</div>
                        <div className={style.skill}>amazon ec2</div>
                        <div className={style.skill}>ubuntu</div>
                        <div className={style.skill}>jira</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
