import React from 'react'
import Program from './Program';

// {programs} is a [] of 3 programs
const Programs = ({ programs }) => {
    const mapped = programs.map(program => (
        <Program key={program.id} program={program} />
    ))

    return (
        <div className='programs'>{mapped}</div>
    )
}

export default Programs

// const mapped = programs.map(program => (
//     <div className='program'>
//         <ul>
//             <li>id: {program.id}</li>
//             <li>programID: {program.programID}</li>
//             <li>Orchestra: {program.orchestra}</li>
//             <li>Season: {program.season}</li>
//         </ul>
//         <ul>
//             {program.works.map(work => (
//                 <li>
//                     <p>{work.ID}</p>
//                     <p>{work.composerName}</p>
//                     <p>{work.workTitle}</p>
//                     <p>{work.conductorName}</p>
//                 </li>
//             ))}
//         </ul>
//     </div>
// ))