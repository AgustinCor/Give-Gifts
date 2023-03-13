import React, { useState } from 'react';

const Comp1 = ({value}) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2 >{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count -1)}>-1</button>
            <button onClick={()=>setCount(value) }>Reset</button>
            <h3>Wsp</h3>
        </div>
    );
};

export default Comp1;