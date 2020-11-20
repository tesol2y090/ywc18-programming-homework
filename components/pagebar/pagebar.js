import styled from "styled-components"

const PagebarContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 4.6rem;
  background-color: rgb(39, 57, 124);
  display: flex;
  align-items: center;
`

const DisplayPageContainer = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1.2rem 3.2rem;
  @media (max-width: 768px) {
    padding: 1.2rem 1.6rem;
  }
`

const ContentDisplay = styled.div`
  width: 128rem;
  justify-content: flex-start;
  font-size: 1.4rem;
  color: #fff;
`

const UnderLineText = styled.span`
  text-decoration: underline;
`

const pagebar = () => {
  return (
    <PagebarContainer>
      <DisplayPageContainer>
        <ContentDisplay>
          <UnderLineText>หน้าแรก</UnderLineText>
          <span style={{ margin: "0 1.2rem" }}>/</span>
          <span className='font-semi-bold'>ค้นหา</span>
        </ContentDisplay>
      </DisplayPageContainer>
    </PagebarContainer>
  )
}

export default pagebar
