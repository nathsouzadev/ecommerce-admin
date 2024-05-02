'use client';

import { Plus } from 'lucide-react';
import { Heading } from './heading';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useParams, useRouter } from 'next/navigation';

export const BillboardClient = () => {
  const router = useRouter();
  const params = useParams();
    
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Billboards ${0}`}
          description='Manage your billboards here'
        />
        <Button onClick={() => router.push(`/${params.id}/billboards/new`)}>
          <Plus size={16} className='mr-2 h-4 w-4' />
          Add new
        </Button>
      </div>
      <Separator />
    </>
  );
};
