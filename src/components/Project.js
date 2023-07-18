/* css import */
import style from "./../styles/Project.module.css";
import React, { useState } from "react";
import Modal from "react-modal";

const ModalStyle = {
    content: {
        position: "absolute",
        top: "25vh",
        left: "25vw",
        right: "25vw",
        bottom: "25vh",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px",
    },
};

const Project = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className={style.Project}>
            <div className={style.inner}>
                <h1>My Project</h1>
                <div className={style.projects}>
                    <div
                        className={style.project}
                        onClick={() => {
                            setModalIsOpen(true);
                        }}
                    >
                        포트폴리오
                        <Modal
                            isOpen={modalIsOpen}
                            ariaHideApp={false}
                            onRequestClose={(event) => {
                                setModalIsOpen(false);
                                event.stopPropagation(); // 이벤트 버블링 방지
                            }}
                            style={ModalStyle}
                        >
                            포트폴리오 더 보기 모달창입니다.
                        </Modal>
                    </div>
                    <div className={style.project}>게시판</div>
                    <div className={style.project}>todo list</div>
                    <div className={style.project}>chat</div>
                    <div className={style.project}>싸피 프로젝트 1</div>
                    <div className={style.project}>싸피 프로젝트 2</div>
                </div>
            </div>
        </div>
    );
};

export default Project;
