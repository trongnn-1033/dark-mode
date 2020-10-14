import React, { useState}  from 'react'
import Content from './Content';
import ToggleSwitch from '../ToggleSwitch';

function ContentComponent() {
    const [value, setValue] = useState("")

    return (
        <Content length={value}>
            <div className="content-header">
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
                <div className="content-header__search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search music" value={value} onChange={event => setValue(event.target.value)}  />
                </div>
                <div className="content-header__right">
                    <i class="fas fa-cloud-moon"></i>
                    <ToggleSwitch/>
                    <i className="fas fa-ellipsis-v" ></i>
                </div>
            </div>
            
        </Content>
    )
}


export default ContentComponent;

