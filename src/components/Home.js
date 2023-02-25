
import React, { useState } from "react";

import { LoadImages, SearchImages } from './api'
import Data from "./Data";


const Home = () => {

    const [searchQ, setSearchQ] = useState()
    const [query, setQuery] = useState()

    const datas = LoadImages();

    const search = () => {
        setSearchQ(query);

    }
    const searchData = SearchImages(searchQ);

    const reset = () => {
        setSearchQ('');
    }
    return (
        <React.Fragment>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Image Search App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <form className="d-flex" onSubmit={(e) => { e.preventDefault(); search() }}>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setQuery(e.target.value)} />
                        <button className="btn btn-success" type="submit">Search</button>
                        <button className="btn btn-outline-danger" type="button" onClick={reset}>{searchQ && ('Reset')}</button>
                    </form>
                </div>

            </nav>


            {searchData && searchQ && searchData.length == 0 && <p className="text-center col-12">No result found</p>}
            <div className="Container">
                {searchQ ?
                    searchData.map((data, key) => (
                        <Data data={data} key={key} />
                    )) : datas.map((data, key) => (
                        <Data data={data} key={key} />
                    ))}
            </div>

        </React.Fragment >
    )
}

export default Home