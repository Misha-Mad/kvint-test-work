import styled from 'styled-components';
import 'antd/dist/antd.css';

// eslint-disable-next-line import/prefer-default-export
export const SwitchWrapper = styled.div`
  .ant-switch-checked > .ant-switch-handle {
    left: calc(100% - 15px);
    top: -5px;
  }

  .ant-switch-checked > .ant-switch-handle::before {
    background-color: spin(@blue-6, -20%);
  }

  .ant-switch-checked {
    background-color: darken(@blue-6, 40%);
  }

  .ant-switch-handle {
    width: 30px;
    height: 30px;
    top: -5px;
    left: -15px;
  }

  .ant-switch-handle::before {
    border-radius: 50%;
    background-color: lighten(@black, 55%);
  }
`;
