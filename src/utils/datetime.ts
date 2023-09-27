import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { EventDataTypes } from "../../lib/types/EventDataTypes";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

function FilterContents(contents: EventDataTypes[]) {
  console.log("run")
  const now = dayjs().tz("Asia/Manila");

  function CheckExpiry(content: EventDataTypes) {
    const expiry = dayjs(content.expiry, "MMMM DD, YYYY hh:mm A").tz("Asia/Manila");
    const start = dayjs(content.start, "MMMM DD, YYYY hh:mm A").tz("Asia/Manila");

    return now.isBefore(expiry) && (now.isSame(start) || now.isAfter(start));
  }

  const filtered = contents.filter(CheckExpiry);

  return filtered;
}

export { FilterContents };

