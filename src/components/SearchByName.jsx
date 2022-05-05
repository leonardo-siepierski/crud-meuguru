import Header from "./Header";

function SearchByName() {
  return (
    <div>
      <Header />
      <div className='position-absolute top-50 start-50 translate-middle'>
      <form>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Search by name:
            <input 
              type='text'
              className='form-control'
              id='name'
              name='name'
            />
          </label>
          <div>
            <button type='submit' className='btn btn-success'>Search</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SearchByName;