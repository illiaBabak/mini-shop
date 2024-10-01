import { ReactNode } from 'react';

type Props = {
  onClose: () => void;
  children: ReactNode;
};

export const ModalWrapper = ({ onClose, children }: Props): JSX.Element => (
  <div
    className='modal-wrapper position-absolute overflow-hidden z-3 w-100 h-100 d-flex justify-content-center align-items-center'
    onClick={onClose}
  >
    {children}
  </div>
);
