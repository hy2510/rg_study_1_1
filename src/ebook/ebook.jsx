import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ico_home from "../assets/images/ebook/ico_home.svg";
import ico_chev_white_left from "../assets/images/ebook/ico_chev_white_left.svg";
import ico_chev_white_right from "../assets/images/ebook/ico_chev_white_right.svg";
import ico_full_size from "../assets/images/ebook/ico_full_size.svg";
import ico_setting from "../assets/images/ebook/ico_setting.svg";
import img_movie from "../assets/images/ebook/img_movie.svg";
import img_play from "../assets/images/ebook/img_play.svg";
import img_rec from "../assets/images/ebook/img_rec.svg";
import img_story from "../assets/images/ebook/img_story.svg";
import img_study from "../assets/images/ebook/img_study.svg";
import img_word from "../assets/images/ebook/img_word.svg";
import {
  EbKa001Page1,
  EbKa001Page2,
  EbKa001Page3,
  EbKa001Page4,
  EbKa001Page5,
  EbKa001Page6,
} from "./sample/sampleEbKa001";

export default function EBook() {
  // eBook 페이지 이미지 불러오기
  const pageImage = [
    "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-1.jpg",
    "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-2.jpg",
    "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-3.jpg",
    "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-4.jpg",
    "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-5.jpg",
    "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-6.jpg",
    "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-7.jpg",
    "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-8.jpg",
  ];
  function preloading(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let pageImg = new Image();
      pageImg.src = arr[i];
    }
  }
  preloading(pageImage);

  // eBook 사이즈 계산하기
  const windowHeight = window.innerHeight;
  const eBookPageImg = new Image();
  eBookPageImg.src = pageImage[0];
  eBookPageImg.onload = () => {
    _pageWidth(eBookPageImg.width);
    _pageHeight(eBookPageImg.height);
    _resize("");
    _pagesScale((windowHeight / pageHeight) * 0.88);
  };
  const [pageWidth, _pageWidth] = useState();
  const [pageHeight, _pageHeight] = useState();
  const [resize, _resize] = useState();
  const [pagesScale, _pagesScale] = useState();
  const [eBookRightButton, _eBookRightButton] = useState("");
  const [eBookLeftButton, _eBookLeftButton] = useState("");
  useEffect(() => {
    window.addEventListener("resize", () => {
      _pageWidth(eBookPageImg.width);
      _pageHeight(eBookPageImg.height);
      _resize(1);
    });
    if (pageNumber == 1) {
      _eBookLeftButton("d-none");
    } else {
      _eBookLeftButton("");
    }
    if (pageNumber == pageImage.length - 1) {
      _eBookRightButton("d-none");
    } else {
      _eBookRightButton("");
    }
  });

  // eBook 페이지 넘기기 기능
  const [pageNumber, _pageNumber] = useState(1);
  const [pageAniFX, _pageAniFX] = useState();
  const turnPageRight = () => {
    console.log(pageNumber);
    if (pageNumber < pageImage.length - 1) {
      _pageAniFX("");
      setTimeout(() => {
        _pageAniFX("slide-in-right");
        _pageNumber(pageNumber + 2);
      }, 200);
    } else {
      return;
    }
  };
  const turnPageLeft = () => {
    if (pageNumber > 1) {
      _pageAniFX("");
      setTimeout(() => {
        _pageAniFX("slide-in-left");
        _pageNumber(pageNumber - 2);
      }, 200);
    } else {
      return;
    }
  };

  // 모바일 기기 감지
  function IsMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  useEffect(() => {
    if (IsMobile()) {
      console.log("모바일이네");
    } else {
      console.log("모바일이 아니네");
    }
    if (window.matchMedia("(orientation: portrait)").matches) {
      console.log("세로네");
    } else {
      console.log("세로가 아니라 가로네");
    }
  });

  return (
    <div
      className="ebook-bg"
      style={{
        backgroundImage: `url("https://wcfresource.a1edu.com/newsystem/image/br/bgebook/london-2.jpg")`,
      }}
    >
      <div className="bg-blur">
        <div id="ebook" style={{ width: pageWidth * pagesScale * 2 }}>
          <div className="ebook-header">
            <div className="home-button">
              <button>
                <img src={ico_home} alt="" />
              </button>
            </div>
            <div className="book-code">KA-001</div>
            <div className="book-title">Alligator's Apples</div>
          </div>
          <EBookContentsPc
            pageImage={pageImage}
            pageWidth={pageWidth}
            pageHeight={pageHeight}
            pagesScale={pagesScale}
            turnPageRight={turnPageRight}
            pageNumber={pageNumber}
            pageAniFX={pageAniFX}
            turnPageLeft={turnPageLeft}
          />
        </div>
      </div>
    </div>
  );
}

// eBook 콘텐츠 PC 버전
function EBookContentsPc(props) {
  const pageImage = props.pageImage;
  const pageWidth = props.pageWidth * props.pagesScale;
  const pageHeight = props.pageHeight * props.pagesScale;
  const pagesScale = props.pagesScale;
  const turnPageRight = props.turnPageRight;
  const turnPageLeft = props.turnPageLeft;
  const pageNumber = props.pageNumber;
  const pageAniFX = props.pageAniFX;

  return (
    <>
      <div className="ebook-body">
        <div className="pages">
          <div
            className="page"
            style={{
              width: pageWidth,
              height: pageHeight,
            }}
          >
            <div
              style={{
                transform: `scale(${pagesScale})`,
                transformOrigin: "top left",
              }}
            >
              <EbKa001Page1 />
            </div>
            <img src={pageImage[pageNumber - 1]} alt="" />
          </div>
          <div
            className="page"
            style={{
              width: pageWidth,
              height: pageHeight,
            }}
          >
            <div
              style={{
                transform: `scale(${pagesScale})`,
                transformOrigin: "top left",
              }}
            >
              <EbKa001Page2 />
            </div>
            <img src={pageImage[pageNumber]} alt="" />
          </div>
        </div>
      </div>
      <div className="ebook-controller">
        <div className="left-button">
          <button
            onClick={() => {
              turnPageLeft();
            }}
          >
            <img src={ico_chev_white_left} alt="" />
          </button>
        </div>
        <div className="right-button">
          <button
            onClick={() => {
              turnPageRight();
            }}
          >
            <img src={ico_chev_white_right} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

// eBook 콘텐츠 모바일 버전
function EBookContentsMobile() {
  return <></>;
}
