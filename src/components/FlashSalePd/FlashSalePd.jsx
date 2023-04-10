import React, { useState } from "react";
import "./FlashSalePd.css";
import ledTv1 from "../../assets/images/led_tv1.png";
import eyeIcon from "../../assets/images/Eye.png";
import heartIcon from "../../assets/images/heart.svg";
import upDownIcon from "../../assets/images/up-and-down.svg";
import chair1 from "../../assets/images/chair1.png";
import chair2 from "../../assets/images/chair2.png";
import chair3 from "../../assets/images/chair3.png";
import adImg from "../../assets/images/add_img.png";

const FlashSalePd = () => {
  const products = [
    {
      id: 1,
      catagory: "Smart TV",
      tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      newPrice: "2036",
      oldPrice: "3000",
      type: "Sale",
    },
    {
      id: 2,
      catagory: "Smart TV",
      tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      newPrice: "2036",
      oldPrice: "3000",
      type: "Sale",
    },
    {
      id: 3,
      catagory: "Smart TV",
      tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      newPrice: "2036",
      oldPrice: "3000",
      type: "Sale",
    },
    {
      id: 4,
      catagory: "Smart TV",
      tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      newPrice: "2036",
      oldPrice: "3000",
      type: "Sale",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [chair1, chair2, chair3];

  const handleClickDot = (index) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="custom_container">
      <div className="section">
        <div className="row">
          <div className="col-md-10">
            <div className="tittlebar">
              <h2>
                <strong>Flash</strong> Sale Product
              </h2>
            </div>
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-6">
                  <div className="single_product">
                    <div>
                      <span className="product_type">{product.type}</span>
                    </div>
                    <div>
                      <img className="main_img" src={ledTv1} alt="img" />
                    </div>

                    <div className="carousel">
                      <div className="image-container">
                        {images.map((image, index) => (
                          <img
                            key={index}
                            className={index === currentSlide ? "active" : ""}
                            src={image}
                            alt={`Slide ${index + 1}`}
                          />
                        ))}
                      </div>
                      <div className="dot-container">
                        {images.map((_, index) => (
                          <span
                            key={index}
                            className={index === currentSlide ? "active" : ""}
                            onClick={() => handleClickDot(index)}
                          />
                        ))}
                      </div>
                      <button className="prev-arrow" onClick={handlePrevSlide}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            d="M4.785 2.965 1.75 6l3.035 3.035M10.25 6H1.835"
                          />
                        </svg>
                      </button>
                      <button className="next-arrow" onClick={handleNextSlide}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            d="M7.215 2.965 10.25 6 7.215 9.035M1.75 6h8.415"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="single_product_info">
                      <p className="pd_cat">{product.catagory}</p>
                      <h6 className="pd_tittle">{product.tittle}</h6>
                      <div className="rating">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <path
                              fill="#F6C441"
                              d="m11.681 4.29-3.688-.565L6.339.198c-.123-.264-.555-.264-.678 0L4.008 3.725l-3.69.564a.376.376 0 0 0-.21.634l2.68 2.75-.634 3.89c-.05.309.279.54.551.389L6 10.128l3.295 1.825c.27.15.603-.078.552-.39l-.634-3.889 2.68-2.75a.376.376 0 0 0-.212-.635Z"
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <path
                              fill="#F6C441"
                              d="m11.681 4.29-3.688-.565L6.339.198c-.123-.264-.555-.264-.678 0L4.008 3.725l-3.69.564a.376.376 0 0 0-.21.634l2.68 2.75-.634 3.89c-.05.309.279.54.551.389L6 10.128l3.295 1.825c.27.15.603-.078.552-.39l-.634-3.889 2.68-2.75a.376.376 0 0 0-.212-.635Z"
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <path
                              fill="#F6C441"
                              d="m11.681 4.29-3.688-.565L6.339.198c-.123-.264-.555-.264-.678 0L4.008 3.725l-3.69.564a.376.376 0 0 0-.21.634l2.68 2.75-.634 3.89c-.05.309.279.54.551.389L6 10.128l3.295 1.825c.27.15.603-.078.552-.39l-.634-3.889 2.68-2.75a.376.376 0 0 0-.212-.635Z"
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <path
                              fill="#F6C441"
                              d="m11.681 4.29-3.688-.565L6.339.198c-.123-.264-.555-.264-.678 0L4.008 3.725l-3.69.564a.376.376 0 0 0-.21.634l2.68 2.75-.634 3.89c-.05.309.279.54.551.389L6 10.128l3.295 1.825c.27.15.603-.078.552-.39l-.634-3.889 2.68-2.75a.376.376 0 0 0-.212-.635Z"
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <path
                              fill="#F6C441"
                              d="m11.681 4.29-3.688-.565L6.339.198c-.123-.264-.555-.264-.678 0L4.008 3.725l-3.69.564a.376.376 0 0 0-.21.634l2.68 2.75-.634 3.89c-.05.309.279.54.551.389L6 10.128l3.295 1.825c.27.15.603-.078.552-.39l-.634-3.889 2.68-2.75a.376.376 0 0 0-.212-.635Z"
                            />
                          </svg>
                        </span>
                        <span className="rate">(5.0)</span>
                      </div>
                      <div className="price">
                        <span className="new_price">
                          ${product.newPrice}.00
                        </span>{" "}
                        <span className="old_price">
                          ${product.oldPrice}.00
                        </span>
                      </div>
                      <div className="icon_part row">
                        <div className="col-4 d-flex justify-content-center">
                          {" "}
                          <img src={eyeIcon} alt="" />
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                          {" "}
                          <img src={heartIcon} alt="" />
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                          {" "}
                          <img src={upDownIcon} alt="" />
                        </div>
                      </div>
                      <button className="add_btn">
                        <span className="btn_text">Add To Cart</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            fill="none"
                            viewBox="0 0 17 17"
                          >
                            <g clip-path="url(#a)">
                              <path
                                stroke="#5B9982"
                                stroke-width="1.4"
                                d="M2.688 8.52c.38-1.902.57-2.853 1.199-3.466.116-.113.242-.216.376-.308.724-.496 1.694-.496 3.634-.496h1.206c1.94 0 2.91 0 3.634.496.134.092.26.195.376.308.629.613.819 1.564 1.2 3.467.546 2.731.819 4.097.19 5.064a2.831 2.831 0 0 1-.396.484c-.826.806-2.218.806-5.004.806H7.897c-2.786 0-4.178 0-5.004-.806a2.834 2.834 0 0 1-.396-.484c-.629-.967-.356-2.333.19-5.064Z"
                              />
                              <circle
                                cx="10.625"
                                cy="7.438"
                                r=".708"
                                fill="#5B9982"
                              />
                              <circle
                                cx="6.375"
                                cy="7.438"
                                r=".708"
                                fill="#5B9982"
                              />
                              <path
                                stroke="#5B9982"
                                stroke-linecap="round"
                                stroke-width="1.4"
                                d="M6.375 4.25v-.708a2.125 2.125 0 1 1 4.25 0v.708"
                              />
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h17v17H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-2">
            <img className="img-fluid ad-img" src={adImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSalePd;
