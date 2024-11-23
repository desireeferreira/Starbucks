import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  padding: 0 5%;
  
  h2 {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.2rem;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.3;

    span {
      color: #00754a; 
      font-weight: bold;
    }
  }

  p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
    max-width: 300px;
    margin-bottom: 1.5rem;
  }

  button {
    padding: 0.8rem 1.5rem;
    font-size: 0.85rem;
    color: #fff;
    background-color: #00754a;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #005c37;
    }
  }

  div {
    margin-top: 1.5rem;
    display: flex;
    gap: 0.8rem;
    position: relative;
    left: -30px;

    img {
      width: 70px;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Section = styled.section`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img:last-child {
    position: absolute;
    width: 600px; 
    height: 400px;
    z-index: -1; 
    bottom: -50px; 
    right: -40%; 
    transition: background-color 0.3s ease; 
  }
`;

export const Copo = styled.img`
  width: 340px; 
  position: relative;
  margin-right: -30px;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(-5deg) scale(1.05);
  }
`;
