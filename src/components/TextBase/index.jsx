/* eslint-disable react/prop-types */

function TextBase({ title, content }) {
  return (
    <div className="ql-editor">
      <div>
        <h2 className="text-justify">
          <span className="text-base">
            <span className="font-time-news">
              <strong>{title}</strong>
              <br />
              <span
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              ></span>
            </span>
          </span>
          <br />
          &nbsp;
        </h2>
      </div>
    </div>
  );
}

export default TextBase;
