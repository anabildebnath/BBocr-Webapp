import classes from "../styles/Converter.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/1.svg";
import image2 from "../assets/2.svg";
import image3 from "../assets/3.svg";
import image4 from "../assets/4.svg";
import image5 from "../assets/5.svg";
import image6 from "../assets/6.svg";
import convertImage from "../assets/convert.svg";

export default function Converter(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={classes.converter}>
      <div className={classes.converterHeading}>
        <h1>{props.heading}</h1>
      </div>
      <div className={classes.converterBox}>
        <div className={classes.converterBox2}>
          <div className={classes.mainSvg}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 60">
              <path d="m56.936.888 30.189 1.054 7.998 8.577-1.473 42.182a2.5 2.5 0 0 1-2.421 2.411h-.165L69 54.341V58a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2v-3.731l-24.064.84a2.5 2.5 0 0 1-2.575-2.247l-.011-.164L.675 4.728a2.5 2.5 0 0 1 2.247-2.575l.164-.011 30.189-1.054 7.242 6.753-.149.159h13.817l.165-4.7A2.5 2.5 0 0 1 56.771.887zM59.999 9H31a1 1 0 0 0-.993.883L30 10v29h20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H30v6a1 1 0 0 0 .883.993L31 59h36a1 1 0 0 0 .993-.883L68 58V17h-8zm-3.098-7.113a1.5 1.5 0 0 0-1.54 1.303l-.012.144L55.186 8H61l8 8v9.629a10.46 10.46 0 0 1 5.122-1.13c5.796.202 10.33 5.064 10.127 10.86s-5.064 10.329-10.86 10.126a10.5 10.5 0 0 1-4.39-1.13v8.986l22.1.772a1.5 1.5 0 0 0 1.54-1.303l.012-.144 1.428-40.975-7.493-.262-1-.035.297-8.496zm-24.799.24L3.121 3.142a1.5 1.5 0 0 0-1.445 1.407l-.002.145 1.675 47.97a1.5 1.5 0 0 0 1.407 1.445l.145.002 24.098-.841V52H28a1 1 0 0 1-1-1v-6.165l-7.405.258v.001l-1 .035-4.996.174-1 .036-.733-20.988L29 23.753V10a2 2 0 0 1 2-2h1.307zM59 50v1h-6v-1zm-26.685-8H30v7h1.303v-2.569h1.057c1.584 0 2.797-.717 2.797-2.269 0-1.627-1.213-2.162-2.842-2.162m6.19 0H36.54v7h2.034c2.18 0 3.506-1.21 3.506-3.532 0-2.312-1.326-3.468-3.573-3.468M48 42h-4.438v7h1.303v-2.922h2.674v-1.049h-2.674v-1.98H48zm-9.584 1.006c1.483 0 2.326.75 2.326 2.462 0 1.654-.777 2.46-2.151 2.522l-.175.004h-.573v-4.988zM59 45v1h-6v-1zm-26.787-2.005c1.09 0 1.663.29 1.663 1.167 0 .806-.467 1.223-1.431 1.27l-.187.004h-.955v-2.44zm36.814-16.244-.028.016v16.45a9.46 9.46 0 0 0 4.425 1.27c4.905.17 9.07-3.408 9.739-8.162l-9.442-.33.366-10.497a9.45 9.45 0 0 0-5.06 1.253M18.42 40.132l-4.997.175.14 3.996 4.997-.174zm8.593-.3-7.593.265.14 3.997 7.438-.26L27 40q0-.086.014-.168M59 40v1h-6v-1zm-40.753-4.865-4.997.175.14 3.997 4.996-.174zm10.752-.376-9.753.341.14 3.998 9.613-.336zM59 35v1H39v-1zm-40.928-4.862-4.997.175.14 3.997 4.997-.174zM29 29.756l-9.927.347.14 3.998L29 33.759zM59 30v1H39v-1zm-41.102-4.859-4.997.175.14 3.997 4.996-.174zm11.101-.387-10.102.353.14 3.997 9.962-.348zm32-15.34V16h6.585zm25.875-6.273-.254 7.289 7.29.254zM33.11 2.3l.2 5.7h5.911z"></path>
            </svg>
          </div>
          <div className={classes.converterButtons}>
            <div className={classes.button1}>
              <label htmlFor="fileInput" className={classes.customButton1}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M13 12v-2h1v2h2v1h-2v2h-1v-2h-2v-1zm5 8H6V4H5v17h13zm1 0v2H4V3h2V1h10l5 5v14zM7 2v17h13V6l-4-4zm9 0 4 4h-4z"></path>
                  </svg>
                </div>
                <div className={classes.buttonText}>Choose File</div>
              </label>
              <input id="fileInput" type="file" style={{ display: "none" }} />
            </div>

            <div className={classes.button2}>
              <label
                htmlFor="dropdownButton"
                className={classes.customButton2}
                onClick={toggleDropdown}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.333 4 1.334 1.333L8 12 1.333 5.333 2.667 4 8 9.5z"></path>
                  </svg>
                </div>
              </label>
              {dropdownOpen && (
                <div className={classes.dropdownContent}>
                  <div className={classes.dropRow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 19.002a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7h18zm-18-14a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H20a1 1 0 0 1 1 1v4H3z"></path>
                    </svg>
                    <Link to="/">From device</Link>
                  </div>
                  <div className={classes.dropRow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path fill="#FF46FB" d="M15 15h6v6h-6z"></path>
                      <path fill="#CA41FC" d="M9 15h6v6H9z"></path>
                      <path fill="#8B48FE" d="M3 15h6v6H3z"></path>
                      <path fill="#81E650" d="M21 9h-6v6h6z"></path>
                      <path fill="#00D267" d="M15 9H9v6h6z"></path>
                      <path fill="#00C0FF" d="M9 9H3v6h6z"></path>
                      <path fill="#FFD200" d="M15 3h6v6h-6z"></path>
                      <path fill="#FF8E00" d="M9 3h6v6H9z"></path>
                      <path fill="#FF5400" d="M3 3h6v6H3z"></path>
                    </svg>

                    <Link to="/">From BBocr</Link>
                    <div className={classes.pro}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M5.462 1.09a.6.6 0 0 1 1.076 0l1.086 2.2a.6.6 0 0 0 .452.328l2.427.353a.6.6 0 0 1 .333 1.023L9.079 6.707a.6.6 0 0 0-.173.53l.415 2.419a.6.6 0 0 1-.87.632L6.279 9.147a.6.6 0 0 0-.558 0l-2.172 1.141a.6.6 0 0 1-.87-.632l.415-2.418a.6.6 0 0 0-.173-.531L1.164 4.994a.6.6 0 0 1 .333-1.023l2.427-.353a.6.6 0 0 0 .452-.328z"></path>
                      </svg>
                      Pro
                    </div>
                  </div>
                  <div className={classes.dropRow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0061FF"
                      viewBox="0 0 24 24"
                    >
                      <path d="m12.015 6.574-5.508 3.573 5.508 3.574-5.508 3.574L1 13.69l5.507-3.573L1 6.574 6.507 3zM6.478 18.426l5.507-3.573 5.508 3.573L11.985 22zm5.537-4.735 5.507-3.573-5.507-3.544L17.493 3 23 6.574l-5.507 3.573L23 13.721l-5.507 3.574z"></path>
                    </svg>
                    <Link to="/">From Dropbox</Link>
                  </div>
                  <div className={classes.dropRow}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        fill="#FFC107"
                        d="M8.333 3h7.334L23 15h-7.333z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="m4.601 21 3.7-6H23l-3.667 6z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M1 15.063 4.601 21 12 9 8.333 3z"
                      ></path>
                    </svg>
                    <Link to="/">From Google Drive</Link>
                  </div>
                </div>
              )}
              {/* <input id="fileInput" type="file" style={{ display: "none" }} /> */}
            </div>
          </div>
          <div>
            <p style={{ color: "white" }}>or drop file here</p>
          </div>
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.descriptionParagraph}>
          <p>
            Convert a PNG to Word/HTML online for free. Our converter turns PNGs
            into editable Word/html docs in seconds, without losing quality.
          </p>
        </div>
        <div className={classes.descriptionPoint}>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m-1.591-6.85 5.728-5.727a.9.9 0 0 1 1.272 1.272l-6.293 6.294a1 1 0 0 1-1.414 0L6.59 12.877a.9.9 0 0 1 1.272-1.272z"
                ></path>
              </svg>
              <h1>For Mac, Windows, Linux, iOS, and Android</h1>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m-1.591-6.85 5.728-5.727a.9.9 0 0 1 1.272 1.272l-6.293 6.294a1 1 0 0 1-1.414 0L6.59 12.877a.9.9 0 0 1 1.272-1.272z"
                ></path>
              </svg>
              <h1>Turn your PDF into an editable Word file</h1>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m-1.591-6.85 5.728-5.727a.9.9 0 0 1 1.272 1.272l-6.293 6.294a1 1 0 0 1-1.414 0L6.59 12.877a.9.9 0 0 1 1.272-1.272z"
                ></path>
              </svg>
              <h1>We can also convert scanned PDFs to Word</h1>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.gridParagraph}>
        <div className={classes.gridElement}>
          <img src={image1} alt="" />
          <h1>Quick Conversion Without Sign-up</h1>
          <p>
            You don't need an account or share any information with us to
            convert a PDF to Microsoft Word format. Our converter is free to use
            for everyone and can process your files in a matter of seconds.
          </p>
        </div>
        <div className={classes.gridElement}>
          <img src={image2} alt="" />
          <h1>Safe Document Processing</h1>
          <p>
            We care about file and data privacy. That's why we use TLS
            connections, are GDPR compliant, and ISO/IEC 27001 certified. All
            files are deleted from our servers after one hour. Learn more about
            the privacy here.
          </p>
        </div>
        <div className={classes.gridElement}>
          <img src={image3} alt="" />
          <h1>Convert on Any Operating System</h1>
          <p>
            Our PDF converter works on all computers and operating systems
            including Mac, Windows, and Linux. You can even convert PDF to Word
            on your iOS or Android smartphone or offline with our desktop app.
          </p>
        </div>
        <div className={classes.gridElement}>
          <img src={image4} alt="" />
          <h1>File Conversion Without Losing Quality</h1>
          <p>
            Converting a PDF to Word may seem tricky, but with the right tool,
            it's easy as pie. We’ve partnered with Solid Documents and Abby—the
            best converters on the market for optimal quality.
          </p>
        </div>
        <div className={classes.gridElement}>
          <img src={image5} alt="" />
          <h1>Scanned PDF to DOCX With OCR</h1>
          <p>
            With our OCR (Optical Character Recognition) technology, we can
            extract text from a scanned PDF file and convert it to an editable
            Word document. Test out this Pro feature with a 7-day free trial!
          </p>
        </div>
        <div className={classes.gridElement}>
          <img src={image6} alt="" />
          <h1>Online Conversion of Large Files</h1>
          <p>
            Our PDF to Word converter can deal with files up to 5 GB in size.
            Usually, PDF files don't surpass the Megabyte-range, as it's a
            compressed format. Chances are, our servers can handle anything you
            throw at them.
          </p>
        </div>
      </div>
      <div className={classes.description2}>
        <div className={classes.child}>
          <img src={convertImage} alt="" />
          <div>
            <h2>How To Convert PNG to Html Online for Free:</h2>
            <ol>
              <li>Import or drag & drop your PNG file to our converter.</li>
              <li>Choose “With OCR” for scanned PNGs—this is a Pro feature.</li>
              <li>Click “Convert” and wait just a few seconds.</li>
              <li>Download or share your converted Html file—done!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
