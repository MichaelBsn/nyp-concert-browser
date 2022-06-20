import Works from './Works';

const Program = ({ program }) => {
    const general = <ul>
        <li>id: {program.id}</li>
        <li>programID: {program.programID}</li>
        <li>Orchestra: {program.orchestra}</li>
        <li>Season: {program.season}</li>
    </ul>
    const gram = <>
        {general}
        <Works works={program.works} />
    </>
    return (
        <div className='program'>{gram}</div>
    )
}

export default Program

