"use client"

import { useState } from 'react';


const tabs = [
  { id: 1, title: 'Tab 1', content: 'Content for Tab 1' },
  { id: 2, title: 'Tab 2', content: 'Content for Tab 2' },
  { id: 3, title: 'Tab 3', content: 'Content for Tab 3' },
];

const Test = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex h-screen bg-white mt-20">
      <div className="flex-none w-1/4">
        <div className="flex flex-col">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={(
                'py-2 px-4 text-left border-b',
                {
                  'bg-gray-200': activeTab.id === tab.id,
                  'hover:bg-gray-100': activeTab.id !== tab.id,
                }
              )}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-xl font-bold">{activeTab.title}</h2>
        <p>{activeTab.content}</p>
      </div>
    </div>
  );
};

export default Test;
