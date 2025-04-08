import React from 'react'

interface TextareaProps {
    labelText?: string;
    placeholder?: string;
    rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({ labelText, placeholder, rows }: TextareaProps) => {
    return (
        <div>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{labelText}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={rows} placeholder={placeholder}></textarea>
        </div>
    )
}

export default Textarea