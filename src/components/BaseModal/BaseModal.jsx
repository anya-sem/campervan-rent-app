import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Icon } from '../../components/Icons/Icon';
import css from './BaseModal.module.css';

export const BaseModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
      <button className={css.closeButton} onClick={onClose}>
        <Icon
          name="close"
          fill="none"
          stroke="currentColor"
          width="32"
          height="32"
        />
      </button>
      {children}
    </Modal>
  );
};

BaseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
