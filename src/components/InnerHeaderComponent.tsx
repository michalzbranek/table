function InnerHeaderComponent({ data, uuid }: InnerHeaderProps) {
  return (
    <thead>
      <tr>
        {data[`${uuid}`].childrens.length !== 0 && <th>Rozbalit</th>}
        {data[`${uuid}`].childrens.length !== 0 &&
          Object.keys(data[`${data[`${uuid}`].childrens[0]}`].data).map(
            (header: string, index: number) =>
              header !== "uuid" && <th key={index}>{header}</th>
          )}
        {data[`${uuid}`].childrens.length !== 0 && <th>Smazat</th>}
      </tr>
    </thead>
  );
}
export default InnerHeaderComponent;
