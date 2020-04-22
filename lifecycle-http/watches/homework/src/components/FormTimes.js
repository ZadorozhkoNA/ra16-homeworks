import React from 'react';

export default function FormTimes(props) {

    return (
        <form name='formTimes' onSubmit={props.funcSubmit}>
            <label className='FormTimes-form_element' htmlFor='name'>Name:</label>
            <input className='FormTimes-form_element' name='name' />
            <label className='FormTimes-form_element' htmlFor='UTC'>UTC:</label>
            <select className='FormTimes-form_element' name='UTC'>
                <option value='-12'>UTC -12:00</option>
                <option value='-11'>UTC -11:00</option>
                <option value='-10'>UTC -10:00</option>
                <option value='-9'>UTC -09:00</option>
                <option value='-8'>UTC -08:00</option>
                <option value='-7'>UTC -07:00</option>
                <option value='-6'>UTC -06:00</option>
                <option value='-5'>UTC -05:00</option>
                <option value='-4'>UTC -04:00</option>
                <option value='-3'>UTC -03:00</option>
                <option value='-2'>UTC -02:00</option>
                <option value='-1'>UTC -01:00</option>
                <option value='0'>UTC 00:00</option>
                <option value='1'>UTC +01:00</option>
                <option value='2'>UTC +02:00</option>
                <option value='3'>UTC +03:00</option>
                <option value='4'>UTC +04:00</option>
                <option value='5'>UTC +05:00</option>
                <option value='6'>UTC +06:00</option>
                <option value='7'>UTC +07:00</option>
                <option value='8'>UTC +08:00</option>
                <option value='9'>UTC +09:00</option>
                <option value='10'>UTC +10:00</option>
                <option value='11'>UTC +11:00</option>
                <option value='12'>UTC +12:00</option>
            </select>
            <button className='FormTimes-form_element'>Add</button>           
        </form>
    )
}
