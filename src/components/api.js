import { useState, useEffect } from 'react'
import axios from 'axios'

export const LoadImages = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get('https://api.unsplash.com/photos?client_id=Cmc5roSkhsZOpcoxogMmuluiNTN--_p4V_tIVfr93m0')
            .then((data) => {
                setState(data.data);
            })
    }, [])

    return state
}

export const SearchImages = (query) => {
    const [Searchstate, setSearchState] = useState([])
    useEffect(() => {
        axios.get('https://api.unsplash.com/search/photos?query=' + query + '&client_id=Cmc5roSkhsZOpcoxogMmuluiNTN--_p4V_tIVfr93m0')
            .then((data) => {
                setSearchState(data.data.results);
            })
    }, [query])

    return Searchstate;
}



