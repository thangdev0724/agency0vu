import "@/assets/css/header.css";
import HomeAboutUs from "@/views/sections/Home/AboutUs";
import HomeActivity from "@/views/sections/Home/Activity";
import HomeApplication from "@/views/sections/Home/Application";
import HomeContactList from "@/views/sections/Home/ContactList";
import HomeFacebookRentalService from "@/views/sections/Home/FacebookRentalService";
import OtherHaveToSay from "@/views/sections/Home/OtherHaveToSay";
import HomeVideo from "@/views/sections/Home/Video";
export default function HomePage() {
  return (
    <>
      <HomeAboutUs />
      <HomeActivity />
      <HomeFacebookRentalService />
      <HomeVideo />
      {/* <HomeTiktokService /> */}
      <HomeApplication />
      <OtherHaveToSay />
      <HomeContactList />
    </>
  );
}
