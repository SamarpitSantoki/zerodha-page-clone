import React from 'react'
import {
  Column,
  Table,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  Pagination,
  RowData,
} from '@tanstack/react-table'
import {Button, Table as BootTable} from 'reactstrap'


// Give our default column cell renderer editing superpowers!
const defaultColumn = {
  cell: ({ getValue, row: { index }, column: { id,...rest }, table }) => {
    const initialValue = getValue()
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue)

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {
      table.options.meta?.updateData(index, id, value)
    }

    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    return (
      <input

        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={onBlur}
        style={
          {
            border:0,
            width: "100%",
          }
        }
      />
    )
  },
}

function useSkipper() {
  const shouldSkipRef = React.useRef(true)
  const shouldSkip = shouldSkipRef.current

  // Wrap a function with this to skip a pagination reset temporarily
  const skip = React.useCallback(() => {
    shouldSkipRef.current = false
  }, [])

  React.useEffect(() => {
    shouldSkipRef.current = true
  })

  return [shouldSkip, skip]
}

function EditableTable({data,setData}) {

  const cols = Object.keys(data[0]).map(key=>({
    accessorKey: key,
    header: ()=> key,
    footer: props => props.column.id,
  }))
  
  const columns = React.useMemo(
    () => cols,
    []
  )
    // console.log('rerender',rowData);
  const refreshData = () => {}

  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper()

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    manualPagination: true,
    defaultPageSize:100,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex,
    
    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // Skip age index reset until after next rerender
        skipAutoResetPageIndex()
        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              }
            }
            return row
          })
        )
      },
    },
    debugTable: true,
  })
  function handleDelete(id){
    console.log('checkthis',data,id);
    setData(prev=>
      prev.filter((item,index)=>{
        console.log(index,id);
        if(index !== parseInt(id)){
          return item
        }
      })
    )
  }

  return (
    <div className="p-2">
      <div className="h-2" />
      <BootTable bordered >
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th scope='col' key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr scope='row' key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
                <td><Button onClick={()=>{
                  handleDelete(row.id)
                }}>Delete</Button></td>
              </tr>
            )
          })}
        </tbody>
      </BootTable>
      <div className="h-2" />
      
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
    </div>
  )
}
export default EditableTable