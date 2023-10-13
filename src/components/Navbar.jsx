import React from 'react'

const Navbar = ({filtering ,uniqueData}) => {
  return (
    <>
      <div className="container d-flex justify-content-center  main">
            <nav className='text-center p-2 border'>
                {
                    uniqueData.map((value)=>{
                        return(
                            <button className="btn head" onClick={()=>filtering(value)}>{value}</button>
                        )
                       
                    })
                }
            </nav>
        </div>
    </>
  )
}

export default Navbar
