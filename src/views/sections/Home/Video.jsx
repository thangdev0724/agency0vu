function HomeVideo() {
  return (
    <div className="flex">
      <div className="mx-auto max-w-screen-xl p-4" data-v-ebacf1e2="">
        <div className="md:flex block">
          <div className="w-full rounded-lg">
            <video className="w-full rounded-lg" controls="">
              <source
                src="https://flowbite.com/docs/videos/flowbite.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.{" "}
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeVideo;
