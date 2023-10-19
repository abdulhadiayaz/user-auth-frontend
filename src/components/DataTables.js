import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

function DataTables(props) {
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
        responsive={true}
        pagination={props.pagination && props.pagination}
        showPagination={props.showPagination && props.showPagination}
        onRowClicked={props.onRowClicked}
        fixedHeader={props.fixedHeader && props.fixedHeader}
        fixedHeaderScrollHeight={
          props.fixedHeaderScrollHeight && props.fixedHeaderScrollHeight
        }
        paginationPerPage={props.paginationPerPage}
        noDataComponent={props.noDataComponent}
        paginationRowsPerPageOptions={props.paginationRowsPerPageOptions}
      />
    </DataTableExtensions>
  );
}

export default DataTables;
