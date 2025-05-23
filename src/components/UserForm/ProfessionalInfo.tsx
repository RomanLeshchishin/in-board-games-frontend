import { CustomInput } from '@/components/UI/CustomInput/CustomInput';
import styles from './UserForm.module.scss';
import { Checkbox } from 'antd';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CreateFormData } from '@/models/form/UserFormValidation';
import StudentInfo from '@/components/UserForm/StudentInfo';

interface ProfessionalInfoProps {
  errors: FieldErrors<CreateFormData>;
  register: UseFormRegister<CreateFormData>;
  isStudent: boolean;
  setIsStudent: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfessionalInfo = ({ errors, register, isStudent, setIsStudent }: ProfessionalInfoProps) => {
  return (
    <section className={styles.section}>
      <h2>Профессиональная информация</h2>

      <CustomInput
        label='Профессия'
        placeholder='Введите вашу профессию'
        error={errors.profession?.message}
        {...register('profession')}
      />

      <Checkbox checked={isStudent} onChange={e => setIsStudent(e.target.checked)} className={styles.checkbox}>
        Я студент
      </Checkbox>

      {isStudent && <StudentInfo register={register} errors={errors} />}
    </section>
  );
};

export default ProfessionalInfo;
