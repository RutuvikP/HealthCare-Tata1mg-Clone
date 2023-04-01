import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
// import { UseAuth } from "";
import { useNavigate, Link } from "react-router-dom";
import { UseAuth } from "./PagesMain/authfolderrr/Authcontext";
import Carousel from "react-multi-carousel";
import "./Login.css"
const datatty = [
  {
    id: 1,
    img: "https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png",
    title: "Make HealthCare Simpler",
    caption:
      "Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.",
  },
  // <div class="style__desc-wrapper___StUEL">Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.</div>
  {
    id: 2,
    img: "https://www.1mg.com/images/login-signup/Know-Your-Medicines.png",
    title: "Know Your Medicines",
    caption:
      "View medicine information like usage, side effects and cheaper substitutes before you take them.",
  },
  {
    id: 3,
    img: "https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png",

    title: "Medicines, Home Delivery",
    caption:
      "Order any medicine or health product and we’ll deliver it for free. Enjoy discounts on everything.",
  },
  {
    id: 4,
    img: "https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png",
    title: "Lab Test at Home",
    caption:
      "Book any test from any lab. We'll collect the sample and send the reports. Save up to 80% every time.",
  },
  {
    id: 5,
    img: "https://www.1mg.com/images/login-signup/Health-Related-Queries.png",

    title: "Health Related Quries?",

    caption:
      "Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.",
  },
];

export const Login = () => {
  const { googlesignin, user } = UseAuth();
  const navigate = useNavigate();
  const handle = async () => {
    try {
      await googlesignin();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/cart");
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
  };
  return (
    <div
      style={{ width: "100%", border: "5px solid blue" }}
      className="loginwercv"
    >
      <div className="loginpagecss">
        <div className="leftdfghjk" style={{marginBottom:"100px"}}>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            slidesToSlide={1}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-10-px"
            containerClass="carousel-container"
          >
            {datatty.map((data, id) => (
              <div key={id} className="insidecarosa">
                <div className="leftimgggkl">
                  <img src={data.img} alt="banner" key={id} />
                </div>
                <div className="h1hhh11">
                  <p1>{data.title}</p1>
                </div>
                <div className="ppppwerty">
                  <p1>{data.caption}</p1>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div class="style__auth-wrapper___2Z5D3">
          <div class="container">
            <div class="style__wrapper___2tnRw">
              <div>
                <div>
                  <div>
                    <span class="style__main-heading___3cYBw">Sign Up</span>
                  </div>
                  <div class="style__explanation-wrapper___2Uqb6">
                    <span class="style__text___2naEQ">
                      <span>
                        Please enter your Mobile number to receive One Time
                        Password (OTP)
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <div class="style__mb___11Y7p">
                    <div class="style__wrapper___EMT3C style__input-error___3piwq">
                      <label class="style__input-label___1kYYX">
                        Enter Mobile Number
                      </label>
                      <div class="style__input-wrapper___3kd0w">
                        <input class="style__input___3NmkT" />
                      </div>
                    </div>
                    <div class="style__inline-error-wrapper___1i2-5 style__color-error___qUdd8">
                      <span></span>
                    </div>
                  </div>
                </div>
                <div class="style__health-pro-wrapper___2nnQY">
                  <div class="style__checkbox-wrapper___1Ffh0">
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="v2-Login"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Material/Light/Unchecked"
                          transform="translate(-4.000000, -4.000000)"
                          fill="#E0E0E0"
                        >
                          <path
                            d="M18.2222222,5.77777778 L18.2222222,18.2222222 L5.77777778,18.2222222 L5.77777778,5.77777778 L18.2222222,5.77777778 L18.2222222,5.77777778 Z M18.2222222,4 L5.77777778,4 C4.8,4 4,4.8 4,5.77777778 L4,18.2222222 C4,19.2 4.8,20 5.77777778,20 L18.2222222,20 C19.2,20 20,19.2 20,18.2222222 L20,5.77777778 C20,4.8 19.2,4 18.2222222,4 L18.2222222,4 L18.2222222,4 Z"
                            id="Shape"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <span class="style__text___2LyDl">
                      Are you a healthcare professional?
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <a
                    class="button-text"
                    href=" "
                    style={{
                      backgroundaColor: "rgb(255, 111, 97)",
                      color: "rgb(255, 255, 255)",
                      height: "40px",
                      padding: "0px 16px",
                      textDecoration: "none",
                      display: "flex",
                      fontWeight: "700",
                      fontSize: "16px",
                      borderRadius: "4px",
                      zIndex: "100",
                      cursor: "pointer",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgb(255, 111, 97)",
                    }}
                  >
                    <span style={{display: "inlineBlock"}}>CONTINUE</span>
                  </a>
                </div>
                <div class="style__bottom-content___3nH4c">
                  <div>
                    <span class="style__text___2LyDl style__text-larger___1wRQq style__d-f___2D3f8">
                      <span>
                        <span>Have an account? </span>
                        <span class="style__link___2N8KX">Login</span>
                        <span>
                          <p>or</p>
                        <GoogleButton onClick={handle} />
                        </span>
                        <span><Link to={"/"}>Home</Link></span>
                      </span>
                    </span>
                  </div>
                  <div class="style__text___2LyDl style__text-lighter___1joQy style__tnc-wrapper___vu_Kh">
                    <div style={{ textAlign: "center" }}>
                      By signing up, you agree to our
                    </div>
                    <div>
                      <a href=" ">
                        <span class="style__tnc___2iH_i">
                          Terms and Conditions
                        </span>
                      </a>{" "}
                      &amp;{" "}
                      <a href=" ">
                        <span class="style__tnc___2iH_i">Privacy Policy</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

