import React, {useState, useEffect} from 'react'

const SearchComponent = () => {
  
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")


  const URL = 'https://rickandmortyapi.com'
  

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    
    setUsers(data)
  }   
   
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   
   const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Busqueda' className='form-control'/>
        <table className='table table-striped table-hover mt-4 shadow-lg'>
            <tbody>
                { results.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default SearchComponent