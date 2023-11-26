

// eslint-disable-next-line react/prop-types
function Button ({disabled, onClick, buttonText}) {
    return (
        <button disabled= {disabled} onClick={onClick} type='button'> {buttonText}</button>
    )
}
export default Button;