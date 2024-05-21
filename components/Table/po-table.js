import React from 'react'
import PoTableForm from './po-table-form'

const TableHead = ({ data }) => {
    
    const dataArray = Object.values(data || [])
    
    return (
        <thead className='sticky top-[1px] z-10 shadow-md'>
            <tr>
                <td className='w-[15rem] h-[4rem] text-center text-white bg-red-500 font-semibold relative lg:sticky lg:left-[1px]'>Stock ID</td>
                <td className='w-[15rem] h-[4rem] text-center text-white bg-red-500 font-semibold relative lg:sticky lg:left-[calc(15rem+2px)]'>Description</td>
                <td className='w-[10rem] h-[4rem] text-center text-white bg-red-500 font-semibold relative lg:sticky lg:left-[calc(30rem+3px)]'>Remaining</td>
                <td className='w-[10rem] h-[4rem] text-center text-white bg-red-500 font-semibold'>Total Order</td>
                <td className='w-[10rem] h-[4rem] text-center text-white bg-red-500 font-semibold'>Served</td>
                {
                    dataArray.length === 0 ? 
                    ( 
                        <td className='w-[10rem] md:w-[100%-30rem] h-[4rem] text-sm text-center bg-blue-200'>Empty Branch</td> 
                    ) 
                    : 
                    (
                        dataArray.map((row) => (
                            <td className='w-[10rem] h-[4rem] text-sm text-center bg-red-100' key={row.code}>{row.name}</td>
                        ))
                    )
                }
            </tr>
        </thead>
    )
}

const TableBody = ({ data, branches }) => {

    const dataPlValues = Object.values(data || [])
    const dataBranchValues = Object.values(branches || [])
  
    return (
        <tbody>
            {
                dataPlValues.length === 0 
                ?   <tr className='h-[4rem]'>
                        <td colSpan={5} className='bg-white text-center'>No Data. Please Generate PL</td>
                    </tr>
                :
                    dataPlValues.map((row, index) => (
                        <tr className='h-[4rem] text-sm' key={index}>
                            <td className='bg-red-100 text-center relative lg:sticky lg:left-[1px]'>{row.stock_id}</td>
                            <td className='bg-red-100 text-center font-semibold text-xs relative lg:sticky lg:left-[calc(15rem+2px)]'>{row.description}</td>
                            <td className={`${row.remaining !== 0 && 'text-red-600 font-bold'} bg-red-50 text-center relative lg:sticky lg:left-[calc(30rem+3px)]`}>{Math.round(row.remaining)}</td>
                            <td className='bg-white text-center'>{row.total_order}</td>
                            <td className='bg-white text-center'>{row.total_served}</td>
                            {
                                dataBranchValues.map((branch) => {
                                    const branchKey = Object.keys(row).find(key => key && key === branch.code);
                                    const branchData = branchKey ? row[branchKey] : null;
                                    
                                    return (
                                        <td className='bg-white text-center' key={branch.code}>
                                            <span className={`mr-2 ${branchData.dist === 0 && 'font-semibold text-red-600'}`}>{branchData.order !== 0 ? `Order: ${branchData.order}`: ''}</span> 
                                            <span className='mr-2'>{branchData.dist !== 0 ? `Dist: ${branchData.dist}`: ''}</span> 
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    ))
            }
        </tbody>
    )
}

function PoTable(props) {

    const {branch, transfer, setForm} = props

    return (
        <div className='overflow-x-auto max-w-full h-[100%] max-h-[100%]'>
            <PoTableForm transfer={[transfer, setForm]} />

            <table className='table-fixed border-separate w-full'>
                <TableHead data={branch} />
                <TableBody data={transfer} branches={branch}/>
            </table>
        </div>
    )
}

export default PoTable