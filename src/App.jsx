import "@/assets/css/header.css";
export default function App() {
  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <div className="md:flex block">
        <div className="w-full md:w-2/5" data-v-1ac27ee3="">
          <p
            className="text-title text-gray-800 mobile-style"
            style={{
              paddingTop: "90px",
            }}
            data-v-1ac27ee3=""
          >
            About us
          </p>
          <p
            className="py-4 justify-text text-lg font-regular text-gray-700"
            data-v-1ac27ee3=""
          >
            Introducing Roman Agency: Your Premier Facebook and TikTok
            Advertising Solutions Provider Welcome to Roman Agency, your trusted
            partner in the realm of digital advertising! Specializing in
            Facebook and TikTok advertising account rentals, we pride ourselves
            on being a one-stop solution for advertisers seeking flexibility,
            reliability, and unmatched customer support....
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 healer:bg-blue-600 healer:hover:bg-blue-700 focus:outline-none healer:focus:ring-blue-800"
            data-v-1ac27ee3=""
          >
            {" "}
            See more...{" "}
          </button>
        </div>
        <div className="py-6 w-full md:w-3/5" data-v-1ac27ee3="">
          <img
            className="w-full float-right"
            style={{
              maxWidth: "521px",
            }}
            src="https://res.cloudinary.com/vnucg/image/upload/f_auto,q_auto/v1703061900/Images/rhxlxqiqmjqfajhnlgvh.png"
            data-v-1ac27ee3=""
          />
        </div>
      </div>
    </div>
  );
}
