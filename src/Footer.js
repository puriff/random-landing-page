import styled, { ThemeProvider } from "styled-components";
import coingecko from "./coingecko.png"
import happy from "./happy.png"
import logo from "./logo.png"
import eth from "./eth.png"
import telegram from "./telegram.png"
import twitter from "./twitter.png"
import discord from "./discord.png"
import git from "./git.png"

const Container = styled.div`
    border-top: 1px solid rgba(61,225,184,1);
    position: relative;
    width: 100%;
    height: 30%;
    background: #161615;
    overflow-x: hidden;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;

    .column-title {
      margin-top: 0;
      color: rgba(61,225,184,1);
      margin-bottom: 0;
      padding-bottom: 0;
      font-size: 14px;
    }

    .column-text {
      color: white;
      width: 80%;
      font-size: 10px;  
      margin-top: 0;
      padding-top: 0;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .footer-content {
        width: 90%;
        height: 80%;
        display: flex;

        .first-column-footer {
            height: 100%;
            width: 33.33%;

            .first-text {
              margin-bottom: 5%;
            }

            .image-div {
              width: 70%;
              height: 25%;
              display: flex;
              align-items: center;

              .image {
                height: 80%;
                margin-right: 5%;
              }
            }
        }

        .second-column-footer {
            height: 100%;
            width: 33.33%;

            .image-div {
              width: 70%;
              height: 25%;
              display: flex;
              align-items: center;
              margin-bottom: 5%;

              .image {
                height: 70%;
                margin-right: 5%;
              }
            }
        }

        .third-column-footer {
            height: 100%;
            width: 33.33%;
        }
    }
  }

  @media only screen and (max-width: 768px) {

    .footer-content {
        .third-column-footer {
          .column-text {
            width: 100%;
          }
      }
    }
  }
`;

function Footer() {
  return (
    <Container>
      <div className="footer-content">
          <div className="first-column-footer">
            <div className="first-text">
              <h5 className="column-title">Lorem Ipsum</h5>
              <p className="column-text">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
              <p className="column-text">Lorem Ipsum Ipsum Lorem!</p>
            </div>

            <h5 className="column-title">Powered by</h5>
            <div className="image-div">
                <img className="image" src={coingecko}></img>
                <img className="image" src={happy}></img>
                <img className="image" src={logo}></img>
                <img className="image" src={eth}></img>
            </div>
          </div>
          <div className="second-column-footer">
            <h5 className="column-title">Community and socials</h5>
            <div className="image-div">
                <img className="image" src={telegram}></img>
                <img className="image" src={discord}></img>
                <img className="image" src={twitter}></img>
                <img className="image" src={git}></img>
            </div>

            <h5 className="column-title">Community and socials</h5>
            <p className="column-text">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
            <p className="column-text">Lorem Ipsum Ipsum Lorem!</p>

          </div>
          <div className="third-column-footer">
            <h5 className="column-title">Documentation</h5>
            <p className="column-text">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
            <p className="column-text">Lorem Ipsum Ipsum Lorem!</p>
            <p className="column-text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
            <p className="column-text">There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
          </div>
      </div>
    </Container>
  );
}

export default Footer;
