// import React, { useEffect, useState } from 'react';
// import CardOne from './CardOne';
// import CardTwo from './CardTwo';

// const ScrollBackground = () => {
//   const [bgColor, setBgColor] = useState('#ff608c');

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition < 100) {
//       setBgColor('#00c1b5');
//     } else if (scrollPosition >= 100 && scrollPosition < 200) {
//       setBgColor('#ff6519');
//     } else if (scrollPosition >= 200 && scrollPosition < 300) {
//       setBgColor('#ffbe00');
//     } else if (scrollPosition >= 300 && scrollPosition < 400) {
//       setBgColor('#1d3fbb');
//     } else if (scrollPosition >= 400 && scrollPosition < 500) {
//       setBgColor('#ffffff');
//     } else {
//       setBgColor('#bd040f');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//         <>
//     <div style={{ backgroundColor: bgColor, height: '200vh', transition: 'background-color 0.5s' }}>
//      <CardOne/>
//     </div>
    
//     </>
//   );
// };

// export default ScrollBackground;
