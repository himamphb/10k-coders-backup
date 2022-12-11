
import React, { useState } from 'react';
function FunctionChange(){
    const [change, setChange] = useState(true);     
      return (
        <div>
        <button onClick = {() => setChange(!change)}>
          Click Here!
        </button>
        {change?<h1>Welcome to REactJS</h1>:
                <h1>this is function page </h1>}
        </div>
        );
  
}
export default FunctionChange;