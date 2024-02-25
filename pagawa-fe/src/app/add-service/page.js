"use client";

import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./page.module.css";
import { get, post } from "aws-amplify/api/server";
import { onSubmit } from "../server-comp/serviceSubmitForm";
import ImageUpload from "../../components/imageUpload";
import { useState } from "react";

export default function page() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectFormImage, setselectFormImage] = useState([]);

  console.log(selectedImages);
  const onSubmitWithImages = onSubmit.bind(setselectFormImage, selectFormImage);

  const displaySelectedImages = (event) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const newFormImages = new FormData();
      const newImages = [];

      for (let index = 0; index < fileInput.files.length; index++) {
        const file = fileInput.files[index];
        const fileId = Math.random().toString(36).substr(2, 9);

        newFormImages.append(`file${index}`, file, `file_${fileId}.jpg`);

        newImages.push({
          id: fileId,
          src: URL.createObjectURL(file),
        });
      }

      setselectFormImage((prevFormImages) => [
        ...prevFormImages,
        newFormImages,
      ]);

      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const removeImage = (id) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image) => image.id !== id)
    );
  };
  return (
    <>
      <Navbar className="mb-5" />

      <div className="bg-alt">
        <div className={`${styles.width90}  mx-auto pt-5`}>
          <p className="fs-3 fw-bold">Add Services</p>
        </div>
        <form action={onSubmitWithImages}>
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
              <div>
                <div className="mb-4 d-flex justify-content-center">
                  {selectedImages.map((image) => (
                    <div
                      key={image.id}
                      style={{ position: "relative", marginRight: "5px" }}
                    >
                      <img
                        src={image.src}
                        alt="selected"
                        style={{ width: "100px" }}
                      />
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                        }}
                        onClick={() => removeImage(image.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-center">
                  <div className="btn btn-primary btn-rounded">
                    <label
                      className="form-label text-white m-1"
                      htmlFor={`customFile-selectedImage`}
                    >
                      Choose files
                    </label>
                    <input
                      type="file"
                      className="form-control d-none"
                      id={`customFile-selectedImage`}
                      onChange={(event) => displaySelectedImages(event)}
                      multiple
                      name="image"
                    />
                  </div>
                </div>
              </div>
              <div></div>
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
