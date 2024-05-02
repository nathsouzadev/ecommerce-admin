'use client';

import { Modal } from '../modal';
import { useStoreModal } from '@/src/hooks/use-store-modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(1),
})

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  })
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/store', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      const result = await response.json();
      router.push(`/${result.store.id}`)
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      form.reset();
    }
  }

  return (
    <Modal
      title='Create store'
      description='Create a new store'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div className='space-y-4 py-4 pb-4'>
        <Form
          {...form}
        >
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='E-commerce'
                      disabled={isLoading}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
              <Button 
                variant='outline' 
                onClick={storeModal.onClose}
                disabled={isLoading}
              >
                  Cancel
              </Button>
              <Button 
                disabled={isLoading}
                type='submit'
              >
                  Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};
