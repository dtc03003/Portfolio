/* css import */
import style from "./../styles/Skills.module.css";

const Logo = (props) => {
    return <div className={style.skill} style={{ backgroundImage: `url(${props.logo})` }}></div>;
};

export default Logo;
