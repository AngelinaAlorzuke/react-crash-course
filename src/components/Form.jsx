import React,{useState} from 'react'

function Form() {
    const[data,setData] =useState({
        FirstName:"",
        LastName:"",
        middleName:"",
        Gender:"",
        dateOfBirth:"",
        phoneNumber:"",
        email:"",

    })
    const handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data,[name]:value}) 
    }
    console.log(data)
   
  return (
    
    <div className="h-screen bg-gradient-to-br from-fuchsia-600 to-orange-500 flex justify-center items-center   ">
          <div className='max-w-2xl w-full bg-gray-200 rounded-xl p-10'>
            <div className='bg-fuchsia-500 text-xl  justify-center  items-center rounded-xl p-1 text-center' >
          <h1 >Registration</h1></div>
              <form>
              
                  <div className=' flex flex-col md:flex-row md:gap-3 md:space-y-0 '>

                      <div>
                          <label htmlFor="FirstName" className='form-label'>FirstName</label>
                          <input type="text" name='FirstName' id='FirstName' className='form-input'
                              value={data.FirstName}
                              onChange={handleChange} />
                      </div>
                      <div>
                          <label htmlFor="LastName" className='form-label'>LastName</label>
                          <input type="text" name='LastName' id='LastName' className='form-input'
                              value={data.LastName}
                              onChange={handleChange} />

                      </div>
                      <div>
                          <label htmlFor="MiddleName" className='form-label'>MiddleName</label>
                          <input type="text" name='MiddleNamee' id='MiddleName' className='form-input'
                              value={data.MiddleName}
                              onChange={handleChange} />
                      </div>
                  </div>
                  <div>
                      <label htmlFor="Gender" className='form-label'>Gender</label>
                      <label htmlFor="male" className='form-label'>
                          <input type="radio" name='Gender' value="Male" id='Male'
                              onChange={handleChange} />Male
                      </label>
                      <label htmlFor="female" className='form-label'>
                          <input type="radio" name='Gender' value="female" id='female'
                              onChange={handleChange} />Female
                      </label>
                  </div>
                  <div>
                      <label htmlFor="dateOfBirth" className='form-label'>Date of Birth:</label>
                      <input type="date"
                          name='dateOfBirth'
                         
                          value={data.dateOfBirth}
                          onChange={handleChange} />
                  </div>
                  <div>
                      <label htmlFor="phoneNumber" className='form-label'>Phone Number:</label>
                      <input type="telephone" placeholder='xxx-xxx-xxxx'
                      name='phoneNumber'
                      id="phoneNumber"
                      
                          value={data.phonenumber}
                          onChange={handleChange} />
                  </div>
                  <div>
                      <label htmlFor="email" Email className='form-label'>Email:</label>
                      <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder='angelinaalorzuke@gmail.com'
                          value={data.email}
                          onChange={handleChange} />
                  </div>
                  <div>
                      <button type='submit' className='bg-orange-300 rounded-lg mt-5 p-2'>Register</button>
                  </div>


              </form>
          </div>
      </div>
  )
}

export default Form