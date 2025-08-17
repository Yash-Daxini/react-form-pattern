import React from 'react'
import { InputType } from '../../common/types';

interface InputProps {
    labelText?: string;
    placeholder?: string;
    type: InputType;
    value: string;
}

const Input: React.FC<InputProps> = ({ labelText, placeholder, type, value }) => {
    return (
        <div className="mb-3">
            <label htmlFor="basic-url" className="form-label">
                {labelText}
            </label>
            <div className="input-group">
                <input
                    type={type}
                    className="form-control"
                    aria-describedby="basic-addon3 basic-addon4"
                    placeholder={placeholder}
                    value={value} />
            </div>
        </div>
    )
}

export default Input