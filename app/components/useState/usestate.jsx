import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect(() =>{
  //   document.title = count
  // })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

// import React, { useState } from "react"; 
// import styled from "styled-components";
// import { BiPlusMedical } from "react-icons/bi";
// import { FaMinus } from "react-icons/fa";

// const UseState = () => {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <Wrapper>
//         <div className="container">
//           <button onClick={() => setNumber(number + 1)}>
//             <BiPlusMedical className="icon" />
//           </button>
//           <h1>{number}</h1>
//           <button onClick={() => setNumber(number - 1)} disabled={number === 0}>
//             <FaMinus className="icon minus_icon" />
//           </button>
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.section`
//   .container {
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 4.8rem;
//   }
//   .icon {
//     font-size: 2rem;
//   }

//   h1 {
//     font-size: 5.4rem;
//     color: #2e86c1;
//   }
// `;

// export default UseState;