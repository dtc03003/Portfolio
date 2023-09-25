/* css import */
import style from "./../styles/Skills.module.css";

const Logo = (props) => {
    return (
        <div className={style.skill}>
            <div
                className={style.inner_skill}
                style={{ backgroundImage: `url(${props.logo})` }}
            ></div>
        </div>
    );
};

export default Logo;
