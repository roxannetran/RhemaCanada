import styled from 'styled-components'

export const FeedbackContainer = styled.div`
  height: 870px;
  padding-top: 140px;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 1024px) {
    height: 100%;
    padding: 90px 0;
  }
`

export const FeedbackH1 = styled.h1`
  color: #fff;
  position: relative;
  margin-bottom: 60px;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 33%;
    border-bottom: 2px solid #fff;
  }
`

export const FeedbackWrapper = styled.div`
  width: 600px;

  @media screen and (max-width: 480px) {
    max-width: 90%;
  }

  p {
    margin-bottom: 15px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 10px;
    border: 1px solid var(--grey);
    border-radius: 5px;
    margin-bottom: 20px;

    :focus {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      border: 1px solid var(--dark-blue);
      outline: 0;
    }
  }

  button {
    margin-top: 20px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
    border: 2px solid #fff;
    border-radius: 50px;
    background-color: var(--blue);
    padding: 10px 40px;
    cursor: pointer;

    :hover {
      background-color: #fff;
      color: var(--dark-grey);
    }
  }
`
