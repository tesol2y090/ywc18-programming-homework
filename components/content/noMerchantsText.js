import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  letter-spacing: -0.02em;
  font-size: 3.6rem;
  margin-top: 8.5rem;
`

const SubHeader = styled.div`
  letter-spacing: -0.02em;
  font-size: 1.6rem;
  margin-top: 2rem;
`

const NoMerchants = () => {
  return (
    <Container>
      <Header className='font-bold'>ไม่พบสถานที่ที่คุณกำลังหา</Header>
      <SubHeader>
        ร้านค้าที่ท่านค้นหาอาจไม่ได้เข้าร่วมโครงการ คนละครึ่ง
      </SubHeader>
    </Container>
  )
}

export default NoMerchants
