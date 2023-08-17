/* css import */
import style from "./../styles/About.module.css";

const About = () => {
    return (
        <div className={style.About} id="About">
            <div className={style.inner}>
                <div className={style.about_me}>
                    {/* <div className={style.title}>
                        <h1>About Me</h1>
                    </div> */}
                    <div className={style.photo}></div>
                    <div className={style.char}>
                        <h1>김동현</h1>
                    </div>
                    <div className={style.birth}>
                        <h1>96.03.17</h1>
                    </div>
                </div>
                <div className={style.intro}>
                    <div className={style.title}>
                        <h1>About Me</h1>
                    </div>
                    <div className={style.info}>
                        <h1>배우는 개발자</h1>
                        <p>
                            학부시절 아두이노를 이용한 프로젝트를 수행하며 개발에 대해 재미를
                            느꼈습니다.
                            <br /> SSAFY에서 팀원들과 함께 프로젝트들을 완성하며 협동심을
                            길렀습니다.
                            <br /> 항상 배우고 기록하여 완성도 높은 코드를 만들겠습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
