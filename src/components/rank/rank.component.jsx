import './Rank.css';

const Rank = () => {

    const name = "tester";
    const entries = 999;

    return(
        <div>
            <div className='rank-box'>
                <p className='f3'>{ `${name}, your current entry count is:` }</p>
            </div>
            <div className='rank-box'>
                <p className='f1 mt0 mb0'>{ `${entries}` }</p>
            </div>
        </div>
    );
}

export default Rank;