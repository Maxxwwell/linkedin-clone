import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { connect } from 'react-redux';

function Header(props) {

    const navigate = useNavigate();
    return (
        <Container>
            <Content>
                <Logo onClick={() => navigate("/")}
                    src="images/logo.png" alt="" />
                <Search>
                    <Icon>
                        <SearchIcon />
                    </Icon>
                    <input type="text" placeholder="Search" />
                </Search>
                <Nav>
                    <NavListWrap>
                        <a>
                            <img src="images/home.png" alt="" />
                            <span>Home</span>
                        </a>

                        <a>
                            <img src="images/network.png" alt="" />
                            <span>My Network</span>
                        </a>

                        <a>
                            <img src="images/jobs.png" alt="" />
                            <span>Jobs</span>
                        </a>

                        <a>
                            <img src="images/message.png" alt="" />
                            <span>Messaging</span>
                        </a>

                        <a>
                            <img src="images/notifs.png" alt="" />
                            <span>Notifications</span>
                        </a>
                        <User>
                            <a>
                                {props.user && props.user.photoURL ?
                                    (<img src={props.user.photoURL} alt="" />
                                    ) :
                                    (<img src="images/user.svg" alt="" />)

                                }
                                <span>
                                    Me
                                </span>
                                <ArrowDropDownIcon onClick={""} />
                            </a>
                        </User>


                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left: 0;
    padding-left: 10px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`


const Content = styled.div`
    display: flex;
    align-items: center;
    
    margin: 0 auto;
    min-height: 100%;
    max-width: 100%;
`
const Logo = styled.img`
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
`

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;

    input {
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        border-radius: 2px;
        color: rgba(0, 0, 0, 0.9);
        width: 200px;
        max-width: 280px;
        padding: 0 8px 0 40px;
        margin-left: 10px;
        height: 33px;
        font-size: 14px;
        border-color: #dce6f1;
        font-weight: 400px;
        vertical-align: text-top;
    }  

`

const Icon = styled.div`
    position: absolute;
    z-index: 1;
    left: 17px;
    top: 5px;
`

const Nav = styled.div`
    margin-right: 20px;
    display: flex;
    background-color: white;

    @media (max-width: 768px) {
       position: fixed;
       left: 0;
       bottom: 0;
       width: 100%;
       justify-content: center;
    }
`

const SignOut = styled.div`
    position: absolute;
    top: 45px;
    right: 5px;
    background: white;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none  ;
`


const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    a {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: space-space-between;
        min-height: 45px;
        min-width: 75px;
        position: relative;
        cursor: pointer;
        margin-top: 10px;

        img {
            height: 22px;
            
        }

        span {
            padding-bottom: 5px;
            height: 8px;
            color: rgba(0, 0, 0, 0.6);
            position: relative;

            &:hover {
                color: black;
            }

            &:after {
                content: "";
                height: 2px;
                background: black;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(1);
            }
        }

            &:hover {
                span:after {
                transform: scaleX(1);
                opacity: 1;
            }
                color: rgba(0, 0, 0, 0.9);
                
            }
        }
       
    

    @media (max-width: 768) {
        min-width: 60px;

    }
`

const User = styled.div`
    margin-top: 5px;
    justify-content: center;
    cursor: pointer;

    img {
        border-radius: 100%;

    }
`


