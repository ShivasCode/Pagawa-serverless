"use client";

import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./page.module.css";
import { get, post } from "aws-amplify/api/server";
import { onSubmit } from "../server-comp/serviceSubmitForm";

export default function page() {
  return (
    <>
      <Navbar className="mb-5" />

      <div className="bg-alt">
        <div className={`${styles.width90}  mx-auto pt-5`}>
          <p className="fs-3 fw-bold">Add Services</p>
        </div>
        <form action={onSubmit}>
          <div className={`${styles.width90} card mx-auto`}>
            <div className="card-body">
              <div className="mb-3">
                <p>Service Title</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="I will"
                  name="title"
                />
              </div>
              <div className="mb-3">
                <p>Price</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$10"
                  name="price"
                />
              </div>
              <div className="mb-3">
                <p>Category</p>
                <select className="form-select" name="category">
                  <option value="DEFAULT" disabled>
                    Choose...
                  </option>
                  <option value="1">Graphics & Design</option>
                  <option value="2">Digital Marketing</option>
                  <option value="3">Writing & Translation</option>
                </select>
              </div>
              <div className="mb-3">
                <p>English Level</p>
                <select className="form-select" name="english_level">
                  <option value="DEFAULT" disabled>
                    Choose...
                  </option>
                  <option value="1">Fluent</option>
                  <option value="2">Mid Level</option>
                  <option value="3">Conversational</option>
                </select>
              </div>

              <div className="mb-3">
                <p>Delivery Time</p>
                <select className="form-select" name="delivery">
                  <option value="DEFAULT" disabled>
                    Choose...
                  </option>
                  <option value="1">Delivery Time One</option>
                  <option value="2">Delivery Time One</option>
                  <option value="3">Delivery Time One</option>
                </select>
              </div>
              <div className="mb-3">
                <p>Skills</p>
                <select className="form-select" name="skills">
                  <option value="DEFAULT" disabled>
                    Choose...
                  </option>
                  <option value="1">Figma</option>
                  <option value="2">Adobe</option>
                  <option value="3">CSS</option>
                </select>
              </div>
              <div className="mb-3">
                <p>Country</p>
                <select className="form-select" name="country">
                  <option value="DEFAULT" disabled>
                    Choose...
                  </option>
                  <option value="1">Ph</option>
                  <option value="2">USA</option>
                  <option value="3">UK</option>
                </select>
              </div>
              <div className="mb-3">
                <p>Services Detail</p>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="service_description"
                />
              </div>
              <button type="submit" className="btn btn-primary px-5">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
