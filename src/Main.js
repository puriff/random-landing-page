import { Button, Divider, List, ListItem, ListItemIcon } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";
import happy from "./happy.png";
import CircleIcon from '@mui/icons-material/Circle';
import logo from './logo.png'
import abstract from './abstract.png'
import Footer from "./Footer";

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
    margin: auto;
    margin-bottom: 5%;

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
        height: fit-content;
        width: 90%;
        margin: auto;
        color: white;

        .special-text-color {
            color: #3DE1B8;
        }

        .underlined-text {
            color: #3DE1B8;
            text-decoration: #3DE1B8 underline;
        }

        .list {

            .list-item {
                margin-bottom: 15px;
                font-size: 14px;

                .list-item-icon {
                    background-color:  #3DE1B8;
                    border-radius: 50%;
                    -webkit-box-shadow:0px 0px 62px 13px rgba(45,255,196,0.57);
                    -moz-box-shadow: 0px 0px 62px 13px rgba(45,255,196,0.57);
                    box-shadow: 0px 0px 10px 2px #3DE1B8;
                }
            }
        }
    }

    .bottom-part {
        position: relative;
        width: 100%;
        height: 70%;
        margin: auto;
        margin-top: 5%;

        .blurred-part {
            height: 30%;
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            margin: auto;
            margin-bottom: 10%;
            background: rgb(61,225,184);
            background: radial-gradient(circle, transparent 60%, rgba(61,225,184,0.8) 150%, transparent 40%);
            border-right: 2px solid rgba(61,225,184,1);
            border-left: 2px solid rgba(61,225,184,1);

            
            .text-part{
                .title-blurred {
                    color: #3DE1B8;
                    width: fit-content;
                    position: relative;
                    margin-top: 0;
                    margin-bottom: 0;
                    margin-left: 2%;
                }

                .text-blurred {
                    color: white;
                    margin-left: 2%;
                    width: 60%;
                    font-size: 14px;
                }
            }

            .img-blurred {
                position: relative;
                height: 60%;
                right: 2%;               
            }
        }

        .bottom-text {
            display: flex;
            positon: relative;
            width: 90%;
            height: 20%;
            margin: auto;
            justify-content: center;
            align-items: center;

            .bottom-text-h1 {
                color: white;

                .special-text-color-underlined {
                    color: #3DE1B8;
                    text-decoration: #3DE1B8 underline;
                }
            }
        }

        .bottom-image {
            position: absolute;
            width: 50%;
            bottom: 0;
            right: -10%;
        }
    }

  @media only screen and (max-width: 768px) {
        .intro-div {
            margin-bottom: 10%;

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
                    height: 60%;
                }
            }  
        }
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
        <div className="list-div">
            <h1 className="title">Special <span className="special-text-color"> Lorem Ipsum </span> features</h1>
            <List className="list">
                <ListItem className="list-item">
                    <ListItemIcon>
                        <CircleIcon className="list-item-icon" fontSize="" />
                    </ListItemIcon>
                    There are many variations of passages of Lorem Ipsum available
                </ListItem><ListItem className="list-item">
                    <ListItemIcon>
                        <CircleIcon className="list-item-icon" fontSize="" />
                    </ListItemIcon>
                    Contrary to popular belief, Lorem Ipsum is not simply random text
                </ListItem>
                <ListItem className="list-item">
                    <ListItemIcon>
                        <CircleIcon className="list-item-icon" fontSize="" />
                    </ListItemIcon>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                </ListItem>
                <ListItem className="list-item">
                    <ListItemIcon>
                        <CircleIcon className="list-item-icon" fontSize="" />
                    </ListItemIcon>
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary
                </ListItem>
                <ListItem className="list-item">
                    <ListItemIcon>
                        <CircleIcon className="list-item-icon" fontSize="" />
                    </ListItemIcon>
                    There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...
                </ListItem>
            </List>
        </div> 
        <div className="bottom-part">
            <div className="blurred-part">
                <div className="text-part">
                    <h1 className="title-blurred">Lorem Ipsum</h1>
                    <div className="text-blurred"> Various versions have evolved over the years, sometimes by accident, sometimes on purpose</div>
                </div>
                <img className="img-blurred" src={logo}></img>
            </div>
            <div className="bottom-text">
                <h1 className="bottom-text-h1"> Come get some <span className="special-text-color-underlined">Lorem Ipsum</span> ! </h1>
            </div>
        </div>    
        <Footer/>
    </Container>
  );
}

export default App;
