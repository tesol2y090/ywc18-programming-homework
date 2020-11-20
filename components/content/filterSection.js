import styled from "styled-components"
import { useState } from "react"
import { Select, InputNumber, Button, Radio } from "antd"

const SearchFilter = styled.div`
  min-width: 35rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid rgba(160, 174, 192);
  border-radius: 0.125rem;
  background-color: #fff;
  margin-right: 3rem;
`

const SearchFilterHeader = styled.div`
  font-size: 1.6rem;
  letter-spacing: -0.02em;
`

const RadioSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`
const RangeSelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`

const OptionItemContainer = styled.div`
  display: flex;
  align-items: center;
`

const radioStyle = {
  display: "block",
  height: "30px",
}

const CreateSubCategory = ({
  categories,
  selectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
}) => {
  const subCategoryList = categories.filter(
    (subCat) => subCat.name === selectedCategory
  )

  function handleRadioChange(e) {
    setSelectedSubCategory(e.target.value)
  }

  return (
    <>
      {selectedCategory !== "ทั้งหมด" ? (
        <>
          <SearchFilterHeader
            className='font-semi-bold'
            style={{ marginTop: "4rem" }}
          >
            ประเภท{selectedCategory}
          </SearchFilterHeader>
          <RadioSelectContainer>
            <Radio.Group
              onChange={handleRadioChange}
              value={selectedSubCategory}
            >
              <Radio style={radioStyle} value='ทั้งหมด'>
                ทั้งหมด
              </Radio>
              {subCategoryList[0].subcategories.map((subCatName) => (
                <Radio style={radioStyle} value={subCatName}>
                  {subCatName}
                </Radio>
              ))}
            </Radio.Group>
          </RadioSelectContainer>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

const FilterSection = ({
  setSelectedCategory,
  selectedCategory,
  categories,
  provinces,
  extraStyle,
  selectedSubCategory,
  setSelectedSubCategory,
  setSelectedProvince,
  selectedProvince,
}) => {
  const { Option } = Select

  function handleRadioChange(e) {
    setSelectedCategory(e.target.value)
  }

  function handleSelectProvinceChange(value) {
    setSelectedProvince(value)
  }

  return (
    <>
      <SearchFilter style={extraStyle}>
        <SearchFilterHeader className='font-semi-bold'>
          ประเภทร้านค้า
        </SearchFilterHeader>
        <RadioSelectContainer>
          <Radio.Group onChange={handleRadioChange} value={selectedCategory}>
            <Radio key={"ทั้งหมด"} style={radioStyle} value={"ทั้งหมด"}>
              ทั้งหมด
            </Radio>
            <Radio
              key={"ร้านอาหารและเครื่องดื่ม"}
              style={radioStyle}
              value={"ร้านอาหารและเครื่องดื่ม"}
            >
              ร้านอาหารและเครื่องดื่ม
            </Radio>
            <Radio
              style={radioStyle}
              value={"ร้านค้า OTOP"}
              key={"ร้านค้า OTOP"}
            >
              ร้านค้า OTOP
            </Radio>
            <Radio style={radioStyle} value={"ร้านธงฟ้า"} key={"ร้านธงฟ้า"}>
              ร้านธงฟ้า
            </Radio>
            <Radio
              style={radioStyle}
              value={"สินค้าทั่วไป"}
              key={"สินค้าทั่วไป"}
            >
              สินค้าทั่วไป
            </Radio>
          </Radio.Group>
        </RadioSelectContainer>
        <SearchFilterHeader
          style={{ marginTop: "2.5rem" }}
          className='font-semi-bold'
        >
          จังหวัด/ใกล้ฉัน
        </SearchFilterHeader>
        <Select
          defaultValue='closest'
          style={{ width: "100%", marginTop: "1rem" }}
          onChange={handleSelectProvinceChange}
          value={selectedProvince}
        >
          <Option value='closest'>
            <OptionItemContainer>
              <svg width='16' height='20' style={{ marginRight: "0.8rem" }}>
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
              <svg width='24' height='30' style={{ marginRight: "0.6rem" }}>
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
              <Option value={province}>{province}</Option>
            ))
          ) : (
            <></>
          )}
        </Select>
        <SearchFilterHeader
          style={{ marginTop: "3.5rem" }}
          className='font-semi-bold'
        >
          ช่วงราคาสินค้า (บาท)
        </SearchFilterHeader>
        <RangeSelectContainer>
          <InputNumber
            min='0'
            max='1000000'
            placeholder='ราคาต่ำสุด'
            style={{ width: "100%" }}
          />
          <span style={{ margin: "0 0.5rem" }}>-</span>
          <InputNumber
            min='0'
            max='1000000'
            placeholder='ราคาสูงสุด'
            style={{ width: "100%" }}
          />
        </RangeSelectContainer>
        <Button type='primary' ghost style={{ marginTop: "1rem" }}>
          ตกลง
        </Button>
        <CreateSubCategory
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          selectedSubCategory={selectedSubCategory}
        />
      </SearchFilter>
    </>
  )
}

export default FilterSection
