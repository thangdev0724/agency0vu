import CardItem from "@/components/Card/CardItem";
import { BLOG_LIST } from "@/constants/blog";
import { getListProduct } from "@/utils/firebase";
import { Space, Spin } from "antd";
import { useEffect, useState } from "react";
function BlogPage() {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  async function fetchData() {
    try {
      setIsLoading(true);
      const rs = await getListProduct("blog");
      if (rs && rs.length > 0) {
        setBlogList(rs);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setBlogList([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="pt-24"
      style={{
        minHeight: "calc(100vh - 312px)",
      }}
    >
      <Spin spinning={isLoading}>
        <div className="mx-auto">
          <div
            className="text-center bg-blue-500 text-white flex justify-center items-center"
            style={{
              minHeight: 300,
            }}
          >
            <h2 className="text-xl text-[36px]">BLOG</h2>
          </div>
        </div>
        <div className=" mx-auto max-w-screen-xl p-4">
          <Space
            direction="horizontal"
            size="middle"
            className="sm:block md:flex block"
            wrap={true}
          >
            {blogList.map((item, idx) => (
              <CardItem key={idx} item={item} />
            ))}
          </Space>
        </div>
      </Spin>
    </div>
  );
}

export default BlogPage;
