import React from 'react';
import { Upload, message, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './UserForm.module.scss';

interface AddPhotosProps {
  fileList: UploadFile[];
  setFileList: React.Dispatch<React.SetStateAction<UploadFile<any>[]>>;
  filesToUpload: File[];
  setFilesToUpload: React.Dispatch<React.SetStateAction<File[]>>;
}

const AddPhotos = ({ fileList, setFileList, filesToUpload, setFilesToUpload }: AddPhotosProps) => {
  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('Можно загружать только изображения!');
      return Upload.LIST_IGNORE;
    }

    const isLimit = file.size / 1024 / 1024 < 10;
    if (!isLimit) {
      message.error('Изображение должно быть меньше 10MB!');
      return Upload.LIST_IGNORE;
    }

    return true;
  };

  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => {
    // Сохраняем и UploadFile для отображения и File для отправки
    setFileList(fileList);
    setFilesToUpload(fileList.map(file => file.originFileObj as File));
  };

  return (
    <section className={styles.section}>
      <h2>Фотографии</h2>
      <Upload
        multiple
        fileList={fileList}
        beforeUpload={beforeUpload}
        onChange={({ fileList }) => setFileList(fileList)}
        accept={'image/*'}
        listType={'picture'}
      >
        <p className={'ant-upload-drag-icon'}>
          <UploadOutlined />
        </p>
        <p>Нажмите или перетащите файлы для загрузки</p>
        <p>Максимум 8 фотографий (до 10MB каждая)</p>
      </Upload>
    </section>
  );
};

export default AddPhotos;
