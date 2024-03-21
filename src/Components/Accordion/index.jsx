import "./style.css";
import data from "./data";
import { useState } from "react";
export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingle(itemId) {
    setSelected(itemId == selected ? null : itemId);
  }
  function handleMulti(itemId) {
    let copyMulti = [...multiple];
    const indexOfCurrent = copyMulti.indexOf(itemId);
    indexOfCurrent === -1
      ? copyMulti.push(itemId)
      : copyMulti.splice(indexOfCurrent, 1);
    setMultiple(copyMulti);
    console;
  }
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMulti(!enableMulti);
          setMultiple([]);
          setSelected(null);
        }}
      >
        {enableMulti ? "Disable multi selection" : "Enable multi selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMulti
                    ? () => handleMulti(dataItem.id)
                    : () => handleSingle(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>

                <span className="sing">
                  {selected == dataItem.id ? "-" : "+"}
                </span>
              </div>
              {selected == dataItem.id ||
              multiple.indexOf(dataItem.id) != -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data found</div>
        )}
      </div>
    </div>
  );
}
