import React, { useState } from 'react';
//import Item from '../../pages/test';

export const View = ({ inputData, deleteData,editData }) => {
  const[editFormData,setEditmode]=useState(false);
  editData=editFormData;
  function editUpdate(){
    setEditmode(!editData);
  }
  
  return (
    <>
      {inputData.map((data) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td contentEditable={editData}>{data.name}</td>
            <td contentEditable={editData}>{data.address}</td>
            <td contentEditable={editData}>{data.state}</td>
            <td contentEditable={editData}>{data.city}</td>
            <td contentEditable={editData}>{data.pincode}</td>
            <td contentEditable={editData}>{data.pancard}</td>
            <td contentEditable={editData}>{data.aadhar}</td>
            <td contentEditable={editData}>{data.dob}</td>
            <td contentEditable={editData}>{data.doj}</td>
            <td style={{ windexth: '200px' }}>
              <span
                className='btn btn-danger mx-2'
                onClick={() => deleteData(data.id)}
              >
                Delete
              </span>
              <span
                className='btn btn-warning mx-2'
               onClick={editUpdate}
              >
              {editData?"Upadate":"Edit"}
              </span>
            </td>
          </tr>
        );
      })}
    </>
  );
};