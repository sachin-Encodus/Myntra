import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import "./homeScreen.css";
import { data } from "../../constant/data";
const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [item, setitem] = useState(data);
  const [wishList, setWishList] = useState([]);
  const [filterItem, setFilterItem] = useState({
    gender: null,
    brand: [
      { name: "Roadster", checked: false },
      { name: "HIGHLANDER", checked: false },
      { name: "SASSAFRAS", checked: false },
    ],
    pricerange: false,
  });
  // console.log("=========>>>>>>>>>xxxxxxxxxxx", filterItem.pricerange);
  const SetFilterData = () => {
    const searchData = item.filter((i) =>
      i.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setitem(searchData);
  };
  console.log("search", search);
  useEffect(() => {
    if (filterItem.gender !== null) {
      const setGender = data.filter((i) => i.gender === filterItem.gender);

      setitem(setGender);
    }

    if (filterItem.brand.some((e) => e.checked === true)) {
      const check = filterItem.brand
        .filter((i) => i.checked === true)
        .map((p) => p.name);
      const brandName = item.filter((t) => check.includes(t.name));
      setitem(brandName);
      console.log(item.filter((t) => check.includes(t.name)));
    }
    if (filterItem.pricerange) {
      const SetPriceRange = item.filter(
        (e) => e.price >= 600 && e.price <= 1000
      );
      setitem(SetPriceRange);
      // console.log("=============price", SetPriceRange);
    }
    // var arr1 = [1, 2, 3, 4],
    //   arr2 = [2, 4],
    //   res = arr1.filter((item) => arr2.includes(item));
    // console.log(res);
  }, [filterItem]);

  const Shorting = (val) => {
    // const pricedata1 = data.sort((a, b) => b.price - a.price);
    // setitem([...pricedata1]);
    // console.log("==============xxxxxxxxxxdescending", pricedata1);

    if (val === "descending") {
      const pricedata1 = item.sort((a, b) => b.price - a.price);
      setitem([...pricedata1]);
      console.log("==============xxxxxxxxxxdescending", pricedata1);
    } else {
      const pricedata2 = item.sort((a, b) => a.price - b.price);
      console.log("==============xxxxxxxxxascending", pricedata2);
      setitem([...pricedata2]);
    }
  };
  console.log("===========>>>>>>>>w", wishList);
  return (
    <div>
      <Navbar
        wishList={wishList}
        search={search}
        setSearch={setSearch}
        SetFilterData={SetFilterData}
        setWishList={setWishList}
      />
      <div className="app_home">
        <Sidebar filterItem={filterItem} setFilterItem={setFilterItem} />
        <Main
          data={item}
          Shorting={Shorting}
          setWishList={setWishList}
          wishList={wishList}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
