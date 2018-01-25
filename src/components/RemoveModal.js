import React from 'react';
import Modal from 'react-modal';

const RemoveModal =({}) => (

    <Modal
        contentLabel="Remove Expense"
    >

        <h3>Remove this expense?</h3>
        <button>Remove</button>
        <button>Cancel</button>
    </Modal>
);
export default RemoveModal;
