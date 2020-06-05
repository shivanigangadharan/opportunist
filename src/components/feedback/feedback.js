import React, { useState } from 'react';
import styled from 'styled-components';
import '../feedback/feedback.css';

const Button = styled.button`
    background: dodgerblue;
    border: 1px solid dodgerblue;
    color: white;
    font-size: 110%;
    width: 45px;
    height: 40px;
    padding: 1px;
    border-radius: 0px 8px 8px 8px;
    z-index: 10;
    outline: none;
`
const Main = styled.div`
position: fixed;
bottom: 0;
margin-bottom: 30px;
margin-left: 30px;
z-index: 1;
color: black;
`
const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid dodgerblue;
    border-left: 8px solid transparent;
    z-index: 10;
`
const Flex = styled.div`
    display: flex;
`
const Rating = styled.button`
    height: 40px;
    width: 40px;
    background: none;
    font-size: 25px;
    margin: 5px;
    border: none;
    outline:none;
    opacity: 0.5;
    :hover{
        opacity: 1;
        transition-duration: 0.2s;
    }
`
const Input = styled.input`
    border-bottom: 1.5px solid grey;
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    width: 100%;
`
const Hide = styled.div`

`
const Send = styled.input`
    background: dodgerblue;
    color: white;
    border: 1px solid dodgerblue;
    border-radius: 3px;
    padding: 5px;
    outline: none;
`
function Feedback() {
    const [show, setShow] = useState('close');
    const [drop, setDrop] = useState('hide');
    const [face, setFace] = useState('');
    const [desc, setDesc] = useState('');
    function Toggle() {
        if (show == 'open') {
            setShow('close');
        }
        else {
            setShow('open');
        }
    }
    function addDrop(e) {
        setDrop('drop');
        setFace(e);
    }
    function handleSubmit() {
        console.log('desc = ', desc);
        console.log('face = ', face);
    }
    return (
        <Main>
            <div className={show}>
                <center>   How was your experience?
                <form>
                        <Flex>
                            <Rating type="button" onClick={e => { addDrop('hate') }}> &#128544; </Rating>
                            <Rating type="button" onClick={e => { addDrop('dislike') }}> &#128577; </Rating>
                            <Rating type="button" onClick={e => { addDrop('neutral') }}> &#128528; </Rating>
                            <Rating type="button" onClick={e => { addDrop('like') }}> &#128578; </Rating>
                            <Rating type="button" onClick={e => { addDrop('love') }}> &#128525; </Rating>
                        </Flex>
                        <Hide className={drop}>
                            <Input onChange={e => setDesc(e.target.value)} type="text" placeholder="Describe your experience..." /><br /><br />
                            <Send onClick={handleSubmit} type="submit" value="Send" />
                        </Hide>
                    </form>
                </center>
            </div><br />
            <Flex><Triangle> </Triangle> <Button onClick={Toggle}> ^_^ </Button></Flex>
        </Main>
    )
}

export default Feedback;