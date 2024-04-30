import React from 'react'

export default function Filter(props) {
  return (
    <div>
         <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
               <input type="radio" className="btn-check" name="btnradio" id="btnradio1"  />
               <label className="btn btn-outline-primary" htmlFor="btnradio1" onClick={()=>{props.onChangeUrl("")}}>All</label>

               <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
               <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={()=>{props.onChangeUrl("clothes")}}>Clothes</label>

               <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
               <label className="btn btn-outline-primary" htmlFor="btnradio3" onClick={()=>{props.onChangeUrl("mobile")}}>Mobile</label>

               <input type="radio" className="btn-check" name="btnradio" id="btnradio4"/>
               <label className="btn btn-outline-primary" htmlFor="btnradio4" onClick={()=>{props.onChangeUrl("tv")}}>TV</label>
         </div>
    </div>
  )
}
