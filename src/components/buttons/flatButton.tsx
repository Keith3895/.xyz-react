import { Component } from "react";


export type ButtonProps = {
    btClass?: string;
    buttonName: string;
    onClick?: () => void;
};

export default class FlatButton extends Component<ButtonProps> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <button type='button' className={`w-36 h-10 bg-white border-4 border-custom-orange-600 justify-center items-center cursor-pointer inline-flex hover:bg-grey active:bg-custom-orange-100 ${this.props.btClass}`}>
                <div className="text-center text-black text-base font-bold font-['Raleway']" >{this.props.buttonName}</div>
            </button>
            
        )
    }
}