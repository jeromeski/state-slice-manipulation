import styled from "styled-components/macro";

const Card = styled.div`
  background-color: whitesmoke;
  padding: 0 15px;
  margin: 15px 15px;
  .card-container {
    display: flex;
    padding: 15px;
    align-items: center;
    .image-thumb {
      margin-right: 15px;
      height: auto;
      width: 100px;
    }

    img {
      height: auto;
      max-width: 100%;
    }

    .title {
      width: 100%;
      max-width: 300px;
    }

    .action {
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
      }
      .increase {
        margin-left: 25px;
        margin-right: 5px;
      }
      .decrease {
        margin-left: 5px;
      }
      .delete {
        margin-left: auto;
      }
    }
  }
`;

export default Card;
