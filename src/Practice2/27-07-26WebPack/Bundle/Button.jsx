function Button() {

    function handleClick() {
        alert("Button Clicked!");
        console.log('ButtonClicked')
    }
    
    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}

export default Button;