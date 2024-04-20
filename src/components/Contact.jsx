import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>

      <main>
        <h1>Contact Me </h1>
        <form action="">
            <div>
              <label htmlFor=""> Name</label>
              <input type="text" required placeholder='Enter Name' />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" required placeholder='Enter email' />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <input type="text" required placeholder='Tell us about your query....' />
            </div>
            <button type='submit'>Send</button>
          
        </form>
      </main> 
      
    </div>
  )
}

export default Contact
