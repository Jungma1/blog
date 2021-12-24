import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { Tag } from '../../hooks/usePost';

interface TagsProps {
  tags: Tag[];
}

function Tags({ tags }: TagsProps) {
  return (
    <TagsTemplate>
      {tags.map(tag => (
        <TagsBlock key={tag.name} tagColor={tag.color}>
          {tag.name}
        </TagsBlock>
      ))}
    </TagsTemplate>
  );
}

const TagsTemplate = styled.div`
  display: flex;
`;

const TagsBlock = styled.div<{ tagColor: string }>`
  margin-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 2rem;
  color: ${colors.white};
  background: ${({ tagColor }) => tagColor};
  text-shadow: 1px 1px 2px ${colors.black};
`;

export default Tags;
