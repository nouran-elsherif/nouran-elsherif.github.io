import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, url} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
      <h2 className="text-xl font-bold">{title}</h2>
        
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
        <a
          aria-label={location}
          className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-700  sm:-m-3 sm:p-3"
          href={url}
          key={location}>
                      <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>

        </a>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none text-violet-700">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
