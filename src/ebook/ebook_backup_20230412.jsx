import { useState, useEffect } from "react";
import {
  EbKa001Page1,
  EbKa001Page2,
  EbKa001Page3,
  EbKa001Page4,
  EbKa001Page5,
  EbKa001Page6,
} from "./sample/sampleEbKa001";
import ico_home from "../assets/images/ebook/ico_home.svg";

export default function EBook() {
  const level = "ka-001";
  const bookCode = "eb-ka-001";
  const img = new Image();
  img.src = `https://wcfresource.a1edu.com/newsystem/image/br/eb/${level}/${bookCode}-1.jpg`;
  const width = img.width;
  const height = img.height;
  const maxWidth = 1024;
  const scale = maxWidth / (width * 2);
  let [pageNumber, _pageNumber] = useState(5);
  let [leftImage, _leftImage] = useState();
  useEffect(() => {
    _leftImage(
      `https://wcfresource.a1edu.com/newsystem/image/br/eb/${level}/${bookCode}-${pageNumber}.jpg`
    );
  });

  return (
    <div className="ebook-bg">
      <div id="ebook" style={{ maxWidth: maxWidth }}>
        <div className="ebook-header">
          <div className="home-button">
            <button>
              <img src={ico_home} alt="" />
            </button>
          </div>
          <div className="book-code">KA-001</div>
          <div className="book-title">Alligator's Apples</div>
        </div>
        <div className="ebook-body">
          <div className="page-backward-button">
            <button>B</button>
          </div>
          <div
            className="ebook-contents"
            style={{
              width: "100%",
              maxWidth: width * 2,
              height: height,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <div
              className="page"
              style={{
                backgroundImage: `url(${leftImage})`,
              }}
            >
              <div className="text">
                <EbKa001Page5 />
              </div>
            </div>

            <div
              className="page"
              style={{
                backgroundImage: `url('https://wcfresource.a1edu.com/newsystem/image/br/eb/${level}/${bookCode}-${
                  pageNumber + 1
                }.jpg')`,
              }}
            >
              <div className="text">
                <EbKa001Page6 />
              </div>
            </div>
          </div>
          <div className="page-forward-button">
            <button>N</button>
          </div>
        </div>
      </div>
    </div>
  );
}
