import React from 'react';
import { CardContainer, CardImage, CardContent, CardTitle, CardBody, CardLink, CardLinksContainer} from '../styled/CardStyles';

 function Card({ title, image, body, links }) {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardBody>{body}</CardBody>
        <CardLinksContainer>
            {links.map((link, index) => (
            <CardLink key={index} href={link.href}>{link.text}</CardLink>
            ))}
        </CardLinksContainer>
      </CardContent>
    </CardContainer>
  );
}

export default Card;