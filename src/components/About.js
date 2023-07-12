/* css import */
import style from "./../styles/About.module.css";

const About = () => {
    return (
        <div className={style.About}>
            <div className={style.inner}>
                <div className={style.about_me}>
                    <div className={style.title}>
                        <h1>About Me</h1>
                    </div>
                    <div className={style.photo}></div>
                    <div className={style.name}>
                        <h1>김동현</h1>
                    </div>
                    <div className={style.birthday}>
                        <h1>96.03.17</h1>
                    </div>
                </div>
                <div className={style.intro}>
                    <div className={style.title}>
                        <h1>자기소개</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
