import React, {useState, useEffect} from 'react'

const SearchComponent = ({people, setPeople, onChangePeople}) => {
  //setear los hooks useState
  const [search, setSearch] = useState("")

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  let results = people

    //metodo de filtrado
  useEffect(function () {
    results = results.filter ((dato) =>
    dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    ) 
    onChangePeople(results)
  }, [search])
  
  //renderizamos la vista
  return (
    <div>
      <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'></input>
    </div>
  )
}

export default SearchComponent