import Form from "react-bootstrap/Form";
import { apartFilter } from "../../constants";
import { IApart1, IApart2, IApart3 } from "../../common/icons";
import { GrPowerReset } from "react-icons/gr";

export default function ApartTypeFilterForm({ apartTypes, setApartTypes }) {
  const handleSelect = (type) => {
    let types = [...apartTypes];
    let index = apartTypes.indexOf(type);
    if (index < 0) {
      types.push(type);
    } else {
      types.splice(index, 1);
    }    
    setApartTypes(types);
  };

  return (
    <Form style={{ minWidth: "230px" }}>
      {apartFilter?.map((item, index) => (
        <div className="px-3 py-1" key={index}>
          <div className="d-inline-flex gap-1">
            {item.value === 0 && <IApart1 />}
            {item.value === 1 && <IApart2 />}
            {item.value === 2 && <IApart3 />}
            <span>{item.name}</span>
          </div>
          <Form.Check
            type="checkbox"
            reverse
            aria-label={item.name}
            className="float-end"
            onClick={() => handleSelect(item)}
            onChange={() => null}
          />
        </div>
      ))}
      <button
        type="reset"
        className="border-0 bg-white text-start ps-3 py-1 text-hover-main fs-14 fw-500"
        onClick={() => setApartTypes([])}
      >
        <GrPowerReset /> Đặt lại
      </button>
    </Form>
  );
}
