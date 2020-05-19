import styled from 'styled-components';
import { colors } from 'utils';
import { Form, InputNumber, Button } from 'antd';

export const StyledFormActionsWrapper = styled.div`
  padding: 0 0 20px;
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  color: ${(props) => props.back && 'inherit'};
`;

export const StyledError = styled.div`
  max-width: 300px;
  font-size: 11px;
  margin: 0 auto;
  color: ${colors.redErr};
  line-height: 1.5715;
`;

export const StyledFormWrapper = styled.div`
  text-align: center;
  background-color: ${colors.grey};
`;

export const StyledForm = styled(Form)`
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledInputNumber = styled(InputNumber)`
  width: 100%;

  .ant-input-number-handler-wrap {
    display: none;
  }
`;

export const StyledFormItem = styled(Form.Item)`
  padding: ${(props) => (props.tail ? '0' : '20px 0 0')};
  text-align: left;

  .ant-form-item-label {
    padding-bottom: 0;

    .ant-form-item-required {
      font-size: 15.5px;

      &:before {
        content: none;
      }
    }
  }

  .ant-form-item-explain {
    font-size: 11px;
  }
`;