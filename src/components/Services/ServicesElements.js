import styled from 'styled-components'
import { FaChurch } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'
import { FaCubes } from 'react-icons/fa'

export const ServicesContainer = styled.div`
  height: 870px;
  padding-top: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1100px;
    padding-top: 150px;
  }
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  color: #008adb;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.a`
  color: #5a596a;
  background: #f7f8fa;
  align-items: center;
  border-radius: 10px;
  width: 280px;
  max-height: 340px;
  padding: 80px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background: #008adb;
    color: #fff;
  }
`

export const ChurchIcon = styled(FaChurch)`
  font-size: 60px;
  padding-bottom: 20px;
  display: block;
  margin: auto;
`

export const SchoolIcon = styled(IoIosSchool)`
  font-size: 60px;
  padding-bottom: 20px;
  display: block;
  margin: auto;
`

export const FoundationIcon = styled(FaCubes)`
  font-size: 60px;
  padding-bottom: 20px;
  display: block;
  margin: auto;
`

export const ServicesH3 = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  padding-bottom: 24px;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 33%;
    width: 33%;
    border-bottom: 1px solid;
  }
`
