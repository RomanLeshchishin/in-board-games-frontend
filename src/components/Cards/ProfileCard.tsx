import { IProfile } from '@/models/IProfile';
import { useFormInterests } from '@/hooks/form/useFormInterests';
import { CardCover, CardInf, CardTemplate, CustomCard } from '@/components/UI/CustomCard/CustomCard';
import { Button, Spin, Tag } from 'antd';
import { HeartOutlined, UserOutlined } from '@ant-design/icons';
import { useAvatarByFileId } from '@/hooks/files/useAvatarByFileId';

interface IProfileCardProps {
  cardData: IProfile;
}

export const ProfileCard = ({ cardData }: IProfileCardProps) => {
  const { userId, user, avatar, age, about } = cardData;
  const { data: interests, isLoading, isError } = useFormInterests(userId);
  const { data } = avatar ? useAvatarByFileId(avatar) : {};
  const userCover: CardCover = {
    alt: user.firstName,
    link: 'https://storage.yandexcloud.net/in-board-server/adaff42d0412fcff89ab721891b6f0f0.jpg',
  };
  const userInf: CardInf = {
    title: `${user.firstName}, ${age || ''}`,
    description: about || '',
  };

  if (!cardData) {
    return <div>No profile data available.</div>;
  }

  return (
    <CustomCard
      template={CardTemplate.PROFILE}
      cover={userCover}
      tags={
        <>
          {isLoading && <Spin size={'small'} />}
          {isError && <div>Ошибка загрузки интересов</div>}
          {interests?.interests.map(interest => (
            <Tag color={'blue'} key={interest}>
              {interest}
            </Tag>
          ))}
        </>
      }
      cardInf={userInf}
      cardButtons={[
        <Button key={'profile'} icon={<UserOutlined />} block>
          Профиль
        </Button>,
        <Button key={'write'} type={'primary'} icon={<HeartOutlined />} block>
          Написать
        </Button>,
      ]}
    />
  );
};

export default ProfileCard;
