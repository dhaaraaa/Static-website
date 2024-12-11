import React, { useState } from "react";
import axios from 'axios'
const FormRegistration = () => {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        subject: '',
        message: ''
    })

    const handlechange =(event)=>{
        console.log(event);
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
        console.log(name, value)
    }

    const handlesubmit = async() => {
        try{
            const {fname,lname,email,subject,message} = formData
            await axios.post('http://localhost:8001/getmessage', {fname,lname,email,subject,message})
        }catch(err){
            console.log(err,'error');
            
        }
    }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-white  md:px-32">
      
      <div
        className={` w-full rounded-md`}>
        
        <div className="w-full mt-8">
          <div className="w-full  flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium  border placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline
                 `}
                type="text"
                placeholder="Your first name"
                onChange={handlechange}
                value={formData.fname}
                name="fname"
              />
              <input
                className={`w-full px-5 py-3 rounded-lg  font-medium border  placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline 
                `}
                type="text"
                placeholder="Your last name"
                onChange={handlechange}
                value={formData.lname}
                name="lname"
              />
            </div>
            <input
              className={`w-full px-5 py-3 rounded-lg  font-medium border  placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline 
              `}
              type="email"
              placeholder="Enter your email"
              onChange={handlechange}
              value={formData.email}
              name="email"
            />
            <input
              className={`w-full px-5 py-3 rounded-lg  font-medium border  placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline 
              `}
              type="text"
              placeholder="Subject"
              onChange={handlechange}
              value={formData.subject}
              name="subject"
            />
            <textarea
              className={`w-full px-5 py-3 rounded-lg  font-medium border placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline
              `}
              placeholder="Message" rows={5}
              onChange={handlechange}
              value={formData.message}
              name="message"
            />
            <button className="mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              
              <span className="ml-3" onClick={handlesubmit}>Send Message</span>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormRegistration;
