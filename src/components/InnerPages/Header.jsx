import React from "react";

function Header({ data, subBg }) {
  return (
    <header
      className={`page-header section-padding pb-0 ${subBg ? "sub-bg" : ""}`}
    >
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h1 className="sub-title">{data.subTitle}</h1>
              <h2 className="fz-55">{data.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 offset-lg-4">
            <div className="text mt-30">
              <p>
                We are always ready to offer a personalized approach to each
                project, taking into account the needs and requirements of our
                clients. We use advanced technologies and development methods to
                create products that meet the highest quality standards.
                Technologies and development methods to create products that
                meet the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {new Array(5).fill().map((_, i) => (
              <div className="item" key={i}>
                <h4>{data.text}</h4>
              </div>
            ))}
          </div>
          <div className="box">
            {new Array(5).fill().map((_, i) => (
              <div className="item" key={i}>
                <h4>{data.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
