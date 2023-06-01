import React, { useEffect, useState } from 'react';
import './home.scss'
import {View} from '../../component/dataView/View';

import Header from '../../component/header/header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';
import Table from './test';
import Cookies from 'js-cookie';


const getDatafromLS = () => {
    const data = localStorage.getItem('inputArr');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}


function Home() {
    const [inputArr, setInputArr] = useState(getDatafromLS());


    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    const [state, setState] = useState("")


    const [pancard, setPancard] = useState("")

    const [aadhar, setAadhar] = useState("")
    const [dob, setDob] = useState("")
    const [pincode, setPincode] = useState("")
    const [city, setCity] = useState("")
    const [doj, setDoj] = useState("")
    const [id, setId] = useState("")
    const[username,setUsername]=useState();


    
    const handleSubmit = (e) => {
        e.preventDefault();
        Cookies.set('session_id','abc123');
        setUsername('sumit');
        let data={
            id,
            name,
            address,
            state,
            city,
            pincode,
            pancard,
            aadhar,
            dob,
            doj

        }
        setInputArr([...inputArr,data]);
        setId('')
        setName('');
        setAddress('');
        setState('');
        setCity('');
        setPincode('');
        setPancard('');
        setAadhar('');
        setDob('');
        setDoj('');
        console.log(data);

        
        if (!name || !address || !state || !city || !pincode || !pancard || !aadhar || !dob || !doj)
        {
            toast.error("All fields is Mandatry");

        }
        
        else{
            toast.success("Add Successfully");
        }
        
 };

 const deletedata=(id)=>{
    const filterData=inputArr.filter((element,index)=>{
        return element.id!==id;
    })
    setInputArr(filterData);
 }
    useEffect(() => {
        localStorage.setItem('inputArr', JSON.stringify(inputArr));
    }, [inputArr])

   

    return (

        <>
            <Header />
            <div className='home'>
                <div className='container'>
                    <div className="col-12">
                         <div className=" w-100 col-lg-5">
                            <div className="wrapper">
                                <div className='main'>

                                    {/* title */}

                                    <div className="title">
                                        <h1>Welcome{username && `,${username}`}</h1>
                                        <h4>Data Entry Form</h4>
                                    </div>


                                    {/* Input Form */} 
                                    <ToastContainer />

                                    <div className="form">
                                       
                                        <div className="form-input">
                                            <input type="text" name='id' placeholder='id' value={id} onChange={(e) => setId(e.target.value)} />
                                           
                                        </div>
                                        <div className="form-input">
                                            <input type="text" name='name' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="form-input">
                                            <input type="text" name='address' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                        </div>
                                        <div className="form-input">
                                            <input type="text" name='state' placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
                                        </div>
                                        <div className="form-input">
                                            <input type="text" name='city' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                                        </div>

                                        <div className="form-input">
                                            <input type="text" name='pincode' placeholder='Pincode' maxLength={6} value={pincode} onChange={(e) => setPincode(e.target.value)} />
                                        </div>
                                        <div className="form-input">
                                            <input type="text" name='pancard' placeholder='Pancard No.'  maxLength={10} value={pancard} onChange={(e) => setPancard(e.target.value)} />
                                        </div>
                                        <div className="form-input">

                                            <input type="text" name='aadhar' placeholder='Aadhar No.' maxLength={12} value={aadhar} onChange={(e) => setAadhar(e.target.value)} />
                                        </div>
                                        <div className="form-input">
                                            <input type="Date" name='dob' placeholder='DOB' value={dob} onChange={(e) => setDob(e.target.value)} />
                                            <p className='note'>Date Of Birth</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="Date" name='doj' placeholder='DOJ' value={doj} onChange={(e) => setDoj(e.target.value)} />
                                            <p className='note'>Date Of Joining</p>
                                        </div>

                                    </div>

                                    <div className='button '>
                                        <span className='btn btn-warning ' onClick={handleSubmit}>Add Details</span>
                                        <span className='btn btn-danger mx-2'>Clear</span>
                                    </div>
                                </div>

                                <div className='right-side'>
                                    <div className="img">
                                        <img src="./dataentry.gif" alt="" />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>



                


                </div>

            </div>


            <div className='form-table'>
                <div className='container'>
                    <div className="col-12">
                        <div className="d-flex w-100 col-lg-5">
                            <div className="wrapper">
                                <div className='tables'>
                                    <div className='heading'>
                                       <tbody>
                                            <table>
                                                <thead><tr>

                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Address</th>
                                                    <th>City</th>
                                                    <th>State</th>
                                                    <th>Pincode</th>
                                                    <th>Pancard No.</th>
                                                    <th>Aadhar No.</th>
                                                    <th>DOB</th>
                                                    <th>DOJ</th>
                                                   
                                                   
                                                    </tr></thead>
                                                <tbody>
                                                    <View inputData={inputArr} deleteData={deletedata} editData />
                                                </tbody>
                                                
                                               

                                            </table>
                                        
                                        </tbody>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>






                </div>

            </div>
            <Table />


            



        </>

    )

}
export default Home;