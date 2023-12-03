import styles from "../app/page.module.css";
import Image from "next/image";

export default function homePageContent2() {
  return (
    <>
      <div className="container p-4">
        <div className="d-lg-flex">
          <div>
            <p className="fs-1 text-center fw-bold textPrimary text-lg-start">
              Your gateway to freelance excellence!
            </p>
            <ul className={`list-unstyled ${styles.customList}`}>
              <li className={`${styles.listItem}`}>
                <p className={`fw-bold ${styles.textPrimary} mb-0 fs-4`}>
                  Unlock Talent
                </p>
                <p>
                  Discover our most popular services, featuring skilled
                  freelancers.
                </p>
              </li>
              <li className={`${styles.listItem}`}>
                <p className={`fw-bold ${styles.textPrimary}  mb-0 fs-4`}>
                  Unlock Talent
                </p>
                <p>
                  Discover our most popular services, featuring skilled
                  freelancers.
                </p>
              </li>
              <li className={`${styles.listItem}`}>
                <p className={`fw-bold ${styles.textPrimary}  mb-0 fs-4`}>
                  Unlock Talent
                </p>
                <p>
                  Discover our most popular services, featuring skilled
                  freelancers.
                </p>
              </li>
              <li className={`${styles.listItem}`}>
                <p className={`fw-bold ${styles.textPrimary}  mb-0 fs-4`}>
                  Unlock Talent
                </p>
                <p>
                  Discover our most popular services, featuring skilled
                  freelancers.
                </p>
              </li>
              <li className={`${styles.listItem}`}>
                <p className={`fw-bold ${styles.textPrimary}  mb-0 fs-4`}>
                  Unlock Talent
                </p>
                <p>
                  Discover our most popular services, featuring skilled
                  freelancers.
                </p>
              </li>
            </ul>
          </div>
          <div className="d-none d-lg-block">
            <Image
              className="p-3"
              src="/gateway_pic.png"
              width={600}
              height={500}
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
