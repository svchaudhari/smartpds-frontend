// import CustomSearchInput from '../../CustomSearchInput';
// import CustomButton from '../../CustomButton';
// import { ChevronRight } from '../../LogoComponents';
import SearchIcon from '../../LogoComponents/SearchIcon';

const DashboardControls = () => {
  return (
    <div
      className="flex flex-col gap-4 p-6 rounded-lg"
      style={{ backgroundColor: 'white' }}
    >
      <div className="text-lg font-bold text-[#030229]">Dashboard</div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-2 w-full sm:w-[600px]">
          <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-md bg-white w-full sm:w-[350px]">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search by Application Number, Name, Date Etc.."
              className="w-full h-full border-none focus:outline-none bg-white text-sm"
            />
          </div>

          <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-md bg-white">
            <select className="w-full border-none focus:outline-none bg-white">
              <option value="filter">Filter</option>
              <option value="opt1">Option A</option>
              <option value="opt2">Option B</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex justify-center items-center gap-2 px-6 py-2 rounded-md bg-[#eca529] text-sm font-semibold" style={{color: 'white'}}>
            New RC Card
          </button>
          <button className="flex justify-center items-center gap-2 px-6 py-2 rounded-md border border-[#693b17] bg-[#693b17] text-sm font-semibold" style={{color: 'white'}}>
            New FPS License
          </button>
        </div>
      </div>
    </div>
  );

  // const handleSearch = (query: string) => {
  //   console.log('Searching for:', query);
  // };

  //return (
  // <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-6">
  //   <div className="text-2xl font-bold mb-4">Dashboard</div>
  //   <div className="flex items-center justify-between">

  //     <CustomSearchInput
  //       placeholder="Search by Application Number, Name, Date Etc.."
  //       onSearch={handleSearch}
  //       icon={<ChevronRight />}
  //     />

  //     <select className="p-2 w-40 border border-gray-300 rounded-md">
  //       <option value="all">All</option>
  //       <option value="active">Active</option>
  //       <option value="inactive">Inactive</option>
  //     </select>

  //     <div className="flex gap-4">
  //       <CustomButton type="contained" variant="warning" buttonType="button">
  //         New RC Card
  //       </CustomButton>
  //       <CustomButton type="contained" variant="error" buttonType="button">
  //         New FPS License
  //       </CustomButton>
  //     </div>
  //   </div>
  // </div>
  //);
};

export default DashboardControls;
