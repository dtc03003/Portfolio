/* css import */
import style from "./../styles/Contact.module.css";

const Contact = () => {
    return (
        <div className={style.Contact}>
            <div className={style.inner}>
                <h1>Contact Me</h1>
                <div className={style.Icons}>
                    <div className={style.email}></div>
                    <div className={style.kakao}></div>
                    <div className={style.github}></div>
                    <div className={style.blog}></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
