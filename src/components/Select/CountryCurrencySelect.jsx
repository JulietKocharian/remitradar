import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import WorldFlag from 'react-world-flags';

import data from '@/data/Countries/countries.json';

const countryOptions = data.map(country => ({
    value: country.code,
    label: country.name,
    currency: country.currency
}));

const currencyOptions = Array.from(new Set(data.map(country => country.currency))).map(currency => ({
    value: currency,
    label: currency
}));

const customStyles = {
    control: (provided, { isFocused }) => ({
        ...provided,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        minHeight: '40px',
        height: '48px',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: 20,
        boxShadow: '0px 5px 26.1px 3.9px rgba(23, 29, 113, 0.05)',
        padding: 0,
        paddingInline: 8,
        background: 'rgba(255, 255, 255, 0.17)',
        '&:hover': {
            borderColor: '#ccc'
        },
        windth: '100%',
    }),
    valueContainer: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
    }),
    singleValue: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
    }),
    input: (provided) => ({
        ...provided,
        margin: '0px',
        padding: '0px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        height: '40px',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: '8px',
    }),
};

const formatOptionLabel = ({ value, label }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <WorldFlag code={value} style={{ marginRight: 10, width: 20, height: 15 }} />
        {label}
    </div>
);

const CountryCurrencySelect = ({ defaultValue }) => {
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCurrency, setSelectedCurrency] = useState({ value: defaultValue.currency, label: defaultValue.currency });
    const [currencyValue, setCurrencyValue] = useState('');

    useEffect(() => {
        const country = countryOptions.find(country => country.label === defaultValue.name);
        console.log('country', country)
        setSelectedCountry(country ? country.label : '');
        setSelectedCurrency({ value: defaultValue.currency, label: defaultValue.currency });
    }, [defaultValue]);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setSelectedCurrency({ value: selectedOption.currency, label: selectedOption.currency });
        setCurrencyValue('');
    };

    const handleCurrencyChange = (selectedOption) => {
        setSelectedCurrency(selectedOption);
    };

    const handleCurrencyValueChange = (event) => {
        setCurrencyValue(event.target.value);
    };

    return (
        <div className="country-currency-select">
            <Select
                options={countryOptions}
                onChange={handleCountryChange}
                styles={customStyles}
                formatOptionLabel={formatOptionLabel}
                className="select-country"
            />
            <div className="currency-input-group">
                <Select
                    options={currencyOptions}
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    styles={{
                        ...customStyles,
                        control: (provided, { isFocused }) => ({
                            ...provided,
                            border: 'none',
                            borderRadius: 0,
                            backgroundColor: 'transparent',
                            boxShadow: isFocused ? 'none' : provided.boxShadow,
                            borderColor: isFocused ? '#ccc' : provided.borderColor,
                            '&:hover': {
                                borderColor: '#ccc'
                            },
                            width: '100%',
                        })
                    }}
                    className="select-currency"
                />
                <input
                    type="text"
                    value={currencyValue}
                    onChange={handleCurrencyValueChange}
                    className="currency-input"
                />
            </div>
        </div>
    );
};

export default CountryCurrencySelect;
