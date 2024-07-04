import React from 'react';
import Image from 'next/image';
import event1 from '@/app/assets/images/event1.jpg';
import event2 from '@/app/assets/images/event2.jpg';
import event3 from '@/app/assets/images/event3.jpg';
import event4 from '@/app/assets/images/event2.jpg';

const events = [
  { id: 1, image: event1, title: 'Workshop on Example 101' },
  { id: 2, image: event2, title: 'Workshop on Example 101' },
  { id: 3, image: event3, title: 'Workshop on Example 101' },
  { id: 4, image: event4, title: 'Workshop on Example 101' },
];

const OurEvents = () => {
  return (
    <section className="py-16 px-10">
      <h2 className="text-center text-4xl font-bold mb-8">Our Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-md p-4 h-[15rem] flex-colm shadow-lg">
            <Image src={event.image} alt={event.title} className="w-full h-32 object-cover rounded-t-md" />
            <h4 className="text-lg font-bold mt-4">{event.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurEvents;
