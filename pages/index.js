import { useEffect, useState } from "react"
import Head from "next/head"
import Navbar from "../components/navbar/navbar.js"
import Pagebar from "../components/pagebar/pagebar.js"
import Content from "../components/content/content.js"
import axios from "axios"

export default function Home() {
  const [shopData, setShopData] = useState()
  const [categoryList, setCategoryList] = useState()
  const [initialMerchantsLists, setInitialMerchantsLists] = useState()
  const [displayMerchantsList, setDisplayMerchantsList] = useState()
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด")
  const [selectedSubCategory, setSelectedSubCategory] = useState("ทั้งหมด")
  const [selectedProvince, setSelectedProvince] = useState("closest")
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const showDrawer = () => {
    setIsDrawerOpen(true)
  }

  const onClose = () => {
    setIsDrawerOpen(false)
  }

  useEffect(() => {
    const getShopData = async () => {
      const { data } = await axios.get("https://panjs.com/ywc18.json")
      setShopData(data)
      setInitialMerchantsLists(data.merchants)
      setDisplayMerchantsList(data.merchants)
      setCategoryList(data.categories)
    }
    getShopData()
  }, [])

  useEffect(() => {
    if (!initialMerchantsLists) return
    if (selectedProvince === "closest") {
      setDisplayMerchantsList([...initialMerchantsLists])
      return
    }
    const newMerchantsList = JSON.parse(JSON.stringify(initialMerchantsLists))
    setDisplayMerchantsList([
      ...newMerchantsList.filter(
        (merchant) => merchant.addressProvinceName === selectedProvince
      ),
    ])
    console.log(selectedProvince)
  }, [selectedProvince])
  return (
    <>
      <Head>
        <title>คนละครึ่ง</title>
      </Head>
      <Navbar
        shopData={shopData}
        categoryList={categoryList}
        setSelectedCategory={setSelectedCategory}
        showDrawer={showDrawer}
        setSelectedProvince={setSelectedProvince}
        selectedProvince={selectedProvince}
      />
      <Pagebar />
      <Content
        shopData={shopData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isDrawerOpen={isDrawerOpen}
        onClose={onClose}
        displayMerchantsList={displayMerchantsList}
        setSelectedSubCategory={setSelectedSubCategory}
        selectedSubCategory={selectedSubCategory}
        setSelectedProvince={setSelectedProvince}
        selectedProvince={selectedProvince}
      />
    </>
  )
}
