module.exports = time => {
  const timeArr = time.split(":");
  let [hours, mins, remaining] = timeArr;
  let [seconds, timePeriod] = remaining.split(" ");

  numHours = parseInt(hours);

  if (numHours === 12 && timePeriod === "AM") {
    numHours = "00";
  } else if (numHours < 12 && timePeriod === "PM") {
    numHours = numHours + 12;
  } else if(numHours < 10 && timePeriod === "AM") {
      return `0${numHours}:${mins}:${seconds}`
  }

  return `${numHours}:${mins}:${seconds}`;

};