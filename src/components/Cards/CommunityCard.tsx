import { CardCover, CardInf, CardTemplate, CustomCard } from '@/components/UI/CustomCard/CustomCard';
import { ICommunity } from '@/models/ICommunity';
import { useCommunityTopics } from '@/hooks/communities/useCommunityTopics';
import { Button, Spin, Tag } from 'antd';

interface ICommunityCardProps {
  cardData: ICommunity;
}

const CommunityCard = ({ cardData }: ICommunityCardProps) => {
  const { data, isLoading, isError } = useCommunityTopics(cardData.id);
  const communityCover: CardCover = {
    alt: cardData.title,
    link: cardData.avatar || '',
  };
  const communityInf: CardInf = {
    title: cardData.title,
    description: cardData.description || '',
  };
  return (
    <CustomCard
      template={CardTemplate.COMMUNITY}
      cover={communityCover}
      cardInf={communityInf}
      tags={
        <>
          {isLoading && <Spin size={'small'} />}
          {isError && <div>Ошибка загрузки тем</div>}
          {data?.topics.map(topic => (
            <Tag color={'blue'} key={topic}>
              {topic}
            </Tag>
          ))}
        </>
      }
      cardButtons={[
        <Button type='primary' block key='subscribe'>
          Подписаться
        </Button>,
      ]}
    />
  );
};

export default CommunityCard;
