import React from 'react'

const Data = ({ data }) => {

    return (

        <div className="card" style={{ width: '18rem', height: '50%' }}>
            {/* <img src={data.urls.thumb} className="card-img-top" alt="..." onClick={handleDetails}  /> */}
            <a href={data.urls.regular} target="_blank" rel="noreferrer" >

                <img className="card-img-top" src={data.urls.thumb} alt={data.alt_description} style={{ cursor: 'pointer' }} />
            </a>
            <div className="card-body">
                <h5 className="card-title">Username:{data.user.username}</h5>
                <p className="card-text">Likes👍:{data.likes}</p>

            </div>
        </div>

    )
}

export default Data;