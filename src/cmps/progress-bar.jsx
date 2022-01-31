import React from "react";

export function ProgressBar(props) {
    const { completed } = props;

    return (
        <section className="progress-bar">
            <div className="container-style">
                <div className="filler-style" style={{ width: `${completed}%` }}>

                </div>
            </div>
        </section>
    )

};

