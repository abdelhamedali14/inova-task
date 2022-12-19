import { useState, useEffect } from 'react'
//import css file
import './allgyms.css'
import GymCard from '../gymCard/GymCard'
//paginate file
import ReactPaginate from 'react-paginate'

export const Allgyms = () => {
  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const userPerPage = 8
  const pagesVisited = pageNumber * userPerPage
//fetch data from json server
  async function fetchData () {
    const response = await fetch(' http://localhost:4000/data')
    const data = await response.json()
    setData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const displayGyms = data
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map(gym => {
      return (
        <div className='col-md-3'>
          <GymCard
            img={gym.logo_img_url}
            name={gym.name}
            special={gym.is_hot_deal}
          />
        </div>
      )
    })

    //set count of every paginate page

  const pageCount = Math.ceil(data.length / userPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <>
      <div className='all_gym_wrapper'>
        <div className='container'>
          <div className='row'>{displayGyms}</div>
        </div>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBtns'}
          previousLinkClassName={'previousBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </>
  )
}
