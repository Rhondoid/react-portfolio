import React from 'react'
import './ResumePage.css';
// export default function ResumePage() {
//   return (
//     <div className='resumePage'>
      
//     </div>
//   )
// }

function ResumePage() {
  return (
    <div>
      <h2>My Resume</h2>
      <a href="path/to/resume.pdf" download className="resume-link">Download Resume</a>
    </div>
  );
}
