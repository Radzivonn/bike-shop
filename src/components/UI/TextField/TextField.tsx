import './style.scss';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { ReactComponent as ClosedEyeIcon } from './assets/closed-eye-icon.svg';
import { ReactComponent as OpenedEyeIcon } from './assets/opened-eye-icon.svg';
import { ReactComponent as CalendarIcon } from './assets/calendar-icon.svg';
import { type ITextFieldProps } from './types';

export const TextField = forwardRef<React.RefObject<HTMLInputElement>, ITextFieldProps>(
  (
    {
      id,
      type = 'text',
      label,
      isValid = true,
      helpText,
      isTextShows = false,
      className,
      onChange,
      ...props
    }: ITextFieldProps,
    ref,
  ) => {
    const [isActiveOption, setIsActiveOption] = useState(false);
    let isInteractive = false;
    let fieldIcon = null;
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef);

    switch (type) {
      case 'password':
        fieldIcon = isActiveOption ? (
          <ClosedEyeIcon className="icon" />
        ) : (
          <OpenedEyeIcon className="icon" />
        );
        type = isActiveOption ? 'text' : 'password';
        isInteractive = true;
        break;
      case 'date':
        fieldIcon = <CalendarIcon className="icon" />;
        isInteractive = true;
    }

    return (
      <div className={`${className ?? ''} text-field ${isValid ? '' : 'text-field--invalid'}`}>
        <div className="text-field__container">
          <input
            {...props}
            ref={inputRef}
            onChange={(evt) => {
              onChange(evt.target.value);
            }}
            className="text-field__input"
            id={id}
            placeholder=""
            type={type}
            autoComplete="on"
          />
          <label className="text-field__label" htmlFor={id}>
            {label}
          </label>
          <fieldset className="text-field__fieldset">
            <legend className="text-field__legend">
              <span>{label}</span>
            </legend>
          </fieldset>
          <div
            className="text-field__icon-container"
            style={{ pointerEvents: isInteractive ? 'auto' : 'none' }}
            onClick={() => {
              setIsActiveOption(!isActiveOption);
            }}
          >
            {fieldIcon}
          </div>
        </div>
        <p className="text-field__text-helper">{isTextShows && helpText}</p>
      </div>
    );
  },
);

TextField.displayName = 'TextField';
