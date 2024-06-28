import { styled, keyframes } from "@mui/system";

const loading = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const SliderWrapper = styled("div")`
  .ft-slick__dots--custom {
    height: 8px;
    width: 8px;
    background-color: #5d6f81;
    border-radius: 4px;
    position: relative;
  }

  .slick-dots li {
    width: 8px;
    margin: 0 2px;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active {
    width: 56px;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active .ft-slick__dots--custom {
    width: 56px;
    top: 0px;

    .loading {
      height: 8px;
      animation: ${loading} 5s ease-in;
      background-image: linear-gradient(270deg, #4fd15a, #03ac0e);
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
    }
  }
`;

export default SliderWrapper;