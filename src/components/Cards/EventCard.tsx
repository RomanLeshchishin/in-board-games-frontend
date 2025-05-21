import { CardCover, CardInf, CardTemplate, CustomCard } from '@/components/UI/CustomCard/CustomCard';
import { Button, Tag } from 'antd';
import { CalendarOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { IEvent } from '@/models/IEvent';

interface IEventCardProps {
  cardData: IEvent;
}

const EventCard = ({ cardData }: IEventCardProps) => {
  const eventCover: CardCover = {
    alt: cardData.title,
    link: '',
  };
  const eventInf: CardInf = {
    title: cardData.title,
  };
  return (
    <CustomCard
      template={CardTemplate.EVENT}
      cover={eventCover}
      cardInf={eventInf}
      additionalInf={
        <>
          <Tag icon={<CalendarOutlined />} key={'date'}>
            {cardData.date.toDateString()}
          </Tag>
          <Tag icon={<EnvironmentOutlined />} key={'location'}>
            {cardData.place}
          </Tag>
          <Tag icon={<UserOutlined />} key={'participants'}>
            45 участников
          </Tag>
        </>
      }
      cardButtons={[
        <Button type={'primary'} block key={'join'}>
          Участвовать
        </Button>,
      ]}
    />
  );
};

export default EventCard;
