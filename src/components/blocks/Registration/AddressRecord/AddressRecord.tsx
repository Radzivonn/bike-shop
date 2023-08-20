import React, { useState } from 'react';
import './style.scss';
import { type IAddressData } from '../types';
import { Button } from 'components/UI/Button/Button';
import { ReactComponent as EditIcon } from './assets/edit-icon.svg';
import { ReactComponent as DeleteIcon } from './assets/delete-icon.svg';
import { ControlLabel } from 'components/UI/ControlLabel/ControlLabel';
import { AddressRecordEdit } from './AddressRecordEdit';

interface IAddressRecordProps {
  data: IAddressData;
  onSave: (data: IAddressData) => void;
  onDelete: (data: IAddressData) => void;
  onSetDefault: (isDefault: boolean, addressId: number) => void;
}

export const AddressRecord = ({ data, onSave, onDelete, onSetDefault }: IAddressRecordProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditAddress = () => {
    setIsEditMode(true);
  };
  const handleDeleteAddress = () => {
    onDelete(data);
  };
  const handleIsDefault = (value: boolean) => {
    onSetDefault(value, data.id);
  };
  const handleEditCancel = () => {
    setIsEditMode(false);
  };
  const handleEditSave = (editedData: IAddressData) => {
    setIsEditMode(false);
    onSave(editedData);
  };

  const getTextContent = ({ id, source, isDefault, title, ...descriptionProps }: IAddressData) =>
    Object.values(descriptionProps).join(' ');

  return isEditMode ? (
    <AddressRecordEdit onCancel={handleEditCancel} onSave={handleEditSave} {...data} />
  ) : (
    <div className="form__address-record address-record">
      <p className="address-record__headline">
        <span className="address-record__name">{data.title}</span>
        <span className="address-record__headline-controls">
          <Button
            className="address-record__button button--icon-only"
            onClick={handleEditAddress}
            aria-label="Edit"
          >
            <EditIcon className="icon" />
          </Button>
          <Button
            className="address-record__button button--icon-only"
            onClick={handleDeleteAddress}
            aria-label="Delete"
          >
            <DeleteIcon className="icon" />
          </Button>
        </span>
      </p>
      <p className="address-record__text">{getTextContent(data)}</p>
      <ControlLabel
        label="Default"
        className="address-record__checkbox"
        checked={data.isDefault}
        onChange={handleIsDefault}
      ></ControlLabel>
    </div>
  );
};
