import styles from './CustomInput.module.scss';

const CustomLabel = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <label className={styles.customInputLabel}>{children}</label>;
};

export default CustomLabel;
