import CustomButton from '../../../components/CustomButton';
// import { useForm, UseFormReturn } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import HeaderCard from '../../../components/Cards/HeaderCards';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import HeaderCardIcon from '../../../components/Cards/HeaderCards/headerCardWithIcon';

const arr = [
  {
    title: 'Pending',
    subtitle: '',
    val: 7265,
    isSelected: false,
    route: '/dashboard/pending',
  },
  {
    title: 'Verified',
    subtitle: '',
    val: 3631,
    isSelected: false,
    route: '/dashboard/verified',
  },
  {
    title: 'Query Back',
    subtitle: '',
    val: 156,
    isSelected: false,
    route: '/dashboard/queryBack',
  },
  {
    title: 'Rejected',
    subtitle: '',
    val: 2318,
    isSelected: false,
    route: '/dashboard/rejected',
  },
];

export const stateSchema = z.object({
  id: z.any().optional(),
  stateName: z.string(),
  stateNameLl: z.string(),
  stateShortName: z.string(),
  ut: z.boolean(),
  availableFpsMobile: z.boolean(),
  centralPgrmsState: z.boolean(),
  code: z.string(),
});

const Index = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // const stateDefaultValues: z.infer<typeof stateSchema> = {
  //   id: '',
  //   stateName: '',
  //   stateNameLl: '',
  //   stateShortName: '',
  //   code: '',
  //   ut: false,
  //   availableFpsMobile: false,
  //   centralPgrmsState: false,
  // };

  // const methods: UseFormReturn<any> = useForm<z.infer<typeof stateSchema>>({
  //   resolver: zodResolver(stateSchema),
  //   mode: 'all',
  //   defaultValues: stateDefaultValues,
  // });

  const cardClickHandler = (item: any, index: number) => {
    console.log('Clicked Card:', item, 'at index:', index);
    setSelectedIndex(index); // Update selected index
    navigate(item.route);
  };

  return (
    <section className="p-2">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Dashboard</h1>
        <div className="flex justify-between items-center gap-2 w-2/4">
          <CustomButton fullWidth type="contained" variant="info">
            New RC Card
          </CustomButton>
          <CustomButton fullWidth type="contained" variant="primary">
            New FPS Licience
          </CustomButton>
        </div>
      </div>
      <div className="flex justify-between flex-row mt-4">
        {arr.map((item, index) => (
          <HeaderCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            val={item.val}
            isSelected={selectedIndex === index}
            onClick={() => cardClickHandler(item, index)} // Pass item and index
          />
        ))}
      </div>
      <h1 className="font-bold py-3">FPS Application Details</h1>
      <div className="flex justify-between flex-row mt-4">
        {arr.map((item, index) => (
          <HeaderCardIcon
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            val={item.val}
            // onClick={() => cardClickHandler(item, index)} // Pass item and index
          />
        ))}
      </div>
    </section>
  );
};

export default Index;
