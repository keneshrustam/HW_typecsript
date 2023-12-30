import {add, subtract} from './math'
import type { IMathOperation } from './math'

import { Person } from './person'
import type { IPerson  } from './person'

const res = add(333, 111)
const res2 = subtract(223, 41)

console.log(Person)

const Log = () => {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            {res}<br/>
            {res2}
        </div>
    )
}

export default Log