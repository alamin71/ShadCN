import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Calendar } from './components/ui/calendar';

import { CardWithForm } from './components/card/Cards';
import { TableDemo } from './components/card/tables';
import { DataTableDemo } from './components/card/DataTables';
import { CarouselDemo } from './components/card/Carousel';
import { CarouselSpacing } from './components/card/Carousel2';

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <div className='mx-20'>
        <p className="text-4xl text-center">ShadcnUI</p>
        <div className="mb-2 mt-2 space-x-2">
          <Button variant={'destructive'}>ShadcnUI</Button>
          <Button variant={'ghost'}>ShadcnUI</Button>
          <Button variant={'outline'}>ShadcnUI</Button>
          <Button variant={'secondary'}>ShadcnUI</Button>
        </div>
        <div className="mt-2">
          <p className='text-2xl mb-2'>Calender</p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="mt-2">
          <p className='text-2xl mb-2'>Card</p>
          <div className='my-5'>
            <CardWithForm />
          </div>
        </div>
        <div className='py-2'>
          <p className='text-2xl'>Table</p>
          <TableDemo />
        </div>

        <div className='my-2'>
          <p className='text-2xl'>Data Table</p>
          <DataTableDemo />
        </div>

        <div className='my-2'>
          <p className='text-2xl'>Carousel</p>
          <CarouselDemo />
          <CarouselSpacing/>
        </div>
      </div>
    </>
  );
}

export default App;
