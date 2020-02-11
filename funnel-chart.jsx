/** @format */

import React from "react";

export default function Funnelchart() {
    const funnelValue = [90, 75, 65, 30];

    //function to spit out polygon value for clipPath
    const polygonValue = funnelValue.map((item, index, array) => {
        const valReduceLeft = (100 - item) / 2;
        const valReduceRight = (100 - array[index + 1]) / 2;
        if (item === array[array.length - 1]) {
            return {
                value: item,
                ltop: valReduceLeft,
                lbottom: 100 - valReduceLeft,
                rtop: valReduceLeft,
                rbottom: 100 - valReduceLeft,
            };
        }
        return {
            value: item,
            ltop: valReduceLeft,
            lbottom: 100 - valReduceLeft,
            rtop: valReduceRight,
            rbottom: 100 - valReduceRight,
        };
    });
    const funnelDisplay = polygonValue.map((item, index) => {
        const { value, ltop, lbottom, rtop, rbottom } = item;
        return (
            <div key={value} className="graph-main">
                <div
                    className={`box-graph-${index}`}
                    style={{
                        clipPath: `polygon(0 ${ltop}%, 100% ${rtop}%, 100% ${rbottom}%, 0 ${lbottom}%)`,
                    }}
                >
                    <p>{`${value}%`}</p>
                </div>
            </div>
        );
    });
    return <div>{funnelDisplay()}</div>;
}
