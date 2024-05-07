import React, { useState } from 'react';
import './TextUtils.css';
// import Nav from './Navbar'


function Reminders() {
    const [inputEle, setInputEle] = useState('');
    // const [msg, setMsg] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const Cap = () => {
        const data = inputEle.toUpperCase();
        setInputEle(data);
    };

    const low = () => {
        setInputEle(inputEle.toLowerCase());
        // setMsg('Successfully converted to Lowercase');
    };

    const long = () => {
        setInputEle(`Length: ${inputEle.length}`);
    };

    const Reverse = () => {
        setInputEle(inputEle.split('').reverse().join(''));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(inputEle);
        // setMsg('Copied to clipboard!');
    };

    const clearText = () => {
        setInputEle('');
    
      };

    return (
        <>
        {/* <Nav/> */}
        <div className={`container-gk ${darkMode ? 'dark-mode' : ''}`}>


            {/* <h5 id='msg-text'>{msg}</h5> */}
            <div className="form-check form-switch" id='toggle-text'>
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>

            <div id='main-text'>
                <h2>Enter Your Text</h2>
                {/* <div id='box-text'> */}
                    <textarea
                        id='inp-text'
                        value={inputEle}
                        onChange={(e) => setInputEle(e.target.value)}
                        placeholder='Enter your Text'
                    />
                {/* </div> */}

                <div id='bttn-btn'>
                    <button className='btn-1' onClick={Cap}>UPPERCASE</button>
                    <button className='btn-1' onClick={low}>lowercase</button>
                    <button className='btn-1' onClick={long}>Length</button>
                    <button className='btn-1' onClick={Reverse}>Reverse Text</button>

                    <button className='btn-1' onClick={copyToClipboard}>Copy Text</button>

                    <button className='btn-1' onClick={clearText}>Clear Text</button>
                </div>

                <div className='text-text'>
                    <h3>Text Summary</h3>
                    <p>Words: {inputEle.split(" ").filter(word => word !== '').length}, Characters: {inputEle.length}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Reminders;

