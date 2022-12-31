import { Button } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";
import happy from "./happy.png";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  justify-content: center;

  .intro-div {
    display: flex;
    position: relative;
    width: 90%;
    height: 70%;
    top: 5%;
    border: 1px solid white;
    margin: auto;

        .text-div {
            position: relative;
            width: 60%;
            color: white;

            .title {
                
            }

            .special-text-color {
                color: #3DE1B8;
            }

            .underlined-text {
                color: #3DE1B8;
                text-decoration: #3DE1B8 underline;
            }

            .app-button {
                margin-top: 2%;
                position: relative;
                background: #3DE1B8;
                color: #161615;
                width: fit-content;
                padding-left: 5%;
                padding-right: 5%;

                :hover {
                    opacity: 0.96
                }

                .button-text {
                    position: relative;
                    text-decoration: none;

                    ::before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        bottom: 0;
                        left: 0;
                        background-color: #161615;
                        transform: scaleX(0);
                        transition: transform 0.2s ease;
                    }
                    
                    :hover::before {
                        transform: scaleX(1);
                    }
                }
            }
        }

        .image-div {
            position: relative;
            width: 50%;
            display: flex;
            height: 100%;
            justify-content: right;
            align-items: center;

            .image-apu {
                position: relative;
                right: 10%;
                height: 70%;
            }
        }  
    }

    .list-div {
        position: relative;
        height: 100%;
        width: 90%;
        margin: auto;
        background: red;
    }

  @media only screen and (max-width: 768px) {
    
    }

    @media only screen and (max-width: 320px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .intro-div {
            positon: relative;
            top: 0%;

            .text-div {
                position: absolute;
                top: 30%;
                width: 95%;
                display: block;
                justify-text: auto;
                height: fit-content;
                padding-bottom: 5%;

                .title {
                    font-size: 24px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .app-button {
                    position: relative;
                    margin: auto;
                    width: 90%;
                    display: flex;
                    margin-top: 5%;
                }
            }

            .image-div {
                position: absolute;
                top: 0;
                width: 95%;
                height: 30%;
                display: flex;
                justify-content: center;
                align-items: center;

                .image-apu {
                    right: 0;
                    height: 100%;
                }
            }
        }
        

    }
`;

function App() {

function openLink(link) {
    window.open(link, "_blank")
}

  return (
    <Container>
        <div className="intro-div">
            <div className="text-div">
                <h1 className="title">What is <span className="special-text-color"> Lorem Ipsum </span>?</h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the <span className="underlined-text">industry's standard</span> dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also <span className="underlined-text">the leap into electronic typesetting</span>, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                 and more recently with <span className="underlined-text">desktop publishing software</span> like Aldus PageMaker including versions of Lorem Ipsum.
                 <div><Button className="app-button" onClick={() => openLink("https://www.lipsum.com/")}><div className="button-text">Get started</div></Button></div>
            </div>
            <div className="image-div">
                <img src={happy} className="image-apu"></img>
            </div>
        </div>
        <div className="list-div"></div>       
    </Container>
  );
}

export default App;
