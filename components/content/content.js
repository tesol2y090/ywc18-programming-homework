import styled from "styled-components"
import { Tag, Tooltip, Drawer } from "antd"

import FilterSection from "../content/filterSection.js"
import NoMerchantsText from "./noMerchantsText.js"

const ContentContainer = styled.div`
  width: 100vw;
  padding: 1.8rem 1.6rem 3.2rem;
`

const Header = styled.div`
  font-size: 2rem;
  letter-spacing: -0.02em;
  margin-bottom: 4.8rem;
`

const SearchSection = styled.div`
  display: flex;
  align-items: flex-start;
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ShopCard = styled.div`
  background-color: white;
  border: 1px solid rgb(201, 225, 233);
  display: flex;
  align-items: flex-start;
  min-height: 23.6rem;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const ShopCardImg = styled.img`
  width: 25rem;
  height: 25rem;
  padding: 0.5rem;
  @media (max-width: 1024px) {
    padding: 0;
    width: 100%;
    height: 22.4rem;
  }
`

const ShopCardDetailContainer = styled.div`
  width: 100%;
  padding: 1.6rem;
`

const ShopCardName = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`

const ShopCardDetail = styled.div`
  display: block;
  align-items: center;
  font-size: 1.4rem;
  color: #999;
`

const ShopCardDivider = styled.div`
  width: 65%;
  height: 1px;
  background-color: rgb(238, 238, 238);
  margin: 18px 0px;
`

const ShopCardFaciCircle = styled.div`
  max-width: 29.59px;
  max-height: 29.59px;
  border-radius: 50%;
  padding: 0.5rem;
  border: 1px solid rgb(108, 191, 95);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.6rem;
`

const ShopCardLegendContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.6rem 0;
`

const LegendImg = styled.img`
  width: 1.759rem;
  height: 1.759rem;
`

const DrawerHeader = styled.div`
  background-color: rgb(42, 67, 101);
  color: #fff;
  min-height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
`

const HiderFilter = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const extraStyleDrawer = {
  border: "none",
  padding: "4rem",
  margin: 0,
}

const OpenStatusLabel = ({ status }) => {
  return (
    <>
      {status === "Y" ? (
        <Tag
          style={{
            marginLeft: "1rem",
          }}
          color='#1ac300'
        >
          เปิดอยู่
        </Tag>
      ) : status === "N" ? (
        <Tag
          style={{
            marginLeft: "1rem",
          }}
          color='#a1a1a1'
        >
          ปิดแล้ว
        </Tag>
      ) : (
        <></>
      )}
    </>
  )
}

const CreateFaciLabel = ({ label }) => {
  let legendSrc
  switch (label) {
    case "ที่จอดรถ":
      legendSrc = require("../../public/assets/images/parking.png")
      break
    case "สามารถนำสัตว์เลี้ยงเข้าได้":
      legendSrc = require("../../public/assets/images/pet.png")
      break
    case "รับจองล่วงหน้า":
      legendSrc = require("../../public/assets/images/canbook.png")
      break
    case "จำหน่ายเครื่องดื่มแอลกอฮอล์":
      legendSrc = require("../../public/assets/images/beer.png")
      break
    case "บริการจัดส่งอาหาร":
      legendSrc = require("../../public/assets/images/delivery.png")
      break
    case "รับบัตรเครดิต":
      legendSrc = require("../../public/assets/images/credit.png")
      break
    default:
      break
  }
  return (
    <Tooltip title={label}>
      <ShopCardFaciCircle>
        <LegendImg src={legendSrc} />
      </ShopCardFaciCircle>
    </Tooltip>
  )
}

const CreateMerchantsCard = ({ data, priceRange }) => {
  return (
    <ShopCard key={data.shopNameTH}>
      <ShopCardImg src={data.coverImageId} />
      <ShopCardDetailContainer>
        <ShopCardName className='font-semi-bold'>
          {data.shopNameTH}
          {<OpenStatusLabel status={data.isOpen} />}
        </ShopCardName>
        <ShopCardDetail>
          {data.categoryName} <span style={{ margin: "0 0.75rem" }}>|</span>
          {priceRange[data.priceLevel - 1]}
          <span style={{ margin: "0 0.75rem" }}>|</span>
          {data.addressDistrictName} {data.addressProvinceName}
        </ShopCardDetail>
        <ShopCardDivider />
        <ShopCardDetail
          dangerouslySetInnerHTML={{ __html: data.highlightText }}
        />
        <ShopCardDetail>
          <span style={{ color: "#000" }} className='font-medium'>
            เมนูแนะนำ :
          </span>
          &nbsp;{data.recommendedItems.join(", ")}
        </ShopCardDetail>
        <ShopCardLegendContainer>
          {data.facilities.map((label) => (
            <CreateFaciLabel label={label} />
          ))}
        </ShopCardLegendContainer>
      </ShopCardDetailContainer>
    </ShopCard>
  )
}

const Content = ({
  shopData,
  selectedCategory,
  setSelectedCategory,
  isDrawerOpen,
  onClose,
  displayMerchantsList,
  setSelectedSubCategory,
  selectedSubCategory,
  setSelectedProvince,
  selectedProvince,
}) => {
  const provinces = shopData ? shopData.provinces : ""
  const priceRange = shopData ? shopData.priceRange : ""
  const categories = shopData ? shopData.categories : []

  return (
    <ContentContainer>
      <Drawer
        placement='right'
        closable={false}
        onClose={onClose}
        visible={isDrawerOpen}
        width='100%'
        style={{ padding: 0 }}
      >
        <DrawerHeader>
          <svg
            viewBox='64 64 896 896'
            width='1em'
            height='1em'
            fill='#fff'
            style={{ left: "1.6rem", position: "absolute" }}
            onClick={onClose}
          >
            <path d='M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z'></path>
          </svg>
          ก<span className='font-medium'>รอกผล</span>
        </DrawerHeader>
        <FilterSection
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          provinces={provinces}
          categories={categories}
          extraStyle={extraStyleDrawer}
        />
      </Drawer>
      <Header className='font-semi-bold'>
        ผลการค้นหา {selectedCategory}{" "}
        {selectedCategory !== "ทั้งหมด" ? "ทั้งหมด" : ""}
      </Header>
      <SearchSection>
        <HiderFilter>
          <FilterSection
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
            setSelectedProvince={setSelectedProvince}
            selectedProvince={selectedProvince}
            provinces={provinces}
            categories={categories}
          />
        </HiderFilter>
        <CardContainer>
          {!displayMerchantsList ? (
            <>Loading ...</>
          ) : displayMerchantsList.length === 0 ? (
            <NoMerchantsText />
          ) : (
            displayMerchantsList.map((data) => (
              <CreateMerchantsCard
                key={data.shopNameTH}
                data={data}
                priceRange={priceRange}
              />
            ))
          )}
        </CardContainer>
      </SearchSection>
    </ContentContainer>
  )
}

export default Content
