
import React from "react";
import Card from "./Card";
import i from "../asets/IMG_20210208_002427.jpg";

const group_map = {
  0: "No priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
  "usr-1": "Anoop sharma",
  "usr-2": "Yogesh",
  "usr-3": "Shankar",
  "usr-4": "Ramesh",
  "usr-5": "Suresh",
};

function groupBy(tickets, groupOption) {
  return tickets.reduce((groups, ticket) => {
    const key = groupOption === "status" ? ticket.status : 
                groupOption === "user" ? ticket.userId : 
                ticket.priority;
    
    groups[key] = groups[key] || [];
    groups[key].push(ticket);
    return groups;
  }, {});
}

function sortGroupedTickets(groupedTickets, orderOption) {
  return Object.keys(groupedTickets).reduce((sorted, key) => {
    sorted[key] = groupedTickets[key].sort((a, b) => {
      if (orderOption === "priority") {
        return b.priority - a.priority;
      } else if (orderOption === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    return sorted;
  }, {});
}

function Filter({ tickets, groupOption, orderOption }) {
  const groupedTickets = groupBy(tickets, groupOption);
  const orderedGroupedTickets = sortGroupedTickets(groupedTickets, orderOption);

  return (
    <div className="Filter d-flex">
      {Object.keys(orderedGroupedTickets).map((group) => (
        <div key={group} className="group">
          <div className="con">
            <h2 className="columnname">{group_map[group]}</h2>
            {/* <img src={i} alt="img" /> */}
          </div>
          <div>
            {orderedGroupedTickets[group].map(
              ({ id, title, tag, priority, userId }) => (
                <Card
                  key={id}
                  title={title}
                  id={id}
                  tag={tag}
                  priority={priority}
                  userId={userId}
                />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filter;

