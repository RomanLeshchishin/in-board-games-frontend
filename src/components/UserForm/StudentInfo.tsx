import { CustomInput } from '@/components/UI/CustomInput/CustomInput';
import React from 'react';
import { Col, Row, Select } from 'antd';
import styles from './UserForm.module.scss';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CreateFormData } from '@/models/form/UserFormValidation';

const { Option } = Select;

interface StudentInfoProps {
  errors: FieldErrors<CreateFormData>;
  register: UseFormRegister<CreateFormData>;
}

const StudentInfo = ({ errors, register }: StudentInfoProps) => {
  const courses = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.studentFields}>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <CustomInput
            label='Институт'
            placeholder='Введите ваш институт'
            error={errors.institute?.message}
            {...register('institute')}
          />
        </Col>
        <Col xs={24} md={12}>
          <CustomInput
            label='Направление'
            placeholder='Введите направление'
            error={errors.direction?.message}
            {...register('direction')}
          />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <div className={styles.selectWrapper}>
            <label>Курс*</label>
            <Select className={styles.fullWidth} placeholder='Выберите курс' {...register('course')}>
              {courses.map(course => (
                <Option key={course} value={course}>
                  {course} курс
                </Option>
              ))}
            </Select>
            {errors.course && <span className={styles.error}>{errors.course.message}</span>}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
