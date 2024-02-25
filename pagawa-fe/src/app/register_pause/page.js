import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div>
        <Navbar />

        <div className={`${styles.bg}`}>
          <div className="pt-5">
            <divl className="text-center">
              <h1>Join Pagawa</h1>
              <p>
                Create your Pagawa account and dive into a world of freelance
                possibilities.
              </p>
            </divl>
            <div className={`${styles.containerCard} shadow p-5 mb-5 rounded `}>
              <div>
                <p className="text-start">
                  Already have an account?{" "}
                  <span className="fw-bold">
                    <Link href="/login"> Sign in</Link>
                  </span>
                </p>
              </div>
              <div className="row">
                <form className={`${styles.loginForm}`}>
                  <div>
                    <label>Email</label>
                    <br></br>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label>Password</label>
                    <br></br>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label>Confirm password</label>
                    <br></br>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="form-control"
                    />
                  </div>
                  <button className="btn btn-primary d-block w-75 mx-auto">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
