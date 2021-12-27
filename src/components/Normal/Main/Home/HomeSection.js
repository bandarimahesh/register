import React from "react";
import {
  HomeSectionComponent,
  HomeWrapper,
  Wrapper,
  LeftCol,
  RightCol,
  TitleText,
  Title,
  FormContainer,
  FormInner,
  Form,
  Field,
  Input,
  InputButton,
  PassLink,
  PassLinkA,
  SignUpLink,
  SignLinkB,
  SlideControls,
  SlideTab,
  SlideLabel,
  InputRadioButton,
  MainTitleBox,
  MainDescription,
  MainTitle,
  MainRegButton,
} from "./HomeSectElements";
const HomeSection = () => {
  return (
    <HomeSectionComponent>
      <HomeWrapper>
        <LeftCol>
          <MainTitleBox>
            <MainTitle>Lorem impusm sldjgdls sadkgk</MainTitle>
            <MainDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates deserunt doloremque nisi aperiam blanditiis at natus
              quod suscipit dignissimos voluptate!
            </MainDescription>
            <MainRegButton>Register Now!</MainRegButton>
          </MainTitleBox>
        </LeftCol>
        <RightCol>
          <Wrapper>
            <TitleText>
              <Title>Student</Title>
              <Title>Trainer</Title>
              <Title>Trainee</Title>
              <Title>Hire</Title>
            </TitleText>
            <FormContainer>
              <SlideControls>
                <InputRadioButton />
                <InputRadioButton />
                <InputRadioButton />
                <InputRadioButton />
                <SlideLabel>Student</SlideLabel>
                <SlideLabel>Trainer</SlideLabel>
                <SlideLabel>Trainee</SlideLabel>
                <SlideLabel>Hire</SlideLabel>
                <SlideTab />
              </SlideControls>
              <FormInner>
                <Form>
                  <Field>
                    <Input type="text" placeholder="Enter your username" />
                  </Field>
                  <Field>
                    <Input type="text" placeholder="Enter your password" />
                  </Field>
                  <PassLink>
                    <PassLinkA>Forgot Password ?</PassLinkA>
                  </PassLink>
                  <Field>
                    <InputButton type="submit" value="Login" />
                  </Field>
                  <SignUpLink>
                    Not a Member yet ?<SignLinkB> Sign up Right now</SignLinkB>
                  </SignUpLink>
                </Form>
              </FormInner>
            </FormContainer>
          </Wrapper>
        </RightCol>
      </HomeWrapper>
    </HomeSectionComponent>
  );
};

export default HomeSection;
