import React from 'react'
import './toggle.css'

const Toogle = () => {
    const setDarkMode=()=>{
        document.querySelector('body').setAttribute('data-theme','dark')
    }
    const setLightMode=()=>{
        document.querySelector('body').setAttribute('data-theme','light')
    }
    const togglTeheme=e=>{
      if(e.target.checked)setDarkMode();
      else setLightMode()
    }
    return (
        <div className='wrapper mx-2 m-lg-0'>
            <label className="switch">
                <input type="checkbox" onChange={togglTeheme}/>
                    <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toogle
