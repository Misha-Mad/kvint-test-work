import React from 'react';
import { Switch } from 'antd';
import { createGlobalStyle } from 'styled-components';
import { SwitchWrapper } from './index.styled';

const GlobalStyle = createGlobalStyle`
  #root {
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TestComponent: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SwitchWrapper>
        <Switch defaultChecked />
      </SwitchWrapper>
    </>
  );
};

export default TestComponent;
