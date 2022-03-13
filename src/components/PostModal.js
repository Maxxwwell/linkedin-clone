import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';

function PostModal(props) {

    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");

    const handleChange = (event) => {
        const image = event.target.files[0];

        if (image === '' || image === undefined) {
            alert(`not an image, the file is a ${typeof image}`);
            return;
        }
        setShareImage(image);
    }

    const reset = (event) => {
        setEditorText("")
        props.handleClick(event);
    }

    return (
        <>
            {
                props.showModal === "open" &&
                <Container>
                    <Contetnt>
                        <Header>
                            <h2>Create a post</h2>
                            <Button
                                onClick={(event) => { reset(event) }}
                                variant="outlined">
                                <CloseIcon />
                            </Button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                <img src="images/user.svg" alt="" />
                                <span>Name</span>
                            </UserInfo>
                            <Editor>
                                <textarea value={editorText}
                                    onChange={(event) => setEditorText(event.target.value)}
                                    placeholder="What do you want to talk about?"
                                />
                                <UploadImage>
                                    <input type="file"
                                        accept="image/gif, image/jpeg, image/png, image/jpg"
                                        id="file"
                                        style={{ display: "none" }}
                                        onChange={handleChange}
                                    />
                                    <p>
                                        <label htmlFor="file">Select an image to share</label>
                                    </p>
                                    {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}
                                </UploadImage>

                            </Editor>
                        </SharedContent>
                        <SharedCreation>
                            <AttachAssets>
                                <Button>
                                    <AddAPhotoIcon />
                                </Button>
                                <Button>
                                    <VideoLibraryIcon />
                                </Button>
                            </AttachAssets>
                            <ShareComment>
                                <Button>
                                    <ModeCommentRoundedIcon />
                                    anyone
                                </Button>
                            </ShareComment>
                            <Button variant="outlined"
                                disabled={!editorText ? true : false}
                                style={{
                                    borderRadius: '20px',
                                    height: '45px',
                                    background: !editorText ? "lightgray" : '#0a66c2',
                                    color: 'white',
                                }}>
                                Post
                            </Button>
                        </SharedCreation>
                    </Contetnt>
                </Container>
            }
        </>
    );
}

export default PostModal;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.2s;
`

const Contetnt = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;

    Button {
        border-color: lightgray;
        color: rgba(0, 0, 0, 0.15);

        &:hover {
            border-color: lightgray;

        }
    }
`

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;

   
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;

    img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }

    span {
        font-weight: 600;
        font-size: 16;
        line-height: 1.5;
        margin-left: 5px;
    }
`
const SharedCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;

`

const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;

    Button {
        display: flex;
        align-items: center;
        height: 40px;
        border: 1px solid lightgray;
        min-width: auto;
        color: rgba(0, 0, 0, 0.5);
    }
`

const ShareComment = styled.div`
    padding-left: 8px;
    margin-top: 8px;
    
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);

    Button {
        display: flex;
        align-items: center;
        height: 40px;
        border: 1px solid lightgray;
        min-width: auto;
        color: rgba(0, 0, 0, 0.5);
        text-transform: inherit;
    }
`

const Editor = styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
        padding: 10px;
    }

    input {
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`

const UploadImage = styled.div`
    text-align: center;
    img {
        width: 100%;
    }
`