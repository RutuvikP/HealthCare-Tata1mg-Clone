import React from "react";
import { Footer1 } from "../landingcomponent/Footer1";
import { Footer2 } from "../landingcomponent/Footer2";
import Banner from "../landingcomponent/PagesMain/Banner";
import HomeCarosal from "../landingcomponent/PagesMain/HomeCarosal";
// import SimpleSlider from './Slider'
import "./Homelan.css";

export const Homelan = () => {
  return (
    <div>
      <Banner />
      <section className="style__pharmaHeader___1hcdG">
        <h1>
          Tata 1mg: India’s Leading Online Pharmacy &amp; Healthcare Platform
        </h1>
      </section>
      <div>
        <div class="row style__container___2ywo6">
          <div class="col-xs-7 style__quick-buy___JUotd">
            <span class="style__text___nOj0b">
              <span>
                <div class="style__quick-order___y8jkC">
                  Order quickly with prescription
                </div>
                <div class="style__offer-txt___1nm94">
                  Upload prescription and tell us what you need. We do the rest!
                </div>
              </span>
              <div class="style__offer-per___2lMcB">
                Get 15% off on medicines*
              </div>
            </span>
          </div>
          <div class="col-xs-5 style__rx-button___EPB55">
            <a href="/order-with-prescription" class="">
              <button class="btn style__upload-rx___3zjhZ style__button___1rP6Q style__info___1X5WU ">
                Quick order
              </button>
            </a>
          </div>
        </div>
      </div>
      <section class="styles__creative-section___klRBC">
        <a href=" ">
          <img
            src="https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png"
            alt=""
          />
        </a>
      </section>
      <div class="style__header-container___xmj6H">
        <span class="style__heading___pc8n7">Shop by health concerns</span>
      </div>
      <HomeCarosal />
      <Footer1 />
      <Footer2/>
    </div>
  );
};
