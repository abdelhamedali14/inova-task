import './searchbar.css'

export const SearchBar = () => {
  return (
    <>
      <div className='input-group input-group-lg input_wrapper m-5  '>
        <input
          type='text'
          className='form-control py-3 input_field '
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-lg'
          placeholder='search by gym name ,facilities'
        />
        <div className='find_filter_wrapper d-flex '>
          <span className='text-capitalize mt-3 fs-5 px-1 filter'>filter</span>
          <span
            className='input-group-text px-4 btn-form '
            id='inputGroup-sizing-lg  '
          >
            find gyms
          </span>
        </div>
      </div>
    </>
  )
}
