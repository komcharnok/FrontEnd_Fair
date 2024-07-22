import React from 'react'
// import { useState } from 'react'
import { create } from 'zustand'

// export default function About() {
//   const [count, setCound] = useState(0);

//   const hdlplus = () => {
//     setCound(count + 1);
//   }

//   const hdlminus = () => {
//     if (count === 0) {
//       return 0;
//     } else {
//       setCound(count - 1);

//     }
//   }
//   const hdlClear = () => {
//     setCound(0);
//   }

//   return (
//     <>
//       <div className='gap-3'>
//         <button className='btn' onClick={hdlplus}>+</button>
//         <button className='btn' onClick={hdlminus}>-</button>
//         <button className='btn' onClick={hdlClear}>cl</button>
//         <p>{count}</p>
//       </div>
//     </>
//   )
// }


const useCound = create((set) => ({
  cound: 0,
  addCound: () => set((state) => ({ cound: state.cound + 1 })),
  minusCound: () => set(state => ({ cound: state.cound > 0 ? state.cound - 1 : 0 })),
  cls: () => set(state => ({ cound: state.cound = 0 }))
}));

export default function About() {

  const { cound, addCound,minusCound,cls } = useCound()

  return (
    <>
      <div className='gap-3'>
        <button className='btn' onClick={addCound}>+</button>
        <button className='btn' onClick={minusCound}>-</button>
        <button className='btn' onClick={cls}>cl</button>
        <p>จำนวนเลข : {cound}</p>
      </div>
    </>
  )
}


