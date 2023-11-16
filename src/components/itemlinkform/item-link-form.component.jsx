import './ItemLinkForm.css';

const ItemLinkForm = () => {
    return (
        <div>
            <p className='item-link-box'>{ `This app can detect people's faces. Give it a try!` }</p>
            <div className='item-link-box'>
                <div className='pa4 br3 shadow-5 item-link-box bg-washed-green'>
                    <input 
                        style={{ width: '300px' }} 
                        className='pa2 f4 w-70' 
                        type='text' 
                        placeholder='url'
                        onChange={ null }/>
                    <button 
                        className='white bg-dark-green w-30 grow ph3 pv2 pointer f4'
                        onClick={ null }>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ItemLinkForm;