import { useDispatch } from "react-redux";
import { deleteData, showData } from "../redux/data";

function InnerDataComponent({ data, uuid }: InnerDataProps) {
  const dispatch = useDispatch();
  const handleDelete = (uuid: string) => dispatch(deleteData(uuid));
  const handleShowHide = (uuid: string) => dispatch(showData(uuid));

  return (
    <tr className="table-row">
      {data[`${uuid}`] !== undefined &&
      data[`${uuid}`].childrens.length !== 0 ? (
        <td id="children" className="btn-icon" onClick={() => handleShowHide(uuid)}>
          {data[`${uuid}`].showChildrens ? "−" : "+"}
        </td>
      ) : (
        <td className="empty-cell"></td>
      )}
      {data[`${uuid}`] !== undefined &&
        Object.keys(data[`${uuid}`].data).map(
          (header: string, index: number) =>
            header !== "uuid" && (
              <td key={index}>
                {data[`${uuid}`].data[header as keyof ProcessedData]}
              </td>
            )
        )}
      <td id="delete" className="btn-icon" onClick={() => handleDelete(uuid)}>
        ×
      </td>
    </tr>
  );
}

export default InnerDataComponent;
