import React from "react";


export type ButtonProps = {
    btClass?: string;
    buttonName: string;
    onClick?: () => void;
    href?: string;
    download?: string;
};

export default class FlatButton extends React.Component<ButtonProps> {
    constructor(props: any) {
        super(props);
    }
    render() {
        if (this.props.href) {
            return (<a href={this.props.href} download={this.props.download} className={`w-36 h-10 bg-white border-4 border-custom-orange-600 justify-center items-center cursor-pointer inline-flex hover:bg-grey active:bg-custom-orange-100 ${this.props.btClass}`}>
                <div className="text-center text-black text-base font-bold " >{this.props.buttonName}</div>
            </a>);
        }
        else {
            return (<button onClick={this.props.onClick} type='button' className={`w-36 h-10 bg-white border-4 border-custom-orange-600 justify-center items-center cursor-pointer inline-flex hover:bg-grey active:bg-custom-orange-100 ${this.props.btClass}`}>
                <div className="text-center text-black text-base font-bold " >{this.props.buttonName}</div>
            </button>);
        }

    }
}