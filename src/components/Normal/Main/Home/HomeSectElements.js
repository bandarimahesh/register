import styled from "styled-components";

export const HomeSectionComponent = styled.section`
  background-image: url("https://images.pexels.com/photos/4103247/pexels-photo-4103247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  height: 95vh;
`;
export const HomeWrapper = styled.div`
  display: flex;
`;

export const LeftCol = styled.div`
  flex: 7;
`;
export const RightCol = styled.div`
  flex: 5;
`;
// right section

export const MainTitleBox = styled.div`
  margin: 200px 0 0 50px;
`;
export const MainTitle = styled.h1`
  color: #fff;
  font-size: 37px;
  font-weight: 700;
`;
export const MainDescription = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin: 30px auto;
`;
export const MainRegButton = styled.button`
  outline: none;
  padding-left: 15px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  padding: 13px 20px;
  border: none;
  cursor: pointer;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
`;
// left section
export const Wrapper = styled.div`
  width: 560px;
  padding: 30px;
  border-radius: 5px;
  /* box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
`;
export const TitleText = styled.div`
  display: flex;
  width: 400%;
`;
export const Title = styled.div`
  width: 50%;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
`;
export const FormContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SlideControls = styled.div`
  position: relative;
  display: flex;
  height: 49px;
  width: 99.5%;
  margin: 30px 0 10px 0;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 5px;
  overflow: hidden;
`;
export const InputRadioButton = styled.input`
  display: none;
`;
export const SlideTab = styled.div`
  position: absolute;
  left: 0;
  border-radius: 5px;
  height: 100%;
  width: 25%;
  z-index: 0;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export const SlideLabel = styled.label`
  height: 100%;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  z-index: 1;
  color: #fff;
  transition: all 0.6s ease;
`;
export const FormInner = styled.div`
  display: flex;
  width: 400%;
`;

export const Form = styled.form`
  width: 500px;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
export const Field = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 20px;
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 15px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  &:focus {
    border-color: #fc83bb;
  }
`;

export const InputButton = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 15px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  padding-left: 0;
  border: none;
  cursor: pointer;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
`;
export const PassLink = styled.div`
  margin-top: 5px;
`;
export const PassLinkA = styled.a`
  text-decoration: none;
  color: #fa4299;
  &:hover {
    text-decoration: underline;
  }
`;
export const SignUpLink = styled.div`
  text-align: center;
  margin-top: 30px;
`;
export const SignLinkB = styled.a`
  text-decoration: none;
  color: #fa4299;
  &:hover {
    text-decoration: underline;
  }
`;
