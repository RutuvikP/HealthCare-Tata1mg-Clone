import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
// import { UseAuth } from "";
import { useNavigate } from "react-router-dom";
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
    <div>
      <div>
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
            <div
              key={id}
              data-index="4"
              class="slick-slide"
              tabindex="-1"
              aria-hidden="true"
              style={{ outline: "none", width: "450px" }}
            >
              <div>
                <div
                  tabindex="-1"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div class="style__image-wrapper___1ONWI">
                    <img src={data.img} alt=" " />
                  </div>
                  <div class="style__title-wrapper___1QOwG">{data.title}</div>
                  <div class="style__desc-wrapper___StUEL">{data.caption}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <div class="style__right-side-wrapper___32zVC">
          <div class="style__cross-wrapper___2SENj style__cross-wrapper___15Y2J">
            <span class="style__pointer___brGwo">
              <img src="/images/cross_icon_18.svg" alt="clear input" />
            </span>
          </div>
          <div class="style__auth-wrapper___2Z5D3">
            <div class="container">
              <div class="style__wrapper___3f2UM">
                <div>
                  <div>
                    <div>
                      <span class="style__main-heading___3cYBw">Login</span>
                    </div>
                    <div class="style__explanation-wrapper___2Uqb6">
                      <span class="style__text___2naEQ">
                        <span>
                          Get access to your orders, lab tests &amp; doctor
                          consultations
                        </span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <div class="style__mb___11Y7p">
                      <div class="style__wrapper___EMT3C style__input-error___3piwq">
                        <label class="style__input-label___1kYYX">
                          Enter Email ID or Mobile Number
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
                </div>
                <div>
                  <div>
                    <a
                      class="button-text"
                      href=" "
                      style={{
                        backgroundColor: "rgb(255, 111, 97)",
                        color: "black",
                        height: "40px",
                        padding: "0px 16px",
                        textDecoration: "none",
                        display: "flex",
                        fontWeight: "700",
                        fontSize: "16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgb(255, 111, 97)",
                        zIndex: "100",
                      }}
                    >
                      <span style={{ display: "inlineBlock" }}>LOGIN</span>
                    </a>
                  </div>
                  <div class="style__bottom-content___FTTVN">
                    <div class="style__fh-40___C40iw">
                      <span class="style__text___3XOlZ style__text-larger___2DsZQ style__d-f___25FFn">
                        <span>
                          <span>New on 1mg? </span>
                          <span class="style__link___rBZIG">Sign Up</span>
                        </span>
                      </span>
                      <div class="style__text___3XOlZ style__text-lighter___2G_Vn style__text-small___2Rh34 style__tnc-wrapper___3iYER">
                        <div style={{ textAlign: "center" }}>
                          By logging in, you agree to our{" "}
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <a href="/tnc">
                            <span class="style__tnc___3w0N1">
                              Terms and Conditions
                            </span>
                          </a>{" "}
                          &amp;{" "}
                          <a href="/privacypolicy">
                            <span class="style__tnc___3w0N1">
                              Privacy Policy
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="style__bottom-content___FTTVN">
                      <div class="style__fh-20___1-IuS"></div>
                      <div class="style__link___rBZIG style__tnc-wrapper___3iYER">
                        <span>Need Help? Get In Touch</span>
                      </div>
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
//  <GoogleButton onClick={handle} />
