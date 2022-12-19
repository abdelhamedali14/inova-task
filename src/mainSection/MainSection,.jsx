import React from 'react'
import { SearchBar } from './../components/searchBar/SearchBar';
import { Switch } from './../components/swithToMap/Switch';

export const MainSection = () => {
  return (
    <>
      <div className='container'>
        <div className='row py-2 d-flex justify-content-between align-items-center'>
          <div className='col-md-4'><SearchBar/></div>
          <div className='col-md-4'><Switch/></div>
        </div>
      </div>
    </>
  )
}
