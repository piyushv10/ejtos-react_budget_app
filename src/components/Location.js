import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
      console.log(val);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }

    const containerStyle = {
      backgroundColor: '#4dd74d', // Green background color
      color: 'white', // White text color
      padding: '0.5rem', // Padding for content
      borderRadius: '5px', // Rounded corners
      display: 'inline-block', // Display as inline block
    };
    
    const selectStyle = {
    backgroundColor: '#4dd74d', // Green background color for select
    color: 'white', // White text color for select
    border: 'none', // Remove border
    borderRadius: '5px', // Rounded corners
    padding: '0.5rem', // Padding for select
    transition: 'color 0.3s', // Smooth transition for color change
    };
    
    const optionStyle = {
      backgroundColor: '#4dd74d', // Green background color for options
      color: 'white', // White text color for options
      padding: '0.5rem', // Padding for options
    };

  return (
        <div className='alert alert-secondary' style = {containerStyle}> 
        Currency<select name="Currency" id="Currency" onChange={event=>changeLocation(event.target.value)} style={selectStyle}>
        <option value="$"style={optionStyle}>$ Dollar</option>
        <option value="£"style={optionStyle}>£ Pound</option>
        <option value="€"style={optionStyle}>€ Euro</option>
        <option value="₹"style={optionStyle}>₹ Ruppee</option>
      </select>	
      
    </div>
    );
};

export default Location;