import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { SketchPicker } from 'react-color';
import 'bootstrap/dist/css/bootstrap.min.css';

const ColorPickerDropdown = ({ title, color, onChange }) => {
    return (
        <Dropdown drop="end">
            <Dropdown.Toggle as="div" className="nested-dropdown-toggle" style={{ cursor: 'pointer', padding: '8px 20px' }}>
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu className="nested-dropdown-menu" style={{ padding: '0' }}>
                <SketchPicker color={color} onChangeComplete={onChange} />
            </Dropdown.Menu>
        </Dropdown>
    );
};

const DropList = ({ colors, setColors }) => {
    const handleColorChange = (part, color) => {
        setColors(prevColors => ({
            ...prevColors,
            [part]: color.hex
        }));
    };


    return (
        <div>
            <Dropdown style={{ marginTop: "30px" }}>
                <Dropdown.Toggle id="dropdown-basic" style={{ width: "120px" }}>
                    Jacket Style
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Collar</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Trim Style</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Body Material</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sleeves Material</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sleeves/Shoulder Style</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Front Closure</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ marginTop: "15px" }}>
                <Dropdown.Toggle id="dropdown-basic" style={{ width: "120px" }}>
                    Color
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {Object.keys(colors).map(part => (
                        <ColorPickerDropdown
                            key={part}
                            title={part}
                            color={colors[part]}
                            onChange={color => handleColorChange(part, color)}
                        />
                    ))}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ marginTop: "15px" }}>
                <Dropdown.Toggle id="dropdown-basic" style={{ width: "120px" }}>
                    Design
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ marginTop: "15px" }}>
                <Dropdown.Toggle id="dropdown-basic" style={{ width: "120px" }}>
                    Size
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default DropList;

