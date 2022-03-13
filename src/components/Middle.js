import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react'
import styled from 'styled-components'
import PostModal from './PostModal';


function Middle() {

    const [liked, setLiked] = useState(false);
    const [showModal, setShowModal] = useState("close");

    const handleClick = (event) => {
        event.preventDefault();
        if (event.target !== event.currentTarget) {
            return;
        }

        switch (showModal) {
            case "open":
                setShowModal("close");
                break;

            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }

    }

    return (
        <Container>
            <SharedBox>
                Share
                <div>
                    <img src="images/user.svg" alt="" />
                    <Button
                        variant="outlined"
                        onClick={handleClick}

                    >Start a post</Button>
                </div>

                <div>
                    <Button variant="outlined">
                        <img src="images/icons-photo.png" alt="" />
                        <span>Photo</span>
                    </Button>

                    <Button variant="outlined">
                        <img src="images/video.png" alt="" />
                        <span>Video</span>
                    </Button>

                    <Button variant="outlined">
                        <img src="images/icons8-event.png" alt="" />
                        <span>Event</span>
                    </Button>

                    <Button variant="outlined">
                        <img src="images/icons-article.png" alt="" />
                        <span>Write article</span>
                    </Button>
                </div>
            </SharedBox>

            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="images/user.svg" alt="" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <Button>
                            <MoreHorizIcon style={{ color: "black" }} />
                        </Button>
                    </SharedActor>

                    <Description>
                        Description
                    </Description>
                    <SharedImage>
                        <a>
                            <img src="https://media-exp1.licdn.com/dms/image/C4D12AQEXUQo2od63sA/article-cover_image-shrink_600_2000/0/1579136876834?e=1651104000&v=beta&t=t85bx8LYB63UKHK1FRnYd0OHscrq43nirO55F8VYXI4" alt="" />
                        </a>
                    </SharedImage>

                    <SocialCount>

                        <li>
                            <Button>
                                <img src="images/l.svg" alt="" />
                                <img src="images/b.svg" alt="" />
                                <img src="images/lv.svg" alt="" />
                                <span>89</span>
                            </Button>
                        </li>

                        <a>7 comments</a>

                    </SocialCount>

                    <SocialActions>
                        <Button onClick={() => setLiked(!liked)}>
                            {liked ? <> <img src="images/liked.png" alt="" />
                                <span>Like</span>
                            </>
                                :
                                <>
                                    <img src="images/like.png" alt="" />
                                    <span>Like</span>

                                </>
                            }
                        </Button>

                        <Button>
                            <img src="images/comment.png" alt="" />
                            <span> Comment </span>
                        </Button>

                        <Button>
                            <img src="images/arrow.png" alt="" />
                            <span> Share </span>
                        </Button>

                        <Button>
                            <img src="images/send.png" alt="" />
                            <span> Send </span>
                        </Button>
                    </SocialActions>
                </Article>
            </div>
            <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
    )
}

export default Middle;

const Container = styled.div`
    width: 35%;
    
    @media (max-width: 768px) {
    width: 100%;
  }
`

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const SharedBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    background: white;
    padding: 5px;
    
    div {
        Button {
            text-transform: inherit;
            color: rgba(0, 0, 0, 0.6);
            line-height: 1.5;
            height: 38px;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;

            &:hover {
                border: none;
                background-color: rgba(0, 0, 0, 0.06);
;
            }
        }

        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0px 16px;

            img {
                width: 58px;
                height: 58px;
                border-radius: 100%;
                object-fit: cover;
                margin-right: 8px;
                }
            Button {
                margin: 4px 0;
                flex-grow: 1;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-radius: 35px;
                justify-content: start;
                background-color: white;
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 5px;

            img {
                width: 25px;
                margin: 0 5px 0 -2px;
            }
            span {
                color: #70b5f9;
            }
        }
      
    }
`

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`
const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex; 

        img {
            height: 48px;
            width: 48px;
            object-fit: cover;
        }

        div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-shrink: 0;
            margin-left: 8px;
            overflow: hidden;

            span {
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1)
                }

                &:nth-child(n + 1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6)
                }
            }
        }
    }
`

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImage = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    background-color: #f9fafb;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const SocialCount = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: center;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;

    a {
            font-size: 14px;
        }
    li {
        margin-right: 8px;
        font-size: 12px;
      
        img {
            width: 22px;
            height: 22px;
            object-fit: cover;
        }

       
    }
`

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
    margin-left: 10px;
    min-height: 40px;
    padding: 5px 10px;

    img {
        width: 25px;
        margin-right: 6px;
    }
    Button {
        text-transform: inherit;
        padding-left: 10px;
        &:hover {
            background-color: rgba(0, 0, 0, 0.07);
        }
    }
    span {
        color: rgba(0, 0, 0, 0.7)

    }
`