const ErrorMessage = ({errorMessages}) => {
    return (
        <div >
            {
                errorMessages.map((errorMessage, i) => {
                    return <p key={i}  className="tc red">{ errorMessage }</p>
                })
            }
            
        </div>
    );
}

export default ErrorMessage;