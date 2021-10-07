import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Bienvenue({ user, setModalBienvenueOpen, modalBienvenueOpen }){
    return (
        <Modal
            isOpen={modalBienvenueOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={()=>setModalBienvenueOpen(false)}
            style={customStyles}
            > 
            <div>
                <button onClick={()=>setModalBienvenueOpen(false)}><FontAwesome name="times"/></button>
                <h1>Bienvenue { user }!</h1>
            </div>
        </Modal>
    )
}

export default Bienvenue