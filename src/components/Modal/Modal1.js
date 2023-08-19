import style from "./../../styles/Project.module.css";
import React, { useState } from "react";
import Modal from "react-modal";
import ModalStyle from "../../styles/ModalStyle";

const Modal1 = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div
            className={style.project}
            onClick={() => {
                setModalIsOpen(true);
            }}
        >
            <div className={style.out_img}></div>
            <div className={style.out_intro}>
                <div className={style.out_title}>
                    <h1>포트폴리오</h1>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>간단소개</p>
                        <p>개발기간</p>
                        <p>기술</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>포트폴리오</p>
                        <p>23.07 ~ 23.08</p>
                        <p>#react</p>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={(event) => {
                    setModalIsOpen(false);
                    event.stopPropagation(); // 이벤트 버블링 방지
                }}
                style={ModalStyle}
            >
                <div className={style.modal}>
                    <div className={style.modal_inner}>
                        <div className={style.img}>
                            <div className={style.inner_img}></div>
                        </div>
                        <div className={style.intro}>
                            <div className={style.title}>
                                <h1>포트폴리오</h1>
                            </div>
                            <div className={style.inner_intro}>
                                <div className={style.main_description}>프로젝트 설명</div>
                                <div className={style.description}>
                                    <div className={style.projects_label}>주요 기능</div>
                                    <div className={style.projects_value}>
                                        주요 기능 설명 주요 기능 설명 주요 기능 설명 주요 기능 설명
                                        주요 기능 설명 주요 기능 설명 주요 기능 설명 주요 기능 설명
                                        주요 기능 설명 주요 기능 설명 주요 기능 설명 주요 기능 설명
                                        주요 기능 설명
                                    </div>
                                </div>
                                <div className={style.description}>
                                    <div className={style.projects_label}>FrontEnd</div>
                                    <div className={style.projects_value}>기능 설명</div>
                                </div>
                                <div className={style.description}>
                                    <div className={style.projects_label}>BackEnd</div>
                                    <div className={style.projects_value}>기능 설명</div>
                                </div>
                                <div className={style.description}>
                                    <div className={style.projects_label}>DataBase</div>
                                    <div className={style.projects_value}>기능 설명</div>
                                </div>
                                <div className={style.description}>
                                    <div className={style.projects_label}>Deployment</div>
                                    <div className={style.projects_value}>기능 설명</div>
                                </div>
                                <div className={style.description}>
                                    <div className={style.projects_label}>URL</div>
                                    <div className={style.projects_value}>기능 설명</div>
                                </div>
                            </div>
                            <div className={style.link}>깃허브 주소</div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Modal1;
