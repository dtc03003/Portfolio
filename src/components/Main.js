/* css import */
import style from "./../styles/Main.module.css";

const Main = () => {
    return (
        <div className={style.Main} id="Main">
            <div className={style.inner}>
                <div className={style.typewriter}>
                    <h1>김동현의 포트폴리오입니다.</h1>
                </div>
            </div>
        </div>
    );
};

export default Main;
