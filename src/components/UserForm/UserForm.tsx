import React, { useState } from 'react';
import { Button, UploadFile } from 'antd';
import styles from './UserForm.module.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateFormData, CreateFormSchema } from '@/models/form/UserFormValidation';
import { useSelector } from 'react-redux';
import { selectGames, selectInterests, selectTopics } from '@/redux/formSlice/selectors';
import { useCreateForm } from '@/hooks/form/useCreateForm';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKey } from '@/const/queryKey';
import { IProfile } from '@/models/IProfile';
import { useCreateFormModels } from '@/hooks/form/useCreateFormModels';
import PersonalInfo from '@/components/UserForm/PersonalInfo';
import InterestsInfo from '@/components/UserForm/InterestsInfo';
import EventsParticipation from '@/components/UserForm/EventsParticipation';
import ProfessionalInfo from '@/components/UserForm/ProfessionalInfo';
import AddPhotos from '@/components/UserForm/AddPhotos';
import { useUploadFiles } from '@/hooks/files/useUploadFiles';
import { FileModelType } from '@/models/IFile';

export const UserForm = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
  const queryClient = useQueryClient();
  const interestIds = useSelector(selectInterests);
  const topicIds = useSelector(selectTopics);
  const gameIds = useSelector(selectGames);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: zodResolver(CreateFormSchema),
    mode: 'onChange',
  });
  const formValues = watch();
  const formMutation = useCreateForm();
  const fileMutation = useUploadFiles();
  const formModelsMutation = useCreateFormModels();

  const onSubmit = async (data: CreateFormData) => {
    const profile = queryClient.getQueryData<IProfile>([QueryKey.PROFILE]);
    const form = await formMutation.mutateAsync({ profileId: profile?.id || '', ...data });
    await fileMutation.mutateAsync({ files: filesToUpload, modelId: form.id, modelType: FileModelType.FORM });
    await formModelsMutation.mutateAsync({ interestIds, topicIds, gameIds });
  };

  return (
    <form className={styles.formWrapper}>
      <PersonalInfo errors={errors} register={register} setValue={setValue} formValues={formValues} />
      <AddPhotos
        fileList={fileList}
        setFileList={setFileList}
        filesToUpload={filesToUpload}
        setFilesToUpload={setFilesToUpload}
      />
      <InterestsInfo />
      <EventsParticipation errors={errors} setValue={setValue} formValues={formValues} />
      <ProfessionalInfo errors={errors} register={register} isStudent={isStudent} setIsStudent={setIsStudent} />
      <div className={styles.footer}>
        <Button>Отмена</Button>
        <Button type={'primary'} onClick={handleSubmit(onSubmit)}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};
