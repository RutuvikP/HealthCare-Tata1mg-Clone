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
    <div style={{width:"100%",border:"5px solid blue"}} className="loginwercv">
      <div className="loginpagecss" >
        <div className="leftdfghjk">
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
        <div className="lastcaroright">
          <div style={{marginLeft:"-10px",marginTop:"45px" }}>
           <p>Enter email</p>
          </div>
          <div style={{display:"flex"}}>
            <div
              style={{
                border: "2px solid black",
                width: "200px",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <input placeholder="email" type="text" style={{textAlign:"center"}} />
            </div>

            <button
             
              style={{
                padding: "7px 30px",
                border: "1px solid red",
                backgroundColor: "red",
              }}
            >
              login
            </button>
          </div>
          <div style={{margin:"auto"}}>
            <p>or</p>
            <GoogleButton onClick={handle} />
            <p>get in touch </p>
            <Link to={"/"}>Home?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

