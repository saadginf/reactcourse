import React from "react";
import BigCalendar from "react-big-calendar-like-google";
import moment from "moment";
import "react-big-calendar-like-google/lib/css/react-big-calendar.css";
import "moment/locale/fr";
import "./Calendar.css";
const Calendar = () => {
  BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
  const data = [
    {
      id: 1,
      title: "Apple Opening",
      eventEdition: "Edition 3",
      bgColor: "#52C652",
      startDate: "2021-08-16",
      endDate: "2021-08-16",
      country: {
        value: 3,
        label: "USA",
      },
    },
    {
      id: 2,
      title: "Ecom Intership",
      eventEdition: "Edition 3",
      bgColor: "#52C652",
      startDate: "2021-08-20",
      endDate: "2021-08-22",
      country: {
        value: 1,
        label: "India",
      },
    },
  ];

  return (
    <div className="calendar-container">
      <BigCalendar
        culture="fr"
        events={data}
        startAccessor="startDate"
        endAccessor="endDate"
        onSelectEvent={(event) => alert(event.title)}
        views={["month"]}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default Calendar;
