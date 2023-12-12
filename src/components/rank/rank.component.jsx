import './rank.style.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user/user.context';

const Rank = () => {
    const { currentUser } = useContext(UserContext);
    const name = currentUser.name;
    const entries = currentUser.entries;
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