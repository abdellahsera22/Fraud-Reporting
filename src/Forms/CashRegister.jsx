import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "./Header";
import { Trans } from "../App.js";

export default function CashRegister() {
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
  const [title, setTitle] = useState("cashregister");
  const [type, setType] = useState("Picture");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeRole, setEmployeeRole] = useState("");
  const [employeeDescription, setEmployeeDescription] = useState("");
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
      formData.append("employeename", employeeName);
      formData.append("employeeRole", employeeRole);
      formData.append("employeedescription", employeeDescription);

      await axios.post("http://localhost:3100/cashregister", formData);

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
      setEmployeeName("");
      setEmployeeRole("");
      setEmployeeDescription("");
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <Header></Header>
      <div>
        <div className="main ">
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
                  placeholder="Full Name"
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
                  placeholder="Address"
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
                  placeholder="Phone Number"
                />
                {numberError && <p className="error">{content.errorynum}.</p>}
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
                  placeholder="Email"
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
                  placeholder="TinNumber"
                />
              </div>
            </div>
          </div>
          <br />
          <h1 className="Formh1">{content.person_companydetails}</h1>
          <hr className="my-2" />
          <div className="firstForm">
            <label className="formLabel ">{content.person_companyname}</label>
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
          </div>
          <div>
            <h1 className="Formh1">{content.employeedetails}</h1>
            <hr className="my-2" />
          </div>
          <div className="firstForm">
            <label className="formLabel">{content.EmployeeName}</label>
            <div>
              <input
                type="text"
                value={employeeName}
                className="input"
                placeholder="Employee Name"
                onChange={(e) => {
                  setEmployeeName(e.target.value);
                }}
              />
            </div>
            <label className="formLabel">{content.employyerole}</label>
            <div>
              <input
                type="text"
                value={employeeRole}
                className="input"
                placeholder="Job or Role"
                onChange={(e) => {
                  setEmployeeRole(e.target.value);
                }}
              />
            </div>
            <label className="formLabel">{content.employeemore}</label>
            <div>
              <textarea
                value={employeeDescription}
                className="border-gray-300  border-2 resize-3 w-80 h-10 rounded p-1 mt-7"
                placeholder="Describe them..."
                onChange={(e) => {
                  setEmployeeDescription(e.target.value);
                }}
              />
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

            <label className="formLabel">{content.errordate}</label>
            <div>
              <input
                className="input"
                type="file"
                name="file"
                onChange={handleFileChange}
              />
              {imageError && <p className="error">{content.errorproff}.</p>}
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
