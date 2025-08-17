import React from 'react'

interface TextareaProps {
    labelText?: string;
    placeholder?: string;
    rows?: number;
    defaulValue: string;
}

const Textarea: React.FC<TextareaProps> = ({ labelText, placeholder, rows }: TextareaProps) => {
    return (
        <>
            <label
                htmlFor="exampleFormControlTextarea1" className="form-label">
                {labelText}
            </label>
            <textarea
                className="form-control" id="exampleFormControlTextarea1" rows={rows} placeholder={placeholder}>
            </textarea>
        </>
    )
}

export default Textarea