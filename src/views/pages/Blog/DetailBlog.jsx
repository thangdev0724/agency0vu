/* eslint-disable react/prop-types */
import { getDetailDocument } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

function DetailBlog() {
  let { blogId } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  async function fetchDataDetail() {
    try {
      setIsLoading(true);
      const response = await getDetailDocument(blogId, "blog");
      if (response) {
        setData(response);
      }
      setIsLoading(false);
    } catch (error) {
      setData({});
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDataDetail();
  }, []);
  return (
    <Spin
      spinning={isLoading}
      style={{
        minHeight: "calc(100vh - 312px)",
      }}
    >
      <div className="pt-24">
        <div className="mx-auto">
          <div
            className="text-center bg-blue-500 text-white flex justify-center items-center"
            style={{
              minHeight: 300,
            }}
          >
            <h2 className="text-xl text-[36px]">{data.title}</h2>
          </div>
        </div>
        <div className=" mx-auto max-w-screen-xl p-4">
          <div
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
            className="ck-content ck-view"
          ></div>
        </div>
      </div>
    </Spin>
  );
}

export default DetailBlog;
