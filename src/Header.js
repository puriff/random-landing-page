import styled from 'styled-components';
import { Button, Drawer, Box, Divider, ListItemButton, ListItemText, ListItemIcon  } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import logo from './logo.png'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.header};

    .burger-menu {
        display: none;
    }

    .happy {
        position: absolute;
        left: 5%;
        right: 5%;
        height: 60%;
    }

    .button-div {
        position: absolute;
        right: 1%;
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: right;
        align-items: center;

        .links-button {
            width: fit-content;
            height: fit-content;
            border-radius: 15px;
            color: white;
            font-size: 16px;
            
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
                    background-color: white;
                    transform: scaleX(0);
                    transition: transform 0.2s ease;
                  }
                
                  :hover::before {
                    transform: scaleX(1);
                  }
            }
        }

        .launch-app-button {
            width: fit-content;
            height: 60%;
            margin-right: 10px;
            margin-left: 10px;
            padding-left: 15px;
            padding-right: 15px;
            border-radius: 10px;
            color: #161615;
            font-weight: bold;
            font-size: 18px;
            background: #3DE1B8;

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

    @media only screen and (max-width: 768px) {
        .happy {
            height: 70%;
            left: 5%;
        }
        .button-div {
            display: none;
        }
        .burger-menu {
            height: 100%;
            width: fit-content;
            position: absolute;
            right: 1%;
            display: flex;
            justify-content: right;
            align-items: center;
            color: white;
        }
    }

    @media only screen and (max-width: 320px) {
        .happy {
            height: 50%;
            left: 5%;
        }
    }
`;

const DrawerStyled = styled.div`
    width: 100%;
    height: 100%;
    background: #161615;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    .close-button {
        margin-top: 5%;
        color: #3DE1B8;
    }
    
    .launch-app-drawer {
        height: 10%;
        width: 70%;
        margin-top: 5%;
        margin-bottom: 5%;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 15px;
        color: #3DE1B8;
        border: 1px #3DE1B8 solid;
        font-size: 24px;
        font-weight: bold;

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
                background-color: #3DE1B8;
                transform: scaleX(0);
                transition: transform 0.2s ease;
                }
            
                :hover::before {
                transform: scaleX(1);
                }
            }
    }

    .links-button-drawer {
            width: 100%;
            height: fit-content;
            color: white;
            font-size: 20px;
            display: flex;
            margin: auto;
            margin-top: 50%;
            
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
                    background-color: white;
                    transform: scaleX(0);
                    transition: transform 0.2s ease;
                  }
                
                  :hover::before {
                    transform: scaleX(1);
                  }
            }
    }

    .theme-button-dark-drawer {
        aspect-ratio : 1 / 1;
        width: 15%;
        border-radius: 15px;
        background: transparent;
        color: white;
        font-size: 24px;
        border: 1px solid white;
        margin-top: 25%;

        :hover {
            background: white;
            color: black;
            border: 1px solid white;
            animation: none;
        }
    }

    .theme-button-light-drawer {
        aspect-ratio : 1 / 1;
        width: 15%;
        border-radius: 15px;
        background: transparent;
        color: white;
        font-size: 24px;
        border: 1px solid white;  
        margin-top: 25%;

        :hover {
            background: white;
            color: black;
            border: 1px solid white;
            animation: none;
        }
    }

    @media only screen and (max-width: 320px) {
        .theme-button-light-drawer {
            width: 20%;
            margin-top: 75%;
        }
        .theme-button-dark-drawer {
            width: 20%;
            margin-top: 75%;
        }
    }
`;

function Header({theme, setTheme}) {

    let links = [
        {   label: "Twitter",
            link: "https://twitter.com/home"},
        {   label: "Chart",
            link: "https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT"},
        {   label: "Uniswap",
            link: "https://app.uniswap.org/#/swap"},
    ]

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);

    function openLink(link) {
        window.open(link, "_blank")
    }
    
    const [open, setState] = useState(false);

    //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
    const toggleDrawer = (open) => () => {
        setState(open);
    };

    return (
        <Container>
            <img className='happy' src={logo}></img>
            <div className='button-div'>
                {links.map((item, index) => {
                    return <Button className='links-button' onClick={() => openLink(item.link)}> <div className='button-text'>{item.label}</div> </Button>
                })}
                <Button className='launch-app-button'> <div className='button-text'>LAUNCH APP</div> </Button>
            </div>
            <div className='burger-menu'>
                <IconButton 
                    edge="start"
                    color="inherit"
                    onClick={toggleDrawer(true)}
                    >   
                    <MenuIcon sx={{fontSize:"32px"}}/>
                </IconButton>

            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}    
                PaperProps={{

                    sx: {
                      width: '75%',
                      background: "#161615"
                    }
                  }}            
                >

                <DrawerStyled>
                    <IconButton className='close-button'>
                        <CloseIcon onClick={toggleDrawer(false)} sx={{fontSize:"32px"}}/>
                    </IconButton>                    
                    <Divider variant='middle' flexItem sx={{background:"white"}}/>
                    <Button className='launch-app-drawer'><div className='button-text'>LAUNCH APP</div></Button>
                    <Box className='box'>
                        {links.map((item, index) => {
                            return <Button className='links-button-drawer' onClick={() => openLink(item.link)}> <div className='button-text'>{item.label}</div> </Button>
                        })}
                    </Box>
                </DrawerStyled>
            </Drawer>
            </div>

        </Container>
    )
}

export default Header