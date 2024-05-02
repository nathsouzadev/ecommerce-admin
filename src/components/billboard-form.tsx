'use client';

import { Heading } from './heading';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';
import { Separator } from './ui/separator';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import toast from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';
import { useStoreData } from '@/src/hooks/use-store';
import { AlertModal } from './modals/alert-modal';
import { BillboardModel } from '../models/billboard.model';

type BillboardFormValues = z.infer<typeof formSchema>;

interface BillboardFormProps {
  initialData: BillboardModel | null;
}

const formSchema = z.object({
  label: z.string().min(1),
  imageUrl: z.string().url().min(1),
});

export const BillboardForm: React.FC<BillboardFormProps> = ({
  initialData,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();
  const setStore = useStoreData((state) => state.setStore);
  const getStore = useStoreData((state) => state.fetchStore);

  const pageCopy = initialData
    ? {
      label: 'Edit billboard',
      description: 'Edit a billboard',
      toastMessage: 'Billboard updated',
      action: 'Save changes',
    }
    : {
      label: 'Create a billboard',
      description: 'Add a new billboard',
      toastMessage: 'Billboard created',
      action: 'Create',
    };

  const form = useForm<BillboardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      label: '',
      imageUrl: '',
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: BillboardFormValues) => {
    try {
      const response = await fetch(`/api/stores/${params.storeId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      setStore(data.store);
      router.refresh();
      toast.success('Settings updated');
    } catch (error) {
      toast.error('Failed to update settings');
    }
  };

  const onDelete = async () => {
    try {
      await fetch(`/api/stores/${params.storeId}`, {
        method: 'DELETE',
      });
      getStore();
      toast.success('Store deleted!');
      window.location.assign('/');
    } catch (error) {
      console.log(error);
      toast.error(
        'Make sure you have no any pending data before deleting the store.',
      );
    } finally {
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        isLoading={isLoading}
      />
      <div className='flex items-center justify-between'>
        <Heading title={pageCopy.label} description={pageCopy.description} />
        {initialData && (
          <Button
            variant='destructive'
            size='icon'
            onClick={() => setOpen(true)}
          >
            <Trash className='h-4 w-4' />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-full'
        >
          <div className='grid grid-cols-3 gap-8'>
            <FormField
              control={form.control}
              name='label'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder='Billboard label'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isLoading} className='ml-auto' type='submit'>
            {pageCopy.action}
          </Button>
        </form>
      </Form>
      <Separator />
    </>
  );
};
