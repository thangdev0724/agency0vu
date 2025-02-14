import { WHATSAPP } from "@/constants/social";

function MessengerContact() {
  return (
    <div className="messenger">
      <div style={{ position: "relative" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 16 16"
        >
          <path
            fill="#ffffff"
            d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76s-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459l-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"
          ></path>
        </svg>

        <div className="optionsss">
          <a
            href="https://t.me/romanwarior"
            target="_blank"
            className="text-center block"
            rel="noreferrer"
          >
            <svg
              fill="#3b82f6"
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              style={{
                background: "rgb(59, 130, 246)",
                fill: "white",
                padding: "2px",
                borderRadius: "50%",
              }}
            >
              <path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={WHATSAPP}
            className="text-center block max-w-sm"
            style={{
              marginTop: "-8px !important",
              marginBottom: "10px ",
            }}
          >
            <svg
              fill="#22c55e"
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              style={{
                background: "rgb(34, 197, 94)",
                fill: "white",
                padding: "2px",
                borderRadius: "50%",
              }}
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MessengerContact;
