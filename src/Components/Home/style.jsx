import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
   /* padding: 0 5%;    */
  h2 {
    font-size: 64px;
    color: #333;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
  }
  h1 {
    font-size: 20px;
    color: #333;
    margin-bottom: 1rem; 
    line-height: 1.3;
    span {
      color: #00754a; 
      font-size: 96px;
    }
  }
  p {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: #666;
    line-height: 1.5; 
     margin-bottom: 1.5rem; 
    
  }

  button {
    background-color: #037143;
    color: white;
    border: none;
    padding: 10px 30px;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #005c37;
    }

    &:active {
      transform: scale(0.98);
    }
  }  div {
    margin-top: 1.5rem;
    display: flex;
    gap: 0.8rem;
    position: absolute;
    left: -30px;
    img {
      width: 100px;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
 `;

export const Copo = styled.img`
  width: 340px;
  position: absolute;
  margin-right: -205;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(-5deg) scale(1.05);
  }
`;

export const Section = styled.section`
  position: relative;
  width: 50%;
  display: flex;
  justify-content:center;
  align-items: center;
  z-index: -5;

  .elipse {
    position: absolute;    
    width: 800px;
    z-index: -1;
    bottom: -50px;
    right: -50%;
    transition: background-color 0.3s ease;
    }`;
