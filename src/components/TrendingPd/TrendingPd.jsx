import React from "react";
import "./TrendingPd.css";
import product1 from "../../assets/images/sweater1.png";
const TrendingPd = () => {
  const products = [
    {
      id: 1,
      catagory: "Fashion",
      catagory_extra: " For Women",
      details: [
        {
          id: 1,
          tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
          newPrice: "2036",
          oldPrice: "3000",
          type: "Sale",
        },
        {
          id: 2,
          tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
          newPrice: "2036",
          oldPrice: "3000",
          type: "Sale",
        },
        {
          id: 3,
          tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
          newPrice: "2036",
          oldPrice: "3000",
          type: "Sale",
        },
      ],
    },
    {
      id: 2,
      catagory: "Fashion",
      catagory_extra: " For Women",
      details: [
        {
          id: 1,
          tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
          newPrice: "2036",
          oldPrice: "3000",
          type: "Sale",
        },
        {
          id: 2,
          tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
          newPrice: "2036",
          oldPrice: "3000",
          type: "Sale",
        },
        {
          id: 3,
          tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
          newPrice: "2036",
          oldPrice: "3000",
          type: "Sale",
        },
      ],
    },
    {
      id: 3,
      catagory: "Fashion",
      catagory_extra: " For Women",
      details: [
        {
          id: 1,
          tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
          newPrice: "2036",
          oldPrice: "3000",
          type: "Sale",
        },
        {
          id: 2,
          tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
          newPrice: "2036",
          oldPrice: "3000",
          type: "Sale",
        },
        {
          id: 3,
          tittle: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
          newPrice: "2036",
          oldPrice: "3000",
          type: "Sale",
        },
      ],
    },
  ];
  return (
    <div className="trending_product">
      <div className="custom_container">
        <div className="tittlebar trending_tittlebar">
          <h2>
            <strong>Trending</strong> Product
          </h2>
        </div>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4">
              <div className="catagory_single">
                <div>
                  <h2>
                    <strong>{product.catagory}</strong> {product.catagory_extra}
                  </h2>
                </div>
                <div className="product_details">
                  {product.details.map((singleInfo) => (
                    <div key={singleInfo.id} className="cat_single_product">
                      <div className="pd_type_div">
                        <span className="product_type">{singleInfo.type}</span>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="single_pd_img">
                            <img src={product1} alt="img" />
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="single_pd_info">
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
                            <h6 className="pd_tittle">{singleInfo.tittle}</h6>
                            <div className="price">
                              <span className="new_price">$2036.00</span>{" "}
                              <span className="old_price">$3000.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="btn btn-dark d-block w-100">
                    View All
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingPd;
