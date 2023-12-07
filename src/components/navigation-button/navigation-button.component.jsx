const NavigationButton = ({caption, onclick}) => {
    return (
        <p className='underline pa2 ma3 link dim pointer f3 grow'
            onClick={onclick}
        >{caption}</p>
    );
}

export default NavigationButton;