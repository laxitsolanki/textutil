import React, { useState } from 'react'

const Form = (props) => {

    const [text,settext] = useState(' ');

//uppercase

    const headlingupcase = () =>{
        // console.log('click' + text);
        let newtext =text.toUpperCase();
        settext(newtext);
    }

    // lowercase

    const headlinlocase = () => {
      console.log("click");
      let newtext = text.toLocaleLowerCase();
      settext(newtext);
    }
    // clear

    const headlinclear = () => {
      console.log("click");
      let newtext = " ";
      settext(newtext);
    }

    // click button 
    const heandlclick = (event) => {
        console.log('on click' );
        settext(event.target.value)
    }
  return (
    <>
    <div className='container'>
      <div class="mb-3" >
<h1 className='container '>{props.heading}</h1>
  <textarea className="form-control" value={text}  onChange={heandlclick} id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
<button type="button" className="btn btn-primary mx-1" onClick={headlingupcase}>upcase </button>
<button type="button" className="btn btn-primary mx-1" onClick={headlinlocase}>locase </button>
<button type="button" className="btn btn-primary mx-1" onClick={headlinclear}>clear </button>

    </div>

    <div className='container'>
      <h2>your text summry </h2>
      <p> {text.split(" ").length} words and  {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} minutes read</p>
      
    <div className='container b-2'> 
    <div className="card">
  <div class="card-body">
    <h5 class="card-title">preview</h5>
    <p class="card-text">{text}</p>
  </div>
</div>
</div>
 </div>
  </>
  )
}

export default Form
