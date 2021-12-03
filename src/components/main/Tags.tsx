import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { Tag } from './hooks/usePost';

interface TagsProps {
  tags: Tag[];
}

function Tags({ tags }: TagsProps) {
  return (
    <TagsTemplate>
      {tags.map(tag => (
        <TagsBlock key={tag.name}>{tag.name}</TagsBlock>
      ))}
    </TagsTemplate>
  );
}

const TagsTemplate = styled.div`
  display: flex;
`;

const TagsBlock = styled.div`
  margin-right: 0.5rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 2rem;
  color: ${colors.black};
  background: ${colors.white};
`;

export default Tags;
