import React from 'react'
import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import AudioPlayer from '../../components/AudioPlayer';
function index(props) {
    return (
        <>
            <SideBar/>
            <Content/>
            <AudioPlayer/>
        </>
    )
}

export default index
