import "bootstrap/dist/css/bootstrap.css";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import HomePagePopularServices from "@/components/homePagePopularServices";
import HomepageExploreTalent from "@/components/homepageExploreTalent";
import HomePageContent2 from "@/components/homePageContent2";
import HomePageContent3 from "@/components/homePageContent3";

export default function page() {
  return (
    <>
      <div>
        <div className=" ">
          <div className={`${styles.bg} mb-0`}>
            <Navbar className="mb-5" />

            <div className={`container p-4`}>
              <div className={styles.homePageContent1}>
                <div className="mt-2">
                  <h1 className="textPrimary fw-bold">Elevate Your projects</h1>
                  <h1 className="textPrimary fw-bold">with Filipino Skills</h1>

                  <h4 className="textPrimary">
                    Explore <span className="fw-bold">Pagawa</span> Today
                  </h4>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control p-3 w-50"
                    placeholder="What are you looking for?"
                    aria-label="Username"
                  />
                  <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Select Role"
                    aria-label="Server"
                  />
                  <span className="input-group-text ">
                    <i className="bi bi-caret-down-fill"></i>
                  </span>
                  <button className="btn btn-primary mt-2 mt-lg-0">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-content-bg-2">
            <HomePagePopularServices />
            <HomepageExploreTalent />
          </div>

          <HomePageContent2 />
          <HomePageContent3 />
        </div>
      </div>
    </>
  );
}
