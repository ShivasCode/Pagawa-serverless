import styles from "../app/page.module.css";

export default function homePageContent3() {
  return (
    <>
      <div className={`${styles.bgColorContent3} d-lg-none textSecondary`}>
        <div className="container p-4">
          <div className={`${styles.bgContent3} mb-3`}></div>
          <div className={`${styles.textSecondary} text-start`}>
            <ul className="">
              <p className="fs-2 fw-bold mb-0">
                Join the Pagawa Community, Where
              </p>
              <p className="fs-2 fw-bold">Filipino Talent Shines!</p>
              <li>
                Connect with Filipino freelancers ready to elevate your
                projects.
              </li>
              <li>
                Explore a diverse range of skills and services to meet your
                needs.
              </li>
              <li>
                Experience hassle-free and secure payments on our platform.
              </li>
              <li>
                Discover top-rated freelancers to bring your ideas to life.{" "}
              </li>
              <li>
                Collaborate with talented professionals who understand your
                vision.
              </li>
            </ul>
          </div>
          <button className="btn btn-success">
            Find talent{" "}
            <span>
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
