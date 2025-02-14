import { getListProduct } from "@/utils/firebase";
import TableList from "@/views/sections/BuyAccount/TableList";
import { useEffect, useState } from "react";
import { Spin } from "antd";
function BuyAccountPage() {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function getData() {
    try {
      setIsLoading(true);
      const rs = await getListProduct();
      setDataList(rs);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setDataList([]);
    }
  }

  function provideData(type) {
    let data = [];
    if (type === "Tiktok") {
      data = dataList.filter((item) => item.productType !== "Facebook");
    } else {
      data = dataList.filter((item) => item.productType !== "Tiktok");
    }
    return data;
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="pt-24 flex">
      <div
        className="mx-auto max-w-screen-xl p-4 rounded-md w-full"
        style={{
          paddingBottom: "60px",
        }}
      >
        {!isLoading ? (
          <>
            <TableList
              title="Facebook account"
              dataList={provideData("Facebook")}
            />
            <TableList
              title="Tiktok account"
              dataList={provideData("Tiktok")}
            />
          </>
        ) : (
          <Spin spinning={isLoading} size="large" className="float-right" />
        )}
      </div>
    </div>
  );
}

export default BuyAccountPage;
