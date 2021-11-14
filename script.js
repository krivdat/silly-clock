const leftLeg = document.querySelector('.left-leg');
const rightLeg = document.querySelector('.right-leg');
const secsLine = document.querySelector('.seconds');
const leftLegNoonDegree = 245;
const rightLegNoonDegree = 175;
let prevLeftDegree, prevRightDegree, prevSecsDegree;

const moveLegs = (leftDegree, rightDegree, secsDegree) => {
  if (leftDegree != prevLeftDegree || rightDegree != prevRightDegree) {
    leftLeg.style.transform = `rotate(${leftDegree}deg)`;
    rightLeg.style.transform = `rotate(${rightDegree}deg)`;
    prevLeftDegree = leftDegree;
    prevRightDegree = rightDegree;
  }
  if (prevSecsDegree != secsDegree) {
    secsLine.style.transform = `rotate(${secsDegree}deg)`;
    prevSecsDegree = secsDegree;
  }
};

const runClock = () => {
  const time = new Date();
  let hrs = time.getHours();
  // let hrs = 12;
  const mins = time.getMinutes();
  // let mins = 0;
  const secs = time.getSeconds();

  if (hrs > 12) {
    hrs -= 12;
  }
  let hrsDegree = (360 / 12) * (hrs + mins / 60) + leftLegNoonDegree;
  if (hrsDegree > 360) {
    hrsDegree -= 360;
  }

  let minsDegree = (360 / 60) * mins + rightLegNoonDegree;
  if (minsDegree > 360) {
    minsDegree -= 360;
  }

  let secsDegree = (360 / 60) * secs;

  moveLegs(hrsDegree, minsDegree, secsDegree);
  // console.log({ hrs, mins, secs, hrsDegree, minsDegree, secsDegree });
};

runClock();
const clockInterval = setInterval(runClock, 1000);
