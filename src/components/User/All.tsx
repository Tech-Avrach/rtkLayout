import React, { useState, useEffect } from 'react';
import PageContainer from '../Layout/PageContainer';
import { User } from 'lucide-react';
import { users } from "@/components/Dummy/users";
import xlsx, { IJsonSheet } from "json-as-xlsx";
import DataTable from '@/components/ui/data-table';
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, TrashIcon, EyeIcon, EditIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"; 
import { Button } from "@/components/ui/button"; 
import ContaierCard from '../ui/containerCard';

// Add type definitions if needed
type User = {
  id: number;
  userInfo: {
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    date_of_birth: string;
  };
};


function All() {

    const [filterText, setFilterText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [previousDisable, setPreviousDisable] = useState(true);
    const [nextDisable, setNextDisable] = useState(false);
    const [dataCount, setDataCount] = useState(10);

    const columns: ColumnDef<User>[] = [
        {
          id: "select",
          header: ({ table }) => {
            return (
              <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => {
                  table.toggleAllPageRowsSelected(!!value);
                }}
              />
            );
          },
          cell: ({ row }) => {
            return (
                <>
              <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => {
                  row.toggleSelected(!!value);
                }}
              />
              </>
            );
          },
          enableSorting: false,
          enableHiding: false,
        },
        {
          header: ({ column }) => {
            return (
                <div className=''>
              <Button
                variant="ghost"
                onClick={() => {
                  column.toggleSorting(column.getIsSorted() === "asc");
                }}
              >
                Person ID
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button> 
              </div>
            );
          },
          accessorKey: "id",
          cell: ({ row }) => {
            return <div className="font-medium pl-4">{row.original.id}</div>;
          }
        },
        {
          header: "First Name",
          cell: ({ row }) => {
            return <div className="font-medium">{row.original.userInfo.first_name}</div>
          }
        },
        {
          header: "Last Name",
          cell: ({ row }) => {
            return <div className="font-medium">{row.original.userInfo.last_name}</div>
          }
        },
        {
          header: "Email",
          cell: ({ row }) => {
            return <div className="font-medium">{row.original.userInfo.email}</div>
          }
        },
        {
          header: "Gender",
          cell: ({ row }) => {
            return <div className="font-medium">{row.original.userInfo.gender}</div>
          }
        },
        {
          header: "Date of Birth",
          cell: ({ row }) => {
            const formatted = new Date(row.original.userInfo.date_of_birth as string).toLocaleDateString();
            return <div className="font-medium">{formatted}</div>;
          },
        },
        { 
          header: "Actions",
          id: "actions",
          cell: ({ row }) => {
            const person = row.original;
            return (
              <div className="flex gap-3">
                <EyeIcon className="h-5 w-5 text-primary cursor-pointer"/>
                <EditIcon className="h-5 w-5 text-primary cursor-pointer"/>
                <TrashIcon className="h-5 w-5 text-red-700 dark:text-red-500 cursor-pointer"/>
              </div>
            );
          },
        },
      ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    setDataCount(dataCount + 10);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    setDataCount(dataCount - 10);
  };

  useEffect(() => {
    const totalDataCount = users.count;
    setNextDisable(dataCount >= totalDataCount);
    setPreviousDisable(currentPage <= 1);
  }, [dataCount, currentPage]);

  const downloadToExcel = () => {
    // Map the people data to flatten the userInfo object
    const dataForExport = users.users.map(user => ({
      id: user.id,
      first_name: user.userInfo.first_name,
      last_name: user.userInfo.last_name,
      email: user.userInfo.email,
      gender: user.userInfo.gender,
      date_of_birth: new Date(user.userInfo.date_of_birth).toLocaleDateString(),
    }));
  
    let columns: IJsonSheet[] = [
      {
        sheet: "Users",
        columns: [
          { label: "User ID", value: "id" },
          { label: "First Name", value: "first_name" },
          { label: "Last Name", value: "last_name" },
          { label: "Email", value: "email" },
          { label: "Gender", value: "gender" },
          { label: "Date of Birth", value: "date_of_birth" },
        ],
        content: dataForExport,
      },
    ];
  
    let settings = {
      fileName: "Users Excel", // Name of the Excel file
    };
  
    xlsx(columns, settings);
  };

  return (
        <PageContainer
        pageTitleIcon={<User size={24} />}
        pageHeading="User"
        pageSubTitle="List of all users"
    >
        <ContaierCard>
        <DataTable 
        columns={columns} 
        data={users.users} 
        searchValue={filterText} 
        onSearchChange={handleSearchChange}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        nextDisable={nextDisable}
        previousDisable={previousDisable}
        downloadToExcel={downloadToExcel}
      />
      </ContaierCard>
    </PageContainer>

  )
}

export default All