import React from 'react'
import styled from 'styled-components'

function Leftside() {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo />
                        <span>Welcome, there!</span>
                    </a>
                    <a>
                        <p>Add a photo</p>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="images/widget-icon.svg" alt="" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="images/item-icon.svg" alt="" />
                        My Items
                    </span>
                </Item>
            </ArtCard>

            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>Events</span>
                    <img src="images/plus-icon.svg" alt="" />
                </a>
                <a>
                    <span>Follow Hastags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    )
}

export default Leftside;

const Container = styled.div`
    width: 15%;

    @media (max-width: 768px) {
    width: 100%;
  }
`

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 10px 10px 15px;
    word-wrap: break-word;
    word-break: break-word;

    span {
      font-size: 16px;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 600;
    }

    p {
       color : #0a66c2;
       margin-top: 5px;
       font-size: 14px;
       line-height: 1.3;
       font-weight: 400;
    }
`
const CardBackground = styled.div`
    background: url('images/card-bg.svg');
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`

const Photo = styled.div`
    background: url('images/photo.svg');
    box-shadow: none;
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-position: center;
    background-color: white;
    background-size: 70%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 10px;
    border-radius: 50%;
`

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 10px;
    padding-bottom: 10px;
    
    & :hover {
            background-color: rgba(0, 0, 0, 0.06);
            cursor: pointer;
        }

    a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        div {
            display: flex;
            flex-direction: column;
            text-align: left;

            span {
                font-size: 14px;
                line-height: 1.333;
                &:first-child {
                    color: rgba(0, 0, 0, 0.6);
                }
                &:nth-child(2) {
                    color: rgba(0, 0, 0, 1); 
                }
            }
        }
    }
`


const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding: 12px;
    display: block;
    span {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);
    }
    &:hover {
        background-color: rgba(0, 0, 0, 0.06);;
    }
`

const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;
`