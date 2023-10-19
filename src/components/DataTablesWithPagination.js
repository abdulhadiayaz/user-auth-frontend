import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

function DataTableWithPagination(props) {
  return (
    <DataTableExtensions
      columns={props.columns(props.parameterOfColumns)}
      data={props.data}
      export={false}
      print={false}
      filter={props.disableFilter && false}
      filterPlaceholder={props.placeholder}
    >
      <DataTable
        progressPending={props.isLoading}
        progressComponent={props.progressComponent}
        highlightOnHover
        striped
        pagination
        paginationServer
        paginationTotalRows={props.paginationTotalRows}
        paginationPerPage={props.paginationPerPage}
        paginationDefaultPage={props.paginationDefaultPage}
        paginationComponentOptions={{
          noRowsPerPage: true,
        }}
        onChangePage={props.onChangePage}
        responsive={true}
        onRowClicked={props.onRowClicked}
        fixedHeader={props.fixedHeader}
      />
    </DataTableExtensions>
  );
}

export default DataTableWithPagination;
