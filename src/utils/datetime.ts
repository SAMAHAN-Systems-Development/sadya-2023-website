import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { EventDataTypes } from '../../lib/types/EventDataTypes';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

const CheckExpiry = (content: EventDataTypes) => {
  const now = dayjs().tz('Asia/Manila');
  const expiry = dayjs(content.expiry, 'MMMM DD YYYY hh:mm A').tz(
    'Asia/Manila'
  );
  const start = dayjs(content.start, 'MMMM DD YYYY hh:mm A').tz('Asia/Manila');
  return now.isBefore(expiry) && (now.isSame(start) || now.isAfter(start));
};

const FilterContents = (contents: EventDataTypes[]) => {
  const filtered = contents.filter(CheckExpiry);
  return filtered;
};

export { FilterContents };
