import React from 'react';
import ReactDOM from 'react-dom';
import css from './Style.module.css';

const ShownOnStage = () => {
    return (
        <div className={css.imageShownOnStage}></div>
    )
}, Surface = props => {
    return (
        <div className={css.basketBox}>
            <div> {props.children} </div>
        </div>
    )
}, Element = document.getElementById('overlays'), BasketBox = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<ShownOnStage/>, Element)}
            {ReactDOM.createPortal(<Surface> {props.children} </Surface>, Element)}
        </>
    )
};

export default BasketBox;