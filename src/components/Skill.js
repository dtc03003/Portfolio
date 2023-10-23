/* css import */
import style from "./../styles/Skills.module.css";
import Texts from "./Texts";

const Skill = (props) => {
    const textarray = props.text;
    // console.log(texts);

    const textlist = textarray.map((v) => <Texts id={v.id} text={v.text} key={v.num} />);

    return (
        <div className={style.main_skill}>
            <div className={style.skill_logo}>
                <div className={style.logo} style={{ backgroundImage: `url(${props.logo})` }}></div>
                {/* <div className={style.skill_gauge}>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Example with label"
                            style={{ width: `${props.data.skillgauge}%` }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {props.data.skillgauge}%
                        </div>
                    </div>
                </div> */}
            </div>
            <div className={style.skill_main}>
                <div className={style.skill_name}>
                    <h1>{props.data.skillname}</h1>
                </div>
                <div className={style.skill_explain}>{textlist}</div>
            </div>
        </div>
    );
};

export default Skill;
