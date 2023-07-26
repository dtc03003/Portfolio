/* css import */
import style from "./../styles/Contact.module.css";

const Contact = () => {
    return (
        <div className={style.Contact} id="Contact">
            <div className={style.inner}>
                <h1>Contact Me</h1>
                <div className={style.Icons}>
                    <div
                        className={style.email}
                        onClick={() => {
                            copy("dtc03003@gmail.com");
                            alert("이메일 복사가 완료되었습니다.");
                        }}
                    ></div>
                    <div
                        className={style.kakao}
                        onClick={() => {
                            openkakao();
                        }}
                    ></div>
                    <div
                        className={style.github}
                        onClick={() => {
                            opengithub();
                        }}
                    ></div>
                    <div
                        className={style.blog}
                        onClick={() => {
                            openblog();
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

// 이메일 복사
const copy = (text) => {
    // 임시의 textarea 생성
    const $textarea = document.createElement("textarea");

    // body 요소에 존재해야 복사가 진행됨
    document.body.appendChild($textarea);

    // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
    $textarea.value = text;
    $textarea.select();

    // 복사 후 textarea 지우기
    document.execCommand("copy");
    document.body.removeChild($textarea);
};

const openkakao = () => {
    window.open("https://open.kakao.com/o/sDHPncxf");
};

const opengithub = () => {
    window.open("https://github.com/dtc03003");
};

const openblog = () => {
    window.open("https://velog.io/@dtc03003");
};

export default Contact;
