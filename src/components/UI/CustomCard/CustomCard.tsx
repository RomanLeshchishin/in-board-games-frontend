import styles from './CustomCard.module.scss';
import { Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import React, { ReactElement } from 'react';

export type CardInf = {
  title: string;
  description?: string;
};

export type CardCover = {
  alt: string;
  link: string;
};

export enum CardTemplate {
  PROFILE = 'PROFILE',
  COMMUNITY = 'COMMUNITY',
  EVENT = 'EVENT',
}

interface CustomCardProps {
  template: CardTemplate;
  cover: CardCover;
  tags?: ReactElement<any, any>;
  cardInf: CardInf;
  additionalInf?: ReactElement<any, any>;
  cardButtons: React.ReactNode[];
}

export const CustomCard = ({ template, cover, tags, cardInf, additionalInf, cardButtons = [] }: CustomCardProps) => {
  return (
    <Card
      className={styles.card}
      cover={<img alt={cover.alt} src={cover.link} className={styles.cardImage} />}
      hoverable
    >
      {template === CardTemplate.PROFILE ? (
        <div className={styles.cardHeader}>
          <Card.Meta title={cardInf.title} />
          <HeartOutlined className={styles.heartIcon} />
        </div>
      ) : (
        <div className={styles.cardTitle}>{cardInf.title}</div>
      )}

      {tags && <div className={styles.cardTags}>{tags}</div>}

      {additionalInf && <div>{additionalInf}</div>}

      {cardInf.description && <div className={styles.cardDescription}>{cardInf.description}</div>}

      <div className={styles.buttonsBlock}>{cardButtons}</div>
    </Card>
  );
};
