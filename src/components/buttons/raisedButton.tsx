'use client';
import { ButtonProps } from "./flatButton";
import React from "react";

export default class RaisedButton extends React.Component<ButtonProps> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <button onClick={this.props.onClick} type='button' className="w-36 h-10 bg-custom-orange-600  justify-center items-center inline-flex cursor-pointer hover:bg-custom-orange-400 active:bg-custom-orange-700">
                <div className="text-center text-black text-base font-bold ">{this.props.buttonName}</div>
            </button>
        )
    }
}