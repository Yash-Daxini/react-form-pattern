import React from 'react'

interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit }: FormProps) => {
    return (
        <form onSubmit={onSubmit}>
            
        </form>
    )
}

export default Form