import React, { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import styles from './CustomInput.module.scss';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  borderRadius?: number;
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, icon, borderRadius = 8, style, ...inputProps }, ref) => {
    return (
      <div className={styles.customInputWrapper}>
        {label && <label className={styles.customInputLabel}>{label}</label>}
        <div className={styles.inputWithIconWrapper}>
          {icon && <span className={styles.inputIcon}>{icon}</span>}
          <input
            ref={ref}
            style={{
              borderRadius,
              borderColor: error ? '#ff4d4f' : undefined,
              paddingLeft: icon ? 36 : 12,
              ...style,
            }}
            className={`${styles.customInput} ${error ? styles.customInputError : ''}`}
            {...inputProps}
          />
        </div>
        {error && <div className={styles.customInputErrorMessage}>{error}</div>}
      </div>
    );
  },
);
