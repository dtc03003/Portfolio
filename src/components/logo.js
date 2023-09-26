/* css import */
import style from "./../styles/Skills.module.css";

const Logo = (props) => {
    return (
        <div className={style.sub_skill}>
            <div
                className={style.skill_logo}
                style={{ backgroundImage: `url(${props.logo})` }}
            ></div>
        </div>
    );
};

export default Logo;
