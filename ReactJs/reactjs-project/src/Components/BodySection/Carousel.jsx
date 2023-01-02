import React from "react";
import "../BodySection/style.css";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/hd7/hcf/14844211527710/10122019-M-MHP-topbanner-NewArrivals-upto50.jpg"
                className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.ry-xaXpWk4OgjWtw81I_hwAAAA?pid=ImgDet&rs=1"
                className="d-block"
              alt="..."
            />
          </div>
          {/* <div className="carousel-item">
            <img
              src="https://ae01.alicdn.com/kf/HTB1.nwff5CYBuNkHFCcq6AHtVXa9/Summer-Menswear-Business-Casual-short-sleeves-Polo-shirt-men-Striped-cotton-Coat-Youth-Fashion-High-quality.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
