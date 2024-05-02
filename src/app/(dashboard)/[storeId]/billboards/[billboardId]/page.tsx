import { BillboardForm } from '@/src/components/billboard-form';

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = null
  //await fetch(`/api/billboard/${params.billboardId}`);
  console.log(params.billboardId)

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 p-6'>
        <BillboardForm initialData={billboard}/>
      </div>
    </div>
  );
};

export default BillboardPage;
