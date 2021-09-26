import React from 'react';
import AriaModal from 'react-aria-modal';

const ConfirmationModal = ({ onDeactivateModal, onConfirmClick, id }) => {
  return (
    <AriaModal titleText="confirm modal" verticallyCenter focusDialog onExit={onDeactivateModal}>
      <div className='confirm_modal'>
        <div className='taC fw600'>Do you want to delete the Profile?</div>
        <div className='d--f btn ttU fw600'>
          <span onClick={() => onConfirmClick(id)}>Confirm</span>
          <span onClick={onDeactivateModal}>Cancel</span>
        </div>
      </div>
    </AriaModal>
  )
}

export default ConfirmationModal;
