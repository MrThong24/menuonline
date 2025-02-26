import React from 'react';
import { Modal, Button } from 'antd';
import useDisableScroll from 'src/hooks/useDisableScroll';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  icon?: React.ReactNode;
  bgColorIcon?: string;
  textColorIcon?: string;
  width?: number;
  type?: 'primary' | 'danger';
  showCancel?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmLabel = 'Xác nhận',
  cancelLabel = 'Hủy',
  icon,
  bgColorIcon = '#ffffff',
  textColorIcon = '#000000',
  width = 430,
  type = 'primary',
  showCancel = true,
  disabled = false,
  loading,
  className = ''
}) => {
  useDisableScroll(isOpen);
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      width={width}
      footer={
        <div className='flex flex-col gap-2'>
          <Button
            key='confirm'
            className='text-lg font-semibold py-5'
            type='primary'
            danger={type === 'danger'}
            onClick={onConfirm}
            loading={loading}
            disabled={disabled}
          >
            {confirmLabel}
          </Button>
          {showCancel && (
            <Button key='cancel' onClick={onClose} type='link' className='text-black text-lg font-semibold py-5'>
              {cancelLabel}
            </Button>
          )}
        </div>
      }
      title={
        <div className='flex flex-col items-center justify-center gap-2'>
          <div
            className={`flex p-3 rounded-full text-2xl`}
            style={{ backgroundColor: bgColorIcon, color: textColorIcon }}
          >
            {icon}
          </div>
          <span className='text-xl text-center'>{title}</span>
        </div>
      }
    >
      <div className={`flex items-center justify-center ${className}`}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
