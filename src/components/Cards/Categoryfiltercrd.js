import React from 'react'

const Categoryfiltercrd = ({Filtermenu}) => {

  const handleClick = (e) => {
    e.currentTarget.classList.toggle('filteractive');
  };
   
  return (
    <>
    {Filtermenu.map((curElem) => {
        return (
        <>
            <div key={curElem.id} className="filteryselbtno" onClick={handleClick}>{curElem.name}</div>
        </>
        )
    })}

    </>
  )


 
}

export default Categoryfiltercrd