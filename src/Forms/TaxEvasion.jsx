import React, { useState, useEffect, useContext } from "react";
import { Trans } from "../App.js";
import axios from "axios";

export default function TaxEvasion() {
  const { content } = useContext(Trans);

  const [yourName, setYourName] = useState("");
  const [yourAddress, setYourAddress] = useState("");
  const [yourNumber, setYourNumber] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [tinNumber, setTinNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("taxevasion");
  const [type, setType] = useState("Picture");
  const [evasion, setEvasion] = useState("Underreporting Income");
  const [info, setInfo] = useState([]);

  const [yournameError, setYourNameError] = useState(false);
  const [yourAddressError, setYourAddressError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const currentDate = new Date().toISOString().split("T")[0];

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const handleEvasion = (e) => {
    setEvasion(e.target.value);
  };

  const handleUpload = async () => {
    if (yourName.trim() === "") {
      setYourNameError(true);
    } else {
      setYourNameError(false);
    }

    if (yourAddress.trim() === "") {
      setYourAddressError(true);
    } else {
      setYourAddressError(false);
    }

    if (yourNumber.trim() === "") {
      setNumberError(true);
    } else {
      setNumberError(false);
    }

    if (comment.trim() === "") {
      setCommentError(true);
    } else {
      setCommentError(false);
    }

    if (date.trim() === "") {
      setDateError(true);
    } else {
      setDateError(false);
    }

    if (name.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (address.trim() === "") {
      setAddressError(true);
    } else {
      setAddressError(false);
    }

    if (image === null) {
      setImageError(true);
    } else {
      setImageError(false);
    }

    try {
      const formData = new FormData();
      formData.append("yourname", yourName);
      formData.append("youraddress", yourAddress);
      formData.append("yournumber", yourNumber);
      formData.append("youremail", yourEmail);
      formData.append("tinnumber", tinNumber);
      formData.append("name", name);
      formData.append("address", address);
      formData.append("number", number);
      formData.append("email", email);
      formData.append("comment", comment);
      formData.append("date", date);
      formData.append("title", title);
      formData.append("image", image);
      formData.append("type", type);
      formData.append("evasion", evasion);

      await axios.post("http://localhost:3100/taxevasion", formData);

      setYourName("");
      setYourAddress("");
      setYourNumber("");
      setYourEmail("");
      setTinNumber("");
      setName("");
      setAddress("");
      setNumber("");
      setEmail("");
      setComment("");
      setDate("");
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <div className="main  ">
          <div className=" relative columns-1">
            <h1 className="Formh1">{content.YourDetails}</h1>
            <hr className="my-2" />
            <div className="firstForm">
              <label className="formLabel my-4">{content.YourFullName}</label>
              <div>
                <input
                  type="text"
                  required
                  value={yourName}
                  className="input"
                  onChange={(e) => {
                    setYourName(e.target.value);
                  }}
                  name="yourname"
                  placeholder={content.YourFullNamee}
                />
                {yournameError && (
                  <p className="error ">{content.erroryname}.</p>
                )}
              </div>
              <label className="formLabel my-4">{content.YourAddress}</label>
              <div>
                <input
                  value={yourAddress}
                  type="text"
                  required
                  className="input"
                  onChange={(e) => {
                    setYourAddress(e.target.value);
                  }}
                  name="youraddress"
                  placeholder={content.YourAddress}
                />
                {yourAddressError && (
                  <p className="error">{content.erroryadd}.</p>
                )}
              </div>
              <label className="formLabel my-4">
                {content.YourPhoneNumber}
              </label>
              <div>
                <input
                  value={yourNumber}
                  type="tel"
                  required
                  className="input"
                  onChange={(e) => {
                    setYourNumber(e.target.value);
                  }}
                  name="yournumber"
                  placeholder={content.YourPhoneNumber}
                />
                {numberError && <p className="error">{content.erroryadd}.</p>}
              </div>
              <label className="formLabel my-4">
                {content.YourEmailAddress}
              </label>
              <div>
                <input
                  value={yourEmail}
                  type="email"
                  required
                  className="input"
                  onChange={(e) => {
                    setYourEmail(e.target.value);
                  }}
                  name="youremail"
                  placeholder={content.YourEmailAddress}
                />
              </div>
              <label className="formLabel my-4">
                {content.YourTinNumberOptional}
              </label>
              <div>
                <input
                  value={tinNumber}
                  min={0}
                  type="number"
                  className="input"
                  onChange={(e) => {
                    setTinNumber(e.target.value);
                  }}
                  onKeyPress={(event) => {
                    const keyCode = event.keyCode || event.which;
                    // Disallow typing the negative sign ("-")
                    if (keyCode === 45) {
                      event.preventDefault();
                    }
                  }}
                  name="tinnumber"
                  placeholder={content.YourTinNumberOptional}
                />
              </div>
            </div>
          </div>
          <br />
          <h1 className="Formh1">{content.person_companydetails}</h1>
          <hr className="my-2" />
          <div className="firstForm">
            <label className="formLabel ">{content.person_companyname}dfgh</label>
            <div>
              <input
                value={name}
                type="text"
                required
                className="input"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                placeholder={content.name}
              />
              {nameError && <p className="error ">{content.errorname}.</p>}
            </div>
            <label className="formLabel">{content.person_companyaddress}</label>
            <div>
              <input
                value={address}
                type="text"
                required
                className="input"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                name="address"
                placeholder={content.address}
              />
              {addressError && <p className="error ">{content.erroradd}.</p>}
            </div>
            <label className="formLabel">{content.ContactInformation}</label>
            <div>
              <input
                value={number}
                type="tel"
                className="input mr-2"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                placeholder={content.number}
                name="number"
              />
              <input
                value={email}
                type="email"
                className="input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                placeholder={content.email}
              />
            </div>

            <label className="formLabel">{content.taxevasiontype}</label>
            <div className="my-4">
              <select
                onChange={handleEvasion}
                className="border-gray-300 border-2 w-48  rounded-md h-10 p-1"
              >
                <option value="Underreporting Income">
                  Underreporting Income
                </option>
                <option value="Offshore Tax Evasion">
                  Offshore Tax Evasion
                </option>
                <option value="Unreported or Underreported Sales">
                  Unreported or Underreported Sales
                </option>
                <option value="Employment Tax Evasion">
                  Employment Tax Evasion
                </option>
                <option value="False Deductions and Expenses">
                  False Deductions and Expenses
                </option>
              </select>
            </div>
          </div>
          <br />
          <h1 className="Formh1">{content.DetailsabouttheIncident} </h1>
          <hr className="my-2" />
          <div className="firstForm">
            <label className="formLabel">{content.describe}</label>
            <div>
              <textarea
                value={comment}
                required
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                className="border-gray-300  border-2 resize-3 w-80 h-10 rounded p-1"
                placeholder={content.describe}
                name="comment"
              />
              {commentError && <p className="error">{content.errorcom}.</p>}
            </div>
            <label className="formLabel">{content.date}</label>
            <div>
              <input
                required
                max={currentDate}
                type="date"
                className="input"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                name="date"
              />
              {dateError && <p className="error">{content.errordate}.</p>}
            </div>

            <label className="formLabel">{content.proff}</label>
            <div>
              <input
                className="input"
                type="file"
                name="file"
                onChange={handleFileChange}
              />
              {imageError && <p className="error">{content.proff}.</p>}
            </div>
          </div>
          <button type="submit" className="btn" onClick={handleUpload}>
            {content.Submit}
          </button>
        </div>
      </div>
    </div>
  );
}
