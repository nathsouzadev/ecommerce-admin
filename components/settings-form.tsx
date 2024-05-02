'use client';

import { StoreModel } from '@/models/store.model';
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
import { useRouter } from 'next/navigation';
import { useStoreData } from '@/hooks/use-store';
import { AlertModal } from './modals/alert-modal';
import { ApiAlert } from './api-alert';
import { useOrigin } from '@/hooks/use-origin';

interface SettingsFormProps {
  initialData: StoreModel;
}

const formSchema = z.object({
  name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const setStore = useStoreData((state) => state.setStore);
  const store = useStoreData((state) => state.store);
  const getStore = useStoreData((state) => state.fetchStore);
  const origin = useOrigin();

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: SettingsFormValues) => {
    try {
      const response = await fetch(`/api/store/${initialData.id}`, {
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
      await fetch(`/api/store/${initialData.id}`, {
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
        <Heading title='Settings' description='Manage store settings' />
        <Button variant='destructive' size='icon' onClick={() => setOpen(true)}>
          <Trash className='h-4 w-4' />
        </Button>
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
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder='Store name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isLoading} className='ml-auto' type='submit'>
            Save changes
          </Button>
        </form>
      </Form>
      <Separator />
      <ApiAlert
        title='NEXT_API_PUBLIC_URL'
        description={`${origin}/api/store/${store?.id}`}
        variant='public'
      />
    </>
  );
};
