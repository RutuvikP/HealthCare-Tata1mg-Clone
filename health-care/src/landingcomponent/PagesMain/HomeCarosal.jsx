import Carousel from "react-multi-carousel";
import {
  images,
  secondslide,
  productcombo,
  popularCategories,
  healthcareDevices,
  babycare,
} from "./Mycollectionsdata";
// import { Image } from "semantic-ui-react";
// import  from "../../Pages/Homelan.css";
import "./Homecarosal.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:6,
    paritialVisibilityGutter:35,
  },
  tablet: {
    breakpoint: { max: 1024, min:600},
    items:4.5,
    paritialVisibilityGutter:12,
  },
  mobile: {
    breakpoint: { max:600, min: 0 },
    items:3,
    paritialVisibilityGutter:10,
  },
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const HomeCarosal = ({ deviceType }) => {
  return (
    <div>
      <div className="mnbvcdfghyu">
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
        >
          {images.slice(0, 9).map((el) => {
            return (
              <div
                data-index="0"
                class="slick-slide slick-active slick-current slice-hover"
                tabindex="-1"
                aria-hidden="false"
                style={{ outline: "none", width: "170px" }}
              >
                <div>
                  <div
                    class="card-slide"
                    data-index="0"
                    style={{
                      width: "100%",
                      display: "inline-block",
                    }}
                    tabindex="-1"
                  >
                    <div class="style__container___39fE1">
                      <div class="style__image-container___2G57P">
                        <div class="">
                          <img
                            alt="Diabetes Care"
                            title="Diabetes Care"
                            class="style__image___Ny-Sa style__loaded___22epL"
                            src={el.url}
                          />
                        </div>
                      </div>
                      <div
                        class="style__card-head-name___3UuUt"
                        style={{
                          width: "100px",
                          textAlign: "center",
                          marginLeft: "40px",
                        }}
                      >
                        {el.title}
                      </div>
                    </div>

                    <div />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div class="style__slider-title___2c8kd">
        <div class="style__sale-container___2N_JJ">
          <div class="style__header-container___xmj6H">
            <span class="style__heading___pc8n7">Featured brands</span>
          </div>
        </div>
        <span class="style__view-all___162yg">
          <a href="/productlist" class="" target="_self" rel="noopener">
            <button class="btn style__view-all-btn___1v_UG style__button___1rP6Q style__info___1X5WU style__xs___E2aat ">
              SEE ALL
            </button>
          </a>
        </span>
      </div>

      <div className="mnbvcdfghyu">
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
        >
          {secondslide.slice(0, 9).map((el) => {
            return (
              <div
                data-index="0"
                class="slick-slide slick-active slick-current slice-hover"
                tabindex="-1"
                aria-hidden="false"
                style={{ outline: "none", width: "170px" }}
              >
                <div>
                  <div
                    class="card-slide"
                    data-index="0"
                    style={{
                      width: "100%",
                      display: "inline-block",
                    }}
                    tabindex="-1"
                  >
                    <div class="style__container___39fE1">
                      <div class="style__image-container___2G57P">
                        <div class="">
                          <img
                            alt="Diabetes Care"
                            title="Diabetes Care"
                            class="style__image___Ny-Sa style__loaded___22epL"
                            src={el.url}
                          />
                        </div>
                      </div>
                      <div
                        class="style__card-head-name___3UuUt"
                        style={{
                          width: "100px",
                          textAlign: "center",
                          marginLeft: "40px",
                        }}
                      >
                        {el.title}
                      </div>
                    </div>

                    <div />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div class="style__slider-title___2c8kd">
        <div class="style__sale-container___2N_JJ">
          <div class="style__header-container___xmj6H">
            <span class="style__heading___pc8n7">Popular Combo Deals</span>
          </div>
        </div>
        <span class="style__view-all___162yg">
          <a href="/productlist" class="" target="_self" rel="noopener">
            <button class="btn style__view-all-btn___1v_UG style__button___1rP6Q style__info___1X5WU style__xs___E2aat ">
              SEE ALL
            </button>
          </a>
        </span>
      </div>
      <div className="mnbvcdfghyulong">
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
        >
          {productcombo.slice(0, 9).map((el) => {
            return (
              <div
                data-index="0"
                class="slick-slide slick-active slick-current"
                tabindex="-1"
                aria-hidden="false"
                style={{ outline: "none", width: "170px" }}
              >
                <div>
                  <div
                    class="card-slide"
                    data-index="0"
                    style={{ width: "100%", display: "inline-block" }}
                    tabindex="-1"
                  >
                    <div class="sku-card-item style__slide-parent___3t2fC style__hover-effect___1MxM7">
                      <a
                        href=" "
                        class="style__slider-item___2YIPO"
                        target="_blank"
                        rel="noopener"
                      >
                        <div class="style__image-container___MXkPJ">
                          <div class="">
                            <img
                              alt="Tata 1mg Diabetes Care Combo Pack for Cholesterol &amp; Blood Sugar Management"
                              src={el.url}
                              class="style__image___Ny-Sa style__loaded___22epL"
                            />
                          </div>
                        </div>
                        <div class="style__counter-container___1zPzK">
                          <div class="SaleCounter__small-font___3Aoqw SaleCounter__deals-view___2uGIM">
                            <div class="SaleCounter__sale-container___2yH-k">
                              <div class="SaleCounter__sale_tag___14PlY">
                                {el.sale}
                              </div>
                              <div class="SaleCounter__container___1GopV">
                                <img
                                  src="https://img.1mg.com/images/watch_icon.svg"
                                  alt="1mg-recommended"
                                  class="SaleCounter__small-icon___5wndS SaleCounter__clock___1ineq"
                                />
                                ends in
                                <div class="SaleCounter__duration-style___1PK6d">
                                  <span>{el.end}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="style__name___3YOZc style__large-font___2dBUf">
                          {el.title}
                        </div>
                        <div class="style__pack-size___3nfIS">
                          {el.combopack}
                        </div>
                        <div class="style__eta___1JNVM"></div>
                        <div class="style__price-container___3DXin">
                          <div>
                            <div>
                              <span class="style__mrp-tag___3T8Mr">MRP</span>
                              <span class="style__strike-price___3Ag3J">
                                {el.mrpoff}
                              </span>
                              <span class="style__discount-percent___1CBqr">
                                {el.offf}
                              </span>
                            </div>
                            <div class="style__price___196ew">{el.mrp}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div class="style__slider-title___2c8kd">
        <div class="style__sale-container___2N_JJ">
          <div class="style__header-container___xmj6H">
            <span class="style__heading___pc8n7">Popular Categories Deals</span>
          </div>
        </div>
        <span class="style__view-all___162yg">
          <a href="/productlist" class="" target="_self" rel="noopener">
            <button class="btn style__view-all-btn___1v_UG style__button___1rP6Q style__info___1X5WU style__xs___E2aat ">
              SEE ALL
            </button>
          </a>
        </span>
      </div>
      <div className="mnbvcdfghyu">
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
        >
          {popularCategories.slice(0, 9).map((el) => {
            return (
              <div
                data-index="0"
                class="slick-slide slick-active slick-current slice-hover"
                tabindex="-1"
                aria-hidden="false"
                style={{ outline: "none", width: "170px" }}
              >
                <div>
                  <div
                    class="card-slide"
                    data-index="0"
                    style={{
                      width: "100%",
                      display: "inline-block",
                    }}
                    tabindex="-1"
                  >
                    <div class="style__container___39fE1">
                      <div class="style__image-container___2G57P">
                        <div class="">
                          <img
                            alt="Diabetes Care"
                            title="Diabetes Care"
                            class="style__image___Ny-Sa style__loaded___22epL"
                            src={el.img}
                          />
                        </div>
                      </div>
                      <div
                        class="style__card-head-name___3UuUt"
                        style={{
                          width: "100px",
                          textAlign: "center",
                          marginLeft: "40px",
                        }}
                      >
                        {el.title}
                      </div>
                    </div>

                    <div />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div class="style__slider-title___2c8kd">
        <div class="style__sale-container___2N_JJ">
          <div class="style__header-container___xmj6H">
            <span class="style__heading___pc8n7">health care Devices</span>
          </div>
        </div>
        <span class="style__view-all___162yg">
          <a href="/productlist" class="" target="_self" rel="noopener">
            <button class="btn style__view-all-btn___1v_UG style__button___1rP6Q style__info___1X5WU style__xs___E2aat ">
              SEE ALL
            </button>
          </a>
        </span>
      </div>
      <div className="mnbvcdfghyu">
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
        >
          {healthcareDevices.slice(0, 9).map((el) => {
            return (
              <div
                data-index="0"
                class="slick-slide slick-active slick-current slice-hover"
                tabindex="-1"
                aria-hidden="false"
                style={{ outline: "none", width: "170px" }}
              >
                <div>
                  <div
                    class="card-slide"
                    data-index="0"
                    style={{
                      width: "100%",
                      display: "inline-block",
                    }}
                    tabindex="-1"
                  >
                    <div class="style__container___39fE1">
                      <div class="style__image-container___2G57P">
                        <div class="">
                          <img
                            alt="Diabetes Care"
                            title="Diabetes Care"
                            class="style__image___Ny-Sa style__loaded___22epL"
                            src={el.img}
                          />
                        </div>
                      </div>
                      <div
                        class="style__card-head-name___3UuUt"
                        style={{
                          width: "100px",
                          textAlign: "center",
                          marginLeft: "40px",
                        }}
                      >
                        {el.title}
                      </div>
                    </div>

                    <div />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div class="style__slider-title___2c8kd">
        <div class="style__sale-container___2N_JJ">
          <div class="style__header-container___xmj6H">
            <span class="style__heading___pc8n7">
              Popular Baby Care Products
            </span>
          </div>
        </div>
        <span class="style__view-all___162yg">
          <a href="/productlist" class="" target="_self" rel="noopener">
            <button class="btn style__view-all-btn___1v_UG style__button___1rP6Q style__info___1X5WU style__xs___E2aat ">
              SEE ALL
            </button>
          </a>
        </span>
      </div>
      <div className="mnbvcdfghyu">
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
        >
          {babycare.slice(0, 9).map((el) => {
            return (
              <div
                data-index="0"
                class="slick-slide slick-active slick-current slice-hover"
                tabindex="-1"
                aria-hidden="false"
                style={{ outline: "none", width: "170px" }}
              >
                <div>
                  <div
                    class="card-slide"
                    data-index="0"
                    style={{
                      width: "100%",
                      display: "inline-block",
                    }}
                    tabindex="-1"
                  >
                    <div class="style__container___39fE1">
                      <div class="style__image-container___2G57P">
                        <div class="">
                          <img
                            alt="Diabetes Care"
                            title="Diabetes Care"
                            class="style__image___Ny-Sa style__loaded___22epL"
                            src={el.img}
                          />
                        </div>
                      </div>
                      <div
                        class="style__card-head-name___3UuUt"
                        style={{
                          width: "100px",
                          textAlign: "center",
                          marginLeft: "40px",
                        }}
                      >
                        {el.title}
                      </div>
                    </div>

                    <div />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarosal;
