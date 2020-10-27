import React from "react";

import SingleColor from "./SingleColor.js"

const ColorsContainer = ({ list }) => {
    return (
        <section className="colors">
            {list.map((color, index) => (
                <SingleColor key={index} {...color} index={index} />
            ))}
      </section>
    );
};

export default React.memo(ColorsContainer);