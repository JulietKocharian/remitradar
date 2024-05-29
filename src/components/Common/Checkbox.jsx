import React, { useState } from 'react';

const RedCheckbox = ({ label, isChecked, onChange }) => {
    const checkboxId = label.replace(/\s+/g, '-').toLowerCase();
    const handleCheckboxChange = () => {
        onChange(!isChecked);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <input
                id={checkboxId}
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ display: 'none' }}
            />
            <label
                htmlFor={checkboxId}
                style={{
                    cursor: 'pointer',
                    display: 'inline-block',
                    minWidth: '20px', // Use minWidth instead of width
                    minHeight: '20px', // 
                    border: '2px solid #0079ff',
                    borderRadius: '3px',
                    marginRight: '10px',
                    position: 'relative',
                }}
            >
                {isChecked && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0079ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                )}
            </label>
            <span onClick={handleCheckboxChange} style={{cursor: 'pointer'}}>{label}</span>
        </div>
    );
};

const CheckboxGroup = () => {
    const initialCheckboxes = [
        { label: 'By signing up, you allow RemitRadar to access your Public Profile.', isChecked: false },
        { label: 'I confirm that I am 18 years old or over.', isChecked: false },
        { label: 'To confirm please confirm you have read and accepted all our Privacy Policy', isChecked: false },
    ];


    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
    console.log(checkboxes)

    const handleCheckboxChange = (index, isChecked) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].isChecked = isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div className="col-lg-6 col-12 col-md-8 col-sm-8 flex-lg-row">
            {checkboxes.map((checkbox, index) => (
                <div className="mt-30" key={index}>
                    <RedCheckbox
                        label={checkbox.label}
                        isChecked={checkbox.isChecked}
                        onChange={(isChecked) => handleCheckboxChange(index, isChecked)}
                    />
                </div>
            ))}
        </div>
    );
};

export default CheckboxGroup;
