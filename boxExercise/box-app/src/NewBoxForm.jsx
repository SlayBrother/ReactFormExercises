import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxList = ({createBox}) => {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = () => {
        e.preventDefault()
        createBox({...formData, id:uuid()})
        setFormData({height:"", length: "", backgroundColor: ""})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="height">Height</label>
                <input 
                    type="text"
                    id="height"
                    name="height"
                    placeholder="Box Height"
                    value={formData.height}
                    onChange={handleChange}
                />
                <label htmlFor="width">Width</label>
                <input
                    type="text"
                    id="width"
                    name="width"
                    placeholder='Box Width'
                    value={formData.width}
                    onChange={handleChange}
                />
                <label htmlFor="backgroundColor">Background Color</label>
                <input
                    type='text'
                    id="backgroundColor"
                    name='backgroundColor'
                    placeholder='Box Color'
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
            </div>
            <button id="newBoxButton">Add a new box!</button>
            </form>
        </div>
    )
}

export default NewBoxList