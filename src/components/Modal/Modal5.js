import style from "./../../styles/Project.module.css";
import React, { useState } from "react";
import Modal from "react-modal";
import ModalStyle from "../../styles/ModalStyle";

import img from "../../img/핏메이트.png";

// 캐러셀
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "./data3";

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
                    <h1>핏메이트</h1>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>간단 소개</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>스타일리스트 고객 매칭 서비스</p>
                    </div>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>개발기간</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>22.02 ~ 22.03</p>
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
                        <p>#Vue #Bootstrap </p>
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
                                <h1>핏메이트</h1>
                            </div>
                            <div className={style.inner_intro}>
                                <div className={style.main_description}>
                                    {" "}
                                    그런 생각해 본 적 없나요? ‘내일 출근할 때 뭐 입고 가지?’,
                                    ‘여행갈 때 뭐 입지?’ 등등... 패알못이지만 가끔 차려입고 가고
                                    싶은 날이 있잖아요. 그렇지만 어떻게 입어야 할 지 도무지
                                    모르겠고... 그럴 때면 ‘나를 위한 스타일리스트가 있었으면...’
                                    하고 생각하게 되죠. 그래서 준비해봤어요. <br /> “스타일리스트
                                    매칭 서비스!”
                                </div>
                                <div className={style.sub_description}>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>주요기능</div>
                                        <div className={style.projects_value}>
                                            이미지 업로드 및 글 작성, 팔로우 기능,
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>FrontEnd</div>
                                        <div className={style.projects_value}>Vue, Vuex</div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>BackEnd</div>
                                        <div className={style.projects_value}>
                                            Spring Boot, Swagger
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>DataBase</div>
                                        <div className={style.projects_value}>MySQL</div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>Deployment</div>
                                        <div className={style.projects_value}>
                                            AWS(EC2, NGINX, Docker, Jenkins)
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>URL</div>
                                        <div className={style.projects_value}>
                                            <a href="https://github.com/dtc03003/project1">
                                                https://github.com/dtc03003/project1
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
