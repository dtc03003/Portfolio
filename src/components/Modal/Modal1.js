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
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
                                대충 작품설명
                                <br />
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
