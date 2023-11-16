const FormInput = ({ label, inputOptions }) => {
    return (
        <div className='flex pv2'>
            <label className='f4 ph3 w-30'>{ label }</label>
            <input {...inputOptions} />
        </div>
    );
}

export default FormInput
