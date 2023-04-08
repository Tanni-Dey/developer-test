import React from "react";
import "./TrendingPd.css";
const TrendingPd = () => {
  return (
    <div>
      <div className="tittlebar">
        <h2>
          <strong>Trending</strong> Product
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="catagory_single">
            <div>
              <h2>
                <span>Fashion</span> For Women
              </h2>
            </div>
            <div className="cat_single_product">
              <div>
                <span className="product_type">Sale</span>
              </div>
              <div className="row">
                <div className="col-3">pr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPd;
