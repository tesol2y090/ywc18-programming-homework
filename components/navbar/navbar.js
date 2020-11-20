import styled from "styled-components"
import { Select, Input, Menu, Dropdown } from "antd"

const NavbarContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 6rem;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
`

const MenuContainer = styled.div`
  width: 128rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const SearchBox = styled.div`
  width: 100%;
  height: 4rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
`

const DeskTopLogo = styled.img`
  height: 4rem;
  width: 15.1rem;
  margin: 0 3.2rem;
  @media (max-width: 768px) {
    display: none;
  }
`

const MobileLogo = styled.img`
  height: 4rem;
  width: auto;
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin: 0 1.6rem;
  }
`

const MobileFilter = styled.img`
  height: 2rem;
  width: auto;
  margin-right: 1.6rem;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`

const OptionItemContainer = styled.div`
  display: flex;
  align-items: center;
`

const SelectProvince = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`

const Navbar = ({
  shopData,
  categoryList,
  setSelectedCategory,
  showDrawer,
  setSelectedProvince,
  selectedProvince,
}) => {
  const { Option } = Select
  const provinces = shopData ? shopData.provinces : ""
  const categoryMenu = (
    <Menu>
      {categoryList ? (
        categoryList.map((category) => (
          <Menu.Item
            onClick={() => setSelectedCategory(category.name)}
            key={category.name}
          >
            {category.name}
          </Menu.Item>
        ))
      ) : (
        <></>
      )}
    </Menu>
  )

  function handleSelectProvinceChange(value) {
    setSelectedProvince(value)
  }

  return (
    <>
      <NavbarContainer>
        <MenuContainer>
          <DeskTopLogo
            src={require("../../public/assets/images/halfhalf-logo.png")}
          />
          <MobileLogo
            src={require("../../public/assets/images/halfhalf-logo-mini.png")}
          />
          <SearchBox>
            <SelectProvince>
              <Select
                defaultValue='closest'
                style={{
                  minWidth: "19.2rem",
                  fontSize: "1.4rem",
                  outline: "none",
                }}
                size='large'
                onChange={handleSelectProvinceChange}
                value={selectedProvince}
              >
                <Option value='closest'>
                  <OptionItemContainer>
                    <svg
                      width='16'
                      height='20'
                      style={{ marginRight: "0.8rem" }}
                    >
                      <path
                        d='M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z'
                        fill='#000'
                      ></path>
                    </svg>
                    พื้นที่ใกล้ฉัน
                  </OptionItemContainer>
                </Option>
                <Option value='all-place'>
                  <OptionItemContainer>
                    <svg
                      width='24'
                      height='30'
                      style={{ marginRight: "0.6rem" }}
                    >
                      <path
                        d='M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z'
                        fill='#222'
                        stroke='#fff'
                      ></path>
                      <path
                        d='M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z'
                        fill='#222'
                        stroke='#fff'
                      ></path>
                    </svg>
                    สถานที่ทั้งหมด
                  </OptionItemContainer>
                </Option>
                {provinces ? (
                  provinces.map((province) => (
                    <Option value={province} key={province}>
                      {province}
                    </Option>
                  ))
                ) : (
                  <></>
                )}
              </Select>
            </SelectProvince>
            <Dropdown overlay={categoryMenu} trigger={["click"]}>
              <Input.Search
                size='large'
                placeholder='ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป'
                style={{
                  fontSize: "1.4rem",
                  width: "100%",
                  borderLeft: "none",
                }}
              />
            </Dropdown>
          </SearchBox>
          <MobileFilter
            src={require("../../public/assets/images/filter.png")}
            onClick={showDrawer}
          />
        </MenuContainer>
      </NavbarContainer>
    </>
  )
}

export default Navbar
