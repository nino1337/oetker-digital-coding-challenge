import * as S from './Results.styles';

import StarsIcon from './assets/star-icon.png';

export type ResultItem = {
  img: string;
  imgAlt: string;
  name: string;
  githubStars: string;
  href: string;
};

interface ResultsProps {
  items: ResultItem[];
}

const Results = ({ items = [] }: ResultsProps) => {
  return (
    <S.Results>
      {items.map(({ img, imgAlt, name, githubStars, href }) => {
        return (
          <S.Result key={name}>
            <S.Link target="_blank" rel="noopener noreferrer" href={href}>
              <S.Avatar src={img} alt={imgAlt} width={50} height={50} />
              <S.Name>{name}</S.Name>
              <S.GithubStars>
                {githubStars}
                <S.GithubStarsIcon src={StarsIcon} alt="stars-icon" />
              </S.GithubStars>
            </S.Link>
          </S.Result>
        );
      })}
    </S.Results>
  );
};

export default Results;
