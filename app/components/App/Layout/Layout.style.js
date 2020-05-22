import styled from 'styled-components';
import { media } from 'utils';
import { Layout } from 'antd';
import { headerHeight } from 'components/App/Header/Header.style';

export const StyledContent = styled(Layout.Content)`
  margin: ${headerHeight} auto 0;
  padding: 0 24px 24px;
  width: 100%;
`;

export const StyledLayout = styled(Layout)`
  transition: all 0.1s ease-in-out;
  padding-left: 0;
  background-color: #fff;

  ${media.tablet`
    padding-left: ${({ open }) => (open ? '80px' : '250px')};
  `}
`;
