import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import styled from './styles.module.scss';

export const BackLink = () => {
  return (
    <Link className={styled.wrapper} to="/">
      <FaArrowLeftLong />
      <p>Back</p>
    </Link>
  )
}
