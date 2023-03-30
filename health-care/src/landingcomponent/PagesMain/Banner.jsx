// import { styled } from "@mui/material";
// import { Flex } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./Banner.css";

// const Image = styled("img")(({ theme }) => ({
//   width: "100%",
//   height: 280,
//   [theme.breakpoints.down("md")]: {
//     objectFit: "cover",
//     height: 180,
//   },
// }));
const bannerData1 = [
  {
    id: 1,
    url: "https://onemg.gumlet.io/7bad7fa0-928b-40ae-bafc-ca93b3f3aac7_1677854892.jpg?w=842&h=200&format=auto",
  },
  {
    id: 2,
    url: "https://onemg.gumlet.io/5504dd78-e9aa-4296-b8cf-affed0179210_1666082523.jpg?w=842&h=200&format=auto",
  },

  {
    id: 3,
    url: "https://onemg.gumlet.io/63bea173-5334-47ad-8d90-a1a78fb3212c_1679383386.png?w=842&h=200&format=auto",
  },
  {
    id: 4,
    url: "https://onemg.gumlet.io/6f270cf5-44bb-4c9d-86f8-b1ecd2ba2bb9_1679557477.png?w=842&h=200&format=auto",
  },
  {
    id: 5,
    url: "https://onemg.gumlet.io/86059720-cd97-4ec6-b027-deb99924b036_1666118481.png?w=842&h=200&format=auto",
  },

  {
    id: 6,
    url: "https://onemg.gumlet.io/38cc426b-ade4-48b3-8b59-a73339915244_1679393359.png?w=842&h=200&format=auto",
  },
  {
    id: 7,
    url: "https://onemg.gumlet.io/f534ee65-9963-478a-a075-e0b0aef1ef46_1679397312.png?w=842&h=200&format=auto",
  },
];

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div class="dropdown">
        <div className="dropbtn">
          <a href=" ">
            <span>Covid Essentials</span>
          </a>
          <i class="fa fa-angle-down drop-icon"></i>
        </div>{" "}
        <div class="dropdown-content">
          <a href=" ">
            <span>Covid-19 Self test kits</span>
          </a>

          <a href=" ">
            <span>Oxygen Cans &amp; Concentrators</span>
          </a>

          <a href=" ">
            <span>Masks</span>
          </a>

          <a href=" ">
            <span>Sanitizers &amp; Handwash Products</span>
          </a>

          <a href=" ">
            <span>Support Your Immunity</span>
          </a>

          <a href=" ">
            <span>Thermometer</span>
          </a>

          <a href=" ">
            <span>Chyawanprash</span>
          </a>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "70%" }}>
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
            {bannerData1.map((data, id) => (
              <img src={data.url} alt="banner" key={id} />
            ))}
          </Carousel>
        </div>
        <div>
          <img
            src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/421855e3-ec1c-42c9-a5b4-d5153c8f2f54.png"
            style={{ height: "185px" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
