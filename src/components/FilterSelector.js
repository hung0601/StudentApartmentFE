import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";

export default function FilterSelector({ children, icon, current }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="position-relative select-filter"
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(true)}
    >
      <div
        className="d-inline-flex border-main rounded bg-white py-2 px-2 cursor-pointer"
        style={{ minWidth: "240px" }}
      >
        <div className="d-inline-flex align-items-center gap-2">
          {icon || ""}
          <span className="fs-14 fw-500">{current}</span>
        </div>
        <button
          type="button"
          className="border-0 rounded bg-light ms-auto text-main "
        >
          <IoIosArrowDown />
        </button>
      </div>
      <div className="mt-1"></div>
      <div
        className={clsx(
          "position-absolute end-0 top-100 shadow bg-white py-1",
          !show && "visually-hidden"
        )}
        style={{ minWidth: "200px", zIndex: 2 }}
      >
        <div className="fs-14 fw-500">{children}</div>
      </div>
    </div>
  );
}
