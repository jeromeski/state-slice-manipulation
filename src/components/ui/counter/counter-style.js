import styled from "styled-components/macro";

export const CounterWrap = styled.div`
  .counter-elements {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    input {
      width: 30px;
      padding: 5px;
      border: none;
      background-color: white;
    }
    button {
      display: flex;
      align-content: center;
      padding: 5px;
      cursor: pointer;
    }
    .increase {
      margin-left: 25px;
      margin-right: 5px;
    }
    .decrease {
      margin-left: 5px;
    }
  }
`;
