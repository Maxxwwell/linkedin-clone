import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import TagIcon from '@mui/icons-material/Tag';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Rightside() {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>
                        Add your feed
                    </h2>
                    <img src="images/feed-icon.svg" alt="" />
                </Title>

                <FeedList>

                    <li>
                        <a>
                            <TagIcon style={{ color: "lightblue", fontSize: "35px" }} />
                        </a>
                        <div>
                            <span>#Linkedin</span>
                            <Button variant="outlined">Follow</Button>
                        </div>
                    </li>

                    <li>
                        <a>
                            <TagIcon style={{ color: "lightblue", fontSize: "35px" }} />
                        </a>
                        <div>
                            <span>#Video</span>
                            <Button variant="outlined">Follow</Button>
                        </div>
                    </li>
                </FeedList>

                <Recommendation>
                    View all recommendation
                    <ArrowRightAltIcon />
                </Recommendation>

                <BannerCard>
                    <img src="images/linkedin-job.jpg" alt="" />
                </BannerCard>

            </FollowCard>
        </Container>
    )
}

export default Rightside;

const Container = styled.div`

`
const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    position: relative;
    box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0 / 20%);
    padding: 12px;
`

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
`

const FeedList = styled.ul`
    margin-top: 15px;
    li {
       display: flex ;
       align-items: center;
       margin: 12px 0;
       position: relative;
       font-size: 14px;

       a {
           Button {
               border-radius: 100%;
           }
       }

       div {
           display: flex;
           flex-direction: column;
       }
    }
    Button {
        background-color: transparent;
        text-transform: inherit;
        color: rgba(0, 0, 0, 0.6);
        border-color: black;
        max-height: 32px;
        font-weight: 600;
        border-radius: 20px;
        /* max-width: 480px; */
    }

`
const Recommendation = styled.a`
    color: #0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
`


const BannerCard = styled(FollowCard)`
    img {
        width: 100%;
        height: 100%;
    }
`