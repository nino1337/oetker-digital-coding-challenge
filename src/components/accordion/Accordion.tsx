import { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import * as S from './Accordion.styles';

export type AccordionItem = {
  title: string;
  body: {
    img: StaticImageData;
    alt: string;
    title: string;
    text: string;
  };
};

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items = [] }: AccordionProps) => {
  const [openItem, setOpenItem] = useState('');

  const handleItemClick = (title: string) => {
    setOpenItem((prevItem) => {
      if (prevItem === title) {
        return '';
      }

      return title;
    });
  };

  return (
    <S.Accordion>
      <S.Items>
        {items.map(({ title, body }) => (
          <S.Item key={title}>
            <S.ItemTitle
              onClick={() => handleItemClick(title)}
              aria-expanded={openItem === title ? 'true' : 'false'}
            >
              {title}
            </S.ItemTitle>
            <S.ItemBody isOpen={openItem === title}>
              <S.BodyImage src={body.img} alt={body.alt} />
              <div>
                <S.BodyTitle>{body.title}</S.BodyTitle>
                <S.BodyText>{body.text}</S.BodyText>
              </div>
            </S.ItemBody>
          </S.Item>
        ))}
      </S.Items>
    </S.Accordion>
  );
};

export default Accordion;
