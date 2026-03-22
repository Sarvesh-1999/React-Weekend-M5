import React from 'react'

const ControlledForms2 = () => {
  return (
    <div>
        <h1>ControlledForms 2</h1>
        <form>
            <input type="text" placeholder='Enter Username' name='username'/>
            <br />
            <input type="text" placeholder='Enter Email' name='email'/>
            <br />
            <input type="text" placeholder='Enter Password' name='password'/>
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForms2