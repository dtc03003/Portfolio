/* css import */
import style from "./../styles/Skills.module.css";

const Skill = (props) => {
    return (
        <div className={style.main_skill}>
            <div
                className={style.skill_logo}
                style={{ backgroundImage: `url(${props.logo})` }}
            ></div>
            <div className={style.skill_main}>
                <div className={style.skill_name}>
                    <h1>{props.name}</h1>
                </div>
                <div className={style.skill_gauge}>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Example with label"
                            style={{ width: `${props.gauge}%` }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {props.gauge}%
                        </div>
                    </div>
                </div>
                <div className={style.skill_explain}>
                    <p>항목1</p>
                    <p>항목2</p>
                    <p>항목3</p>
                    <p>항목4</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;
