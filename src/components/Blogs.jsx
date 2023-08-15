import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import styled from "styled-components";
import fat from "../images/fat.png";
import diet from "../images/diet.png";
import { FaHandHoldingMedical, FaFilePrescription } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import { GrTest } from "react-icons/gr";
const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  width: 100%;
  height: 2500px;
  position: static;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
`;

const HeadingWrapper = styled.div`
  display: block;
  text-align: center;
  .Head {
    padding-top: 2rem;
  }
`;
const Content = styled.div`
  padding-left: 4rem;
`;
const Category = styled.p`
  color: #a9a5a5;
  font-weight: 600;
  padding-top: 1rem;
`;
const Image = styled.img`
  height: 50vh;
  width: 100%;
  border-radius: 5%;
`;
const TextContent = styled.p`
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  color: #89898a;
  font-weight: 500;
  width: 100%;
`;
const Left = styled.div``;
const Right = styled.div`
  background-color: #ffffff;
`;
const ImageAg = styled.img`
  border-radius: 5%;
  height: 30vh;
  width: 25vw;
`;
const Button = styled.button`
  display: flex;
  background-color: white;
  color: #464748;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border: none;
  border-radius: 10px;
  width: 80%;
  height: 7vh;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-bottom: 1rem;
  .ButtonIcon {
    padding-left: 0.8rem;
    padding-right: 3rem;
    font-size: 2rem;
  }
  .ButtonText {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
const ContentRight = styled.div`
  padding-left: 2rem;
`;
const Blogs = () => {
  return (
    <Container>
      <HeadingWrapper>
        <div className="Head">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "500",
              color: "#464748",
            }}
          >
            Health Blogs
          </h1>
        </div>
      </HeadingWrapper>

      <Content>
        <Grid>
          <Left>
            <Category> >Fat Loss</Category>
            <h1
              style={{
                paddingTop: "0.3rem",
                fontSize: "2rem",
                color: "#464748",
              }}
            >
              10 Tips For Faster Fat Loss.
            </h1>
            <Category style={{ color: "#464748", paddingTop: "0.7rem" }}>
              10 Mins Read
            </Category>
            <Category
              style={{
                color: "#979b9e",
                fontWeight: "400",
                paddingTop: "0.7rem",
              }}
            >
              By Nilesh Balotiya, Published on 14th August 2022
            </Category>
            <br />
            <Image src={fat}></Image>
            <TextContent>
              “Painless Piles Surgery”, “Painless Tooth Extraction”, “Painless
              Uterus Removal”- you would have often heard these words and
              wondered, “Painless? Really? How?”
              <br />
              <br />
              Well, this is primarily because of anaesthesia. Modern-day
              anaesthesia is a highly advanced combination drug which, when
              given in just the right amount, slowly numbs your body, absolving
              you from any experience or memory of pain whatsoever during the
              surgery.
              <br />
              <br />
              Physiology of Pain- How Does the Brain Detect Pain?
              <br />
              <br />
              “Painless Piles Surgery”, “Painless Tooth Extraction”, “Painless
              Uterus Removal”- you would have often heard these words and
              wondered, “Painless? Really? How?”The physiology of pain can well
              be understood through the simplest example of an electric channel
              in your house. Just like all the lights, fans, and other electric
              appliances work via the current supplied to them through the
              ‘current distribution box’ (DB), your organs work the way they do
              because of the instructions supplied to them through the brain.
              <br />
              <br />
              “Painless Piles Surgery”, “Painless Tooth Extraction”, “Painless
              Uterus Removal”- you would have often heard these words and
              wondered, “Painless? Really? How?”
              <br />
              <br />
              “Painless Piles Surgery”, “Painless Tooth Extraction”, “Painless
              Uterus Removal”- you would have often heard these words and
              wondered, “Painless? Really? How?”
              <br />
              <br />
              “Painless Piles Surgery”, “Painless Tooth Extraction”, “Painless
              Uterus Removal”- you would have often heard these words and
              wondered, “Painless? Really? How?”
              <br />
              <br />
              <ImageAg src={diet}></ImageAg>
              <br />
              <br />
              <ol style={{ paddingLeft: "15px" }} type="1">
                <li>
                  <b>Set Realistic Goals</b>: It's essential to set achievable
                  goals that align with your body type, lifestyle, and personal
                  preferences. Rapid, drastic changes can lead to burnout,
                  making it more challenging to stay committed. Aim for gradual,
                  steady progress, and celebrate small victories along the way.
                </li>
                <li>
                  <b>Prioritize Balanced Nutrition</b>:Focus on a well-rounded
                  diet that includes lean proteins, complex carbohydrates,
                  healthy fats, and plenty of fruits and vegetables. Avoid
                  extreme diets or severe caloric restrictions, as they can harm
                  your metabolism and overall health.
                </li>
                <li>
                  <b>Stay Hydrated</b>:Drinking adequate water is crucial for
                  fat loss. Not only does it support digestion and metabolism,
                  but it also helps control hunger and reduces the likelihood of
                  mistaking thirst for hunger.
                </li>
              </ol>
              <br />
              <b>Conclusion:</b>
              Effective fat loss is achievable through a combination of
              realistic goals, a balanced approach to nutrition, regular
              exercise, and healthy lifestyle choices. By following these 10
              tips, you'll be on the path to transforming your body in a
              sustainable and enjoyable way, ensuring lasting results for the
              long haul. Remember, it's not just about the destination; it's
              about embracing the journey towards a healthier, happier you.
            </TextContent>
          </Left>
          <Right>
            <ContentRight>
              <h1
                style={{
                  paddingTop: "3rem",
                  fontSize: "2rem",
                  color: "#464748",
                  marginBottom: "1rem",
                  fontWeight: "400",
                }}
              >
                Our Services
              </h1>
              <Button>
                <div className="ButtonIcon">
                  <FaHandHoldingMedical style={{ color: "#505252" }} />
                </div>
                <div className="ButtonText">
                  <p>Buy MediSwift Products</p>
                </div>
              </Button>
              <Button>
                <div className="ButtonIcon">
                  <FcOnlineSupport style={{ marginTop: "5px" }} />
                </div>
                <div className="ButtonText">
                  <p>Online Consultations</p>
                </div>
              </Button>
              <Button>
                <div className="ButtonIcon">
                  <GrTest style={{ marginTop: "5px", color: "red" }} />
                </div>
                <div className="ButtonText">
                  <p>Lab Tests</p>
                </div>
              </Button>
              <Button>
                <div className="ButtonIcon">
                  <FaFilePrescription
                    style={{ marginTop: "5px", color: "#505252" }}
                  />
                </div>
                <div className="ButtonText">
                  <p>Upload Prescription</p>
                </div>
              </Button>
            </ContentRight>
          </Right>
        </Grid>
      </Content>
    </Container>
  );
};

export default Blogs;
