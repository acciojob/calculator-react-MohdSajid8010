import React, { useState } from "react";


const Calculator = () => {
    const [equation, setEquation] = useState("");

    return (
        <div id="Calculator">
            <div id="topspace">{equation}</div>

            <div id="btns">
                <div id="left-btns">

                    <div className="columns">
                        <button onClick={() => { setEquation(equation.slice(0, equation.length - 1)); }}>CE</button>
                        <button onClick={() => { setEquation(equation + 7); }}  > 7</button>
                        <button onClick={() => { setEquation(equation + 4); }}>  4 </button>
                        <button onClick={() => { setEquation(equation + 1); }} >     1 </button>
                        <button onClick={() => { setEquation(equation + 0); }} >   0 </button>
                    </div>

                    <div className="columns">
                        <button onClick={() => { setEquation(equation + "/"); }}>    /</button>
                        <button onClick={() => { setEquation(equation + 8); }}  >      8 </button>
                        <button onClick={() => { setEquation(equation + 5); }} >     5 </button>
                        <button onClick={() => { setEquation(equation + 2); }}>    2</button>
                        <button onClick={() => { setEquation(equation + "."); }}>    .</button>
                    </div>

                    <div className="columns">
                        <button onClick={() => { setEquation(equation + "*"); }}>X </button>
                        <button onClick={() => { setEquation(equation + 9); }} >     9 </button>
                        <button onClick={() => { setEquation(equation + 6); }} >     6  </button>
                        <button onClick={() => { setEquation(equation + 3); }} >     3 </button>
                        <button onClick={() => { setEquation(""); }} >     C  </button>
                    </div>

                </div>

                <div id="right-btns">
                    <button value="-" onClick={() => { setEquation(equation + "-"); }} >     - </button>
                    {console.log(equation)}
                    <button onClick={() => { setEquation(equation + "+"); }} >     + </button>
                    <button onClick={() => { setEquation(eval(equation)); }}>    = </button>
                </div>
            </div>
        </div>
    );
};
export default Calculator;