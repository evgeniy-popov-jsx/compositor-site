import { Spin } from 'antd';
import { Styled } from './styles';
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = () => {

  return (
    <Styled.Loader>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </Styled.Loader>
  );
};
