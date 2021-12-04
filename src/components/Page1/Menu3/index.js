import React from "react";
import $ from 'jquery'; 

import Button from "./../Button";

import { getImg } from "../../../utils/Helper";
import Styles from './Menu.module.scss';

class Menu3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
    }

    render() {
        let menuClass = Styles.third;
        let activeClass = Styles.thirdactive;

        return (
            <div className={menuClass}>
                <ul>
                    {this.props.items.map((item) => 
                        item.isActive ? <li className={activeClass} key={item.text}><a>{item.text} {item.isParent ? <i></i> : ''}</a></li> : <li key={item.text}><a>{item.text} {item.isParent ? <i></i> : ''}</a></li>
                    )}
                </ul>
            </div>   
        )
    }
}

export default Menu3