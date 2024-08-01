import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  ROW: "row",
};

const DraggableRow = ({
  row,
  index,
  moveRow,
  removeRow,
  handleInputChange,
}) => {
  const ref = React.useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ROW,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.ROW,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <tr ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <td style={{ cursor: "move" }}>☰</td>
      <td>
        <input
          type="text"
          name="name"
          value={row.name}
          onChange={(event) => handleInputChange(index, event)}
        />
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          value={row.quantity}
          onChange={(event) => handleInputChange(index, event)}
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={row.price}
          onChange={(event) => handleInputChange(index, event)}
        />
      </td>
      <td>
        <button onClick={() => removeRow(index)}>Remove</button>
      </td>
    </tr>
  );
};

const EditableTable = ({ tablehead }) => {
  const [rows, setRows] = useState([
    { id: "1", name: "", quantity: "", price: "", amount: "" },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: `${rows.length + 1}`,
        name: "",
        quantity: "",
        price: "",
        amount: "",
      },
    ]);
  };

  const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = rows.map((row, i) =>
      i === index ? { ...row, [name]: value } : row
    );
    setRows(newRows);
  };

  const moveRow = (dragIndex, hoverIndex) => {
    const newRows = [...rows];
    const [movedRow] = newRows.splice(dragIndex, 1);
    newRows.splice(hoverIndex, 0, movedRow);
    setRows(newRows);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <table>
        <thead>
          <tr>
            {tablehead?.map((i) => (
              <th>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <DraggableRow
              key={row.id}
              index={index}
              row={row}
              moveRow={moveRow}
              removeRow={handleRemoveRow}
              handleInputChange={handleInputChange}
            />
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Item</button>
    </DndProvider>
  );
};

export default EditableTable;
