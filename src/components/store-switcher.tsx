'use client';

import { useParams, useRouter } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useStoreModal } from '@/src/hooks/use-store-modal';
import { useState } from 'react';
import { StoreModel } from '@/src/models/store.model';
import { Button } from './ui/button';
import { Check, ChevronsUpDown, PlusCircle, Store } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command';

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: StoreModel[];
  isLoading: boolean
}

export const StoreSwitcher = ({ className, items, isLoading }: StoreSwitcherProps) => {
  const [open, setOpen] = useState(false);
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const currentStore = items.find((item) => item.id === params.storeId)

  const onStoreSelect = (store: StoreModel) => {
    setOpen(false);
    router.push(`/${store.id}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          role='combobox'
          aria-expanded={open}
          aria-label='Select store'
          className={cn('w-[200px] justify-between', className)}
        >
          <Store className='mr-2 h-4 w-4' />
          {currentStore?.name || 'Select store'}
          <ChevronsUpDown className='ml-auto h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      { !isLoading && <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandList>
            <CommandInput placeholder='Search store...' />
            <CommandEmpty>No store found</CommandEmpty>
            <CommandGroup heading='Stores'>
              {items.map((store) => (
                <CommandItem
                  key={store.id}
                  onSelect={() => {
                    onStoreSelect(store);
                  }}
                  className='text-sm'
                >
                  <Store className='mr-2 h-4 w-4' />
                  {store.name}
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      currentStore?.id === store.id
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  storeModal.onOpen();
                }}
              >
                <PlusCircle className='mr-2 h-5 w-5' />
                Create store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>}
    </Popover>
  );
};

export default StoreSwitcher;
