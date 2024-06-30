import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Slider from "react-slick";
import SliderWrapper from "../../utils/_SlickSliderStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../../assets/ecology.png";
import { cardContents, userComments } from "../../utils/cardContents";
import {
  functionalitiesSettings,
  userCommentsSettings,
} from "../../utils/sliderSetings";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";

import CustomButton from "../../components/CustomButton/CustomButton";
import CustomCard from "../../components/CustomCard/CustomCard";
import Footer from "../../components/Footer/Footer";
import theme from "../../theme/theme";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.lightGreen,
  flexDirection: "column",
  // paddingBottom: 50,
  height: 500,
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Container
        sx={{
          backgroundColor: theme.palette.customColors.lightGreen,
        }}
      >
        {/* <BoxStyled> */}
        <Box mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <img src={Image} alt="Ecology" style={{ width: "100%" }} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              justifyContent="center"
            >
              <Typography
                variant="h3"
                fontWeight={700}
                color={theme.palette.primary.main}
                mb={3}
              >
                Nossa Missão
              </Typography>
              <Typography
                mb={5}
                variant="h5"
                color={theme.palette.customColors.text}
              >
                O Recicla365 é uma plataforma inovadora criada para facilitar o
                gerenciamento de resíduos e a localização de pontos de coleta de
                materiais recicláveis. Nossa missão é tornar a reciclagem mais
                acessível e prática para todos, promovendo um ambiente mais
                sustentável.
              </Typography>
              <CustomButton text={"Quero saber mais!"} />
            </Grid>
          </Grid>
        </Box>
        {/* </BoxStyled> */}

        {/* <BoxStyled> */}
        <Box mb={10} height={300}>
          <Title text={"Como funciona?"} />
          <SliderWrapper>
            <Slider {...functionalitiesSettings}>
              {cardContents.map((content, index) => (
                <CustomCard
                  key={index}
                  subtitle={content.title}
                  paragraph={content.paragraph}
                  isFunctionalities={true}
                  variant={"h6"}
                />
              ))}
            </Slider>
          </SliderWrapper>
        </Box>
        {/* </BoxStyled> */}

        {/* <BoxStyled> */}
        <Box mb={10}>
          <Slider {...userCommentsSettings}>
            {userComments.map((content, index) => (
              <CustomCard
                key={index}
                subtitle={content.name}
                paragraph={content.text}
              />
            ))}
          </Slider>
        </Box>
        {/* </BoxStyled> */}
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
