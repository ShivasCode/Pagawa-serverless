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
            <div className="text-center">
              <h1>Login</h1>
              <p>
                Log in to access your account and continue your freelance
                journey with us.
              </p>
            </div>
            <div className={`${styles.containerCard} shadow p-5 mb-5 rounded `}>
              <div className="row">
                <form className={`${styles.loginForm}`}>
                  <p>
                    Don’t have an account?
                    <span className="fw-bold">
                      <Link href="/register"> Sign up</Link>
                    </span>
                  </p>
                  <div>
                    <label>Email</label>
                    <br></br>
                    <input type="text" className="form-control" />
                  </div>
                  <div>
                    <label>Password</label>
                    <br></br>
                    <input type="text" className="form-control" />
                  </div>
                  <div>
                    <label>Confirm password</label>
                    <br></br>
                    <input type="text" className="form-control" />
                  </div>
                  <button className="btn btn-secondary d-block w-75 mx-auto">
                    Sign in
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
