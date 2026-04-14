import InnerDataComponent from "./InnerDataComponent";
import InnerHeaderComponent from "./InnerHeaderComponent";

function TableComponent({ data, uuid, showChildrens }: TableComponentProps) {
  return (
    <>
      <InnerDataComponent data={data} uuid={uuid} />
      {showChildrens && (
        <tr>
          <td colSpan={100} className="nested-table-container">
            <table className="nested-table" width="100%">
              <InnerHeaderComponent data={data} uuid={uuid} />
              <tbody>
                {data[`${uuid}`].childrens.length !== 0 &&
                  data[`${uuid}`].childrens.map(
                    (uuid: string, index: number) => {
                      return (
                        <TableComponent
                          key={index}
                          data={data}
                          uuid={uuid}
                          showChildrens={data[`${uuid}`].showChildrens}
                        />
                      );
                    }
                  )}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
}

export default TableComponent;