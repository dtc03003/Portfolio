/* css import */
import style from "./../styles/Project.module.css";
import React, { useState } from "react";
import Modal from "react-modal";

const Project = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className={style.Project}>
            <div className={style.inner}>
                <h1>My Project</h1>
                <div className={style.projects}>
                    <div className={style.project}>
                        <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
                        포트폴리오
                        <Modal
                            isOpen={modalIsOpen}
                            ariaHideApp={false}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(255, 255, 255, 0.75)",
                                },
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
                            }}
                        >
                            This is Modal content
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
