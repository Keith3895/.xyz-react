import React from "react";


type TickerTapeProps = {
    tickers: string[]
};

export default class TickerTape extends React.Component<TickerTapeProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="relative flex overflow-x-hidden bg-black bg-opacity-90">
                <div className="py-5 animate-marquee whitespace-nowrap">
                    {this.props.tickers.map((ticker, index) => {
                        return (
                            <span key={index} className="uppercase text-center text-white text-opacity-40 text-3xl font-bold mx-4">{ticker}</span>
                        );
                    }
                    )}
                </div>

                <div className="absolute top-0 py-5 animate-marquee2 whitespace-nowrap">
                    {this.props.tickers.map((ticker, index) => {
                        return (
                            <span key={index} className="uppercase text-center text-white text-opacity-40 text-3xl font-bold mx-4">{ticker}</span>
                        );
                    }
                    )}
                </div>
            </div>
        );
    }
}