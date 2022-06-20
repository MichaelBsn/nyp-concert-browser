import React from 'react'

const Works = ({ works }) => {
    const myworks = <ul>
        Works: {works.map(work => (
            <li className='work' key={work.ID}>
                <p>Work ID: {work.ID}</p>
                <p>Composer: {work.composerName}</p>
                <p>Title: {work.workTitle}</p>
                <p>Conductor: {work.conductorName}</p>
                <div>Soloists: <ul>{work.soloists.map(soloist => (
                    <>
                        <li>Name: {soloist.soloistName}</li>
                        <li>Instrument: {soloist.soloistInstrument}</li>
                    </>
                ))}</ul></div>
            </li>
        ))}
    </ul>
    return (
        <div className='works'>{myworks}</div>
    )
}

export default Works