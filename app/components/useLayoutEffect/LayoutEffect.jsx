import React, { useRef, useEffect } from "react";

function AutoFocusInput() {
  // Create a reference to the input element
  const inputRef = useRef(null);

  // Focus the input when the component mounts (after render)
  useEffect(() => {
    inputRef.current.focus();  // Focus the input field
  }, []);

  return <input ref={inputRef} type="text" placeholder="Focus me!" />;
}

export default AutoFocusInput;

// import React, { useRef, useEffect } from "react";

// function FocusInput() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // Automatically focus on the input field when the component mounts
//     inputRef.current.focus();
//   }, []);

//   return <input ref={inputRef} type="text" placeholder="Focus me!" />;
// }

// export default FocusInput;


// import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

// function ModalWithEffect() {
//   const modalRef = useRef();
//   const [style, setStyle] = useState({});

//   // Simulate a delayed update (like a slow calculation or fetch)
//   useEffect(() => {
//     setTimeout(() => {
//       const { offsetWidth, offsetHeight } = modalRef.current;
//       setStyle({
//         position: "absolute",
//         top: `calc(50% - ${offsetHeight / 2}px)`,
//         left: `calc(50% - ${offsetWidth / 2}px)`,
//       });
//     }, 500); // Delay the update to simulate slowness
//   }, []); // Runs after render

//   return (
//     <div
//       ref={modalRef}
//       style={{
//         ...style,
//         width: "300px",
//         height: "150px",
//         backgroundColor: "lightblue",
//       }}
//     >
//       <h1>Centered Modal (useEffect with delay)</h1>
//       <p>This modal may flicker because of the delayed update.</p>
//     </div>
//   );
// }

// function ModalWithLayoutEffect() {
//   const modalRef = useRef();
//   const [style, setStyle] = useState({});

//   // Simulate a delayed update with useLayoutEffect (same delay)
//   useLayoutEffect(() => {
//     setTimeout(() => {
//       const { offsetWidth, offsetHeight } = modalRef.current;
//       setStyle({
//         position: "absolute",
//         top: `calc(50% - ${offsetHeight / 2}px)`,
//         left: `calc(50% - ${offsetWidth / 2}px)`,
//       });
//     }, 500); // Delay the update to simulate slowness
//   }, []); // Runs before the paint

//   return (
//     <div
//       ref={modalRef}
//       style={{
//         ...style,
//         width: "300px",
//         height: "150px",
//         backgroundColor: "lightblue",
//       }}
//     >
//       <h1>Centered Modal (useLayoutEffect with delay)</h1>
//       <p>This modal should not flicker and will be positioned correctly before paint.</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h2>Testing useEffect vs useLayoutEffect with Delayed Updates</h2>
//       <ModalWithEffect />
//       <ModalWithLayoutEffect />
//     </div>
//   );
// }


// // // useLayoutEffect, runs synchronously after a render but before
// // // the screen is updated.

// // // useEffect runs asynchronously and after a render is painted to the screen.

// // import React, { useState, useLayoutEffect, useEffect } from "react";
// // import styled from "styled-components";

// // const LayoutEffect = () => {
// //   const [num, setNum] = useState(0);

// //   useLayoutEffect(() => {
// //     if (num === 0) setNum(num + Math.random() * 100);
// //   }, [num]);

// //   return (
// //     <Wrapper>
// //       <p>my new random number {num}</p>
// //       <button onClick={() => setNum(0)}>random num</button>
// //     </Wrapper>
// //   );
// // };

// // const Wrapper = styled.section``;

// // export default LayoutEffect;