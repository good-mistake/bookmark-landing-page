import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Dots } from "./images/bg-dots.svg";
import { ReactComponent as Close } from "./images/icon-close.svg";
import { ReactComponent as Error } from "./images/icon-error.svg";
import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Hero } from "./images/illustration-hero.svg";
import { ReactComponent as Bookmark } from "./images/logo-bookmark.svg";

function App() {
  const [openIndex, setOpenIndex] = useState<null>(null);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [toggleOpen, setToggleOpen] = useState<boolean>(false);
  const [info, setInfo] = useState<{
    text: string;
    SvgComponent: string;
    header: string;
    btn: string;
  }>({
    header: "Bookmark in one click",
    btn: "More Info",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    SvgComponent: "./images/illustration-features-tab-1.svg",
  });

  const [activeButton, setActiveButton] = useState<string>("bookmark");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized:", window.innerWidth);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleClick = (type: any) => {
    setActiveButton(type);
    switch (type) {
      case "bookmark":
        setInfo({
          header: "Bookmark in one click",
          btn: "More Info",
          text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
          SvgComponent: "./images/illustration-features-tab-1.svg",
        });
        break;
      case "search":
        setInfo({
          header: "Intelligent search",
          btn: "More Info",
          text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
          SvgComponent: "./images/illustration-features-tab-2.svg",
        });
        break;
      case "share":
        setInfo({
          header: "Share your bookmarks",
          btn: "More Info",
          text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
          SvgComponent: "./images/illustration-features-tab-3.svg",
        });
        break;
      default:
        setInfo({
          header: "Bookmark in one click",
          btn: "More Info",
          text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
          SvgComponent: "./images/illustration-features-tab-1.svg",
        });
    }
  };
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const questions = [
    {
      title: "What is Bookmark?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      title: "How can I request a new browser?",
      content:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      title: "Is there a mobile app?",
      content:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      title: "What about other Chromium browsers?",
      content:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleBlur = () => {
    setIsEmailValid(validateEmail(email));
  };
  console.log("Toggle Open:", toggleOpen);

  return (
    <div className="container">
      <header className="header">
        <div>
          <Bookmark />
        </div>
        {windowWidth > 855 ? (
          <nav>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Login</li>
            </ul>
          </nav>
        ) : (
          <>
            <div
              onClick={() => {
                setToggleOpen((prev) => !prev);
              }}
            >
              <Hamburger />
            </div>
            {toggleOpen && (
              <div
                className={`mobileNav ${
                  toggleOpen ? "openNavMobile" : "closedNavMobile"
                }`}
              >
                <div className="closeNav">
                  <Bookmark />
                  <Close onClick={() => setToggleOpen(false)} />
                </div>
                <div className="mobileNavContent">
                  <nav>
                    <ul>
                      <li>Features</li>
                      <li>Pricing</li>
                      <li>Contact</li>
                      <li>Login</li>
                    </ul>
                  </nav>
                  <div className="socialMedia">
                    <div>
                      <Facebook />
                    </div>
                    <div>
                      <Twitter />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </header>
      <main>
        <section className="sectionOne">
          <div className="description">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="btnDesc">
              <button className="chromeBtn">Get it on Chrome</button>
              <button className="firefoxBtn">Get it on Firefox</button>
            </div>
          </div>
          <div className="sectionOneImg">
            <Hero />
          </div>
        </section>
        <section className="sectionTwo">
          <div className="top">
            <h2>Features</h2>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>

          <div className="infoBtn">
            <button
              onClick={() => handleClick("bookmark")}
              className={activeButton === "bookmark" ? "activeClass" : ""}
            >
              Simple Bookmarking
            </button>
            <button
              onClick={() => handleClick("search")}
              className={activeButton === "search" ? "activeClass" : ""}
            >
              Speedy Searching
            </button>
            <button
              onClick={() => handleClick("share")}
              className={activeButton === "share" ? "activeClass" : ""}
            >
              Easy Sharing
            </button>
          </div>
          <div className="infoContainer">
            <div className="infoImg">
              <img
                src={info.SvgComponent}
                alt="Description of SVG"
                className="infoImg"
              />
            </div>
            <div className="infoContent">
              <h3>{info?.header}</h3>
              <p className="infoText">{info.text}</p>
              <button>{info.btn}</button>
            </div>
          </div>
        </section>
        <section className="sectionThree">
          <h3>Download the extension</h3>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
          <ul>
            <li className="chrome">
              <img src={`./images/logo-chrome.svg`} alt="chrome" />
              <h4>Add to Chrome</h4>
              <p>Minimum version 62</p>
              <div>
                <Dots />
              </div>

              <button>Add & Install Extension</button>
            </li>
            <li className="firefox">
              <img src="./images/logo-firefox.svg" alt="firefox" />
              <h4>Add to Firefox</h4>
              <p>Minimum version 55</p>
              <div>
                <Dots />
              </div>
              <button>Add & Install Extension</button>
            </li>
            <li className="opera">
              <img src="./images/logo-opera.svg" alt="opera" />
              <h4>Add to Opera</h4>
              <p>Minimum version 46</p>
              <div>
                <Dots />
              </div>
              <button>Add & Install Extension</button>
            </li>
          </ul>
        </section>
        <section className="sectionFour">
          <h3>Frequently Asked Questions</h3>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
          <ul className="askedQ">
            {questions.map((question, index) => (
              <li key={index} className={openIndex === index ? "open" : ""}>
                <button onClick={() => toggleAnswer(index)}>
                  {question.title}
                  {openIndex === index ? (
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAm0lEQVR4nO3UQQrCMBCF4VxC0YOFeaE9riDYrtqFh5nFkxSFilqtmWY1PwRCA/mYRRqC53lezdi2ewVOKqnL+zpojDsVDIrEaQmubJpjhUnTeEfH+X6zyTmfNE8Z4+Hlm/XkfIN+PLPCuYBuhvMH1BznCtQM5x9oMc4CtAhXSZ3F23x+87h8h4GzCnqLH8KEC/p8Z+ldnud54dENgCHmCyxFqX4AAAAASUVORK5CYII=" />
                  ) : (
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApklEQVR4nO2UTQrCMBCFcwmLHmsGegAXGYrH1JW2bsxCkPbpTZQWFyVga/5280Egi7z5eIuJMYqiKLkgwZEFHTV9lTyr6SuW4cqC0+pjFlxY8GYLlyKfpBbuO+u8Gqj3jw0LbmOAZLiTvHahUn9GfXhuo4Ih8mhpijxZGiPPJg2RZ5f+Iy8mXZIXl/7YTTe/5/hwFpm3LN7UZ2xHFu10SjdVFEUxHh8OxNzlZRCyiwAAAABJRU5ErkJggg==" />
                  )}
                </button>
                <p>{question.content}</p>
              </li>
            ))}
          </ul>
          <button className="infoBtn">{info.btn}</button>
        </section>
      </main>
      <footer>
        <div className="update">
          <p>35,000+ already joined</p>
          <h3>Stay up-to-date with what we’re doing</h3>
          <div className={isEmailValid ? "" : "errorMessage"}>
            {isEmailValid ? (
              ""
            ) : (
              <div className="errorIcon">
                <Error />
              </div>
            )}
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
              className={isEmailValid ? "" : "error"}
              placeholder="Enter your email"
            />
            <button>Contact Us</button>{" "}
          </div>
        </div>
        <div className="otherLinks">
          <div className="links">
            <Bookmark />
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="socialMedia">
            <div>
              <Facebook />
            </div>
            <div>
              {" "}
              <Twitter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
