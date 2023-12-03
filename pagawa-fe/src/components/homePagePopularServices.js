import Image from "next/image";

export default function homePagePopularServices() {
  return (
    <>
      <div>
        <p className="fs-1 fw-bold textPrimary text-center pt-5">
          Popular Services
        </p>
        <div className="card-container d-flex flex-column justify-content-center d-lg-flex flex-lg-row w-75 mx-auto">
          <div
            className="card shadow text-center mb-5 mx-auto"
            style={{ width: "16rem" }}
          >
            <div className="card-img-top">
              <Image
                className="p-3"
                src="/popular-1.png"
                fill={true}
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Development & IT</h5>
              <p className="card-text">
                Software Engineer, Web / Mobile Developer & More
              </p>
              <a href="#" className="btn btn-primary">
                Pagawa
              </a>
            </div>
          </div>
          <div
            className="card shadow text-center mb-5 mx-auto"
            style={{ width: "16rem" }}
          >
            <div className="card-img-top">
              <Image
                className="p-3"
                src="/popular-1.png"
                fill={true}
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Development & IT</h5>
              <p className="card-text">
                Software Engineer, Web / Mobile Developer & More
              </p>
              <a href="#" className="btn btn-primary">
                Pagawa
              </a>
            </div>
          </div>
          <div
            className="card shadow text-center mb-5 mx-auto"
            style={{ width: "16rem" }}
          >
            <div className="card-img-top">
              <Image
                className="p-3"
                src="/popular-1.png"
                fill={true}
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Development & IT</h5>
              <p className="card-text">
                Software Engineer, Web / Mobile Developer & More
              </p>
              <a href="#" className="btn btn-primary">
                Pagawa
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
