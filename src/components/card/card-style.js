import styled from "styled-components/macro";

const Card = styled.div`
  background-color: whitesmoke;
  padding: 0 5px;
  margin: 15px 15px;
  .card-container {
    display: flex;
    padding: 15px;
    align-items: center;

    .title {
      width: 100%;
      max-width: 300px;
    }

    .delete {
      padding: 5px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
`;

export default Card;
