import style from "./../../styles/Project.module.css";
import React, { useState } from "react";
import Modal from "react-modal";
import ModalStyle from "../../styles/ModalStyle";

import img from "../../img/S뱅크.png";

// 캐러셀
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "./data4";

// 캐러셀
const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
));

const Modal1 = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }

    return (
        <div
            className={style.project}
            onClick={() => {
                setModalIsOpen(true);
            }}
        >
            <div className={style.out_img} style={{ backgroundImage: `url(${img})` }}></div>
            <div className={style.out_intro}>
                <div className={style.out_title}>
                    <h1>SBANK</h1>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>간단 소개</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>음성인식 인터넷 뱅킹</p>
                    </div>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>개발기간</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>22.03 ~ 22.04</p>
                    </div>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>개발인원</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>6명</p>
                    </div>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>기술</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>#React #Bootstrap </p>
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
                            <div className={style.inner_img}>
                                <Carousel
                                    showArrows={true}
                                    showStatus={false}
                                    showThumbs={false}
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    selectedItem={imageData[currentIndex]}
                                    onChange={handleChange}
                                    width="100%"
                                >
                                    {renderSlides}
                                </Carousel>
                            </div>
                        </div>
                        <div className={style.intro}>
                            <div className={style.title}>
                                <h1>SBANK</h1>
                            </div>
                            <div className={style.inner_intro}>
                                <div className={style.main_description}>
                                    SBank 프로젝트는 디지털 트렌스포메이션의 소외계층(노령층)을 위한
                                    AI 음성 도우미 서비스를 적용한 사이트로 복잡한 은행 사이트를
                                    음성 명령을 통해 쉽게 이용할 수 있도록 제작되었습니다.
                                </div>
                                <div className={style.sub_description}>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>주요 기능</div>
                                        <div className={style.projects_value}>
                                            로그인 회원가입 관리 음성 인식을 통한 페이지 이동 얼굴
                                            인식을 통한 연령별 맞춤 금융 상품 추천 입금, 송금 기능
                                            자신의 소비내역 그래프 확인
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>FrontEnd</div>
                                        <div className={style.projects_value}>React, axios</div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>BackEnd</div>
                                        <div className={style.projects_value}>
                                            Spring Boot, Lombok, fastAPI, pytorch, torchaudio, cuda
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>DataBase</div>
                                        <div className={style.projects_value}>기능 설명</div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>Deployment</div>
                                        <div className={style.projects_value}>
                                            AWS(EC2), Docker, Jenkins
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>GIT</div>
                                        <div className={style.projects_value}>
                                            <a href="https://github.com/dtc03003/project2">
                                                https://github.com/dtc03003/project2
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Modal1;
