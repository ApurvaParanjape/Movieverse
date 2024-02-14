import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
      e.preventDefault();
        navigate(`/search/${search}`)
    }

  return (
    <div className='container my-3' onSubmit={handleSubmit}>
          <form className="form-inline my-2 w-50 d-flex justify-content-lg-between">
      <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button className="btn btn-outline-success mt-2 mx-2" type="submit">Search</button>
    </form>

    </div>
  )
}

export default Search
