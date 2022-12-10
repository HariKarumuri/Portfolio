import React from "react";
import "./Services.css"

const Services = () => {
  return (
    <>
      <div className="bg2">
        <div className="container  p-3">
          <h6 className="text-white text-center" id="#services">
            services
          </h6>

          <div className="row g-3">
            <div className="col-12 Service_Card">
              
              <img
                src="https://www.arkasoftwares.com/blog/wp-content/uploads/2018/11/header_banner.jpg"
                alt=""
                className="Banner_Services "
              />
              <h3 className="mt-3">Fully Functional Company Page with blog <span class="badge bg_red">live</span> </h3>
              <a href="https://www.startupkt.com/" className="btn primary-green text-white link-btn" target="_blank">visit website</a>
            </div>
            <div className="col-12 Service_Card">
              
              <img
                src="https://www.digitalsochmedia.com/wp-content/uploads/2020/07/Banner-Image.jpg"
                alt=""
                className="Banner_Services "
              />
              <h3 className="mt-3">Ui/Ux designs for clients  </h3>
              <a href="https://drive.google.com/drive/folders/12vKw4Z55vLkdl0aA_5fb73t-YeTjBWEv?usp=sharing" className="btn primary-green text-white link-btn" target="_blank">visit website</a>
            </div>
            <div className="col-12 Service_Card">
              <img
                src="https://beatcolor.com/kontent/uploads/2020/10/Video-editing-services.jpg"
                alt=""
                className="Banner_Services"
              />
              <h3 className="mt-3">Story-Board Video Editing </h3>
              <a href="https://www.youtube.com/@hindumythbusters9702" className="btn primary-green text-white link-btn" target="_blank">click to view</a>
            </div>
            <div className="col-12 Service_Card">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1ebf39108592545.604f75df9f7f0.png"
                alt=""
                className="Banner_Services"
              />
              <h3 className="mt-3">3d Renders for client</h3>
              <a href="https://drive.google.com/drive/folders/1d6oHR96pWRoyTQ7b_EN6WEGdsGRVfDvq?usp=sharing" className="btn primary-green text-white link-btn" target="_blank">click to view</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
