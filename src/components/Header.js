import { useState } from 'react'
import Program from './Program';

const Header = ({ programs }) => { //{programs} is a list of objects
    const [searchTerm, setSearchTerm] = useState('')

    const searches = programs.filter((program) => { //{program} is an object in {programs}

        if (searchTerm == "") {
            return program
        } else if (program.orchestra.includes(searchTerm)) {
            return program
        }
    })

    const mapped = searches.map(program => (
        <Program key={program.id} program={program} />
    ))

    return (
        <div>
            <h1>Concert Browser</h1>
            <p>Search all NY Philharmonic concert programs</p>
            <label htmlFor="search">Search programs</label>
            <input type="search" name="search" onChange={event => { setSearchTerm(event.target.value) }} />
            {mapped}
        </div>
    )
}

export default Header

// let entries = Object.values(val)
// let entryList = []
// for (const entry of entries) {
//     entryList.push(entry)
// }


// console.log("entries: " + entries)
// console.log("entryList: " + entryList)
// console.log("val: " + val)