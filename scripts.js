const images = {
  "09:38": 1, // 0 + 1 + 0 + 0 + 0
  "09:39": 1, // 0 + 1 + 0 + 0 + 0
  "09:40": 1, // 0 + 1 + 0 + 0 + 0
  "09:42": 1, // 0 + 1 + 0 + 0 + 0
  "09:43": 2, // 0 + 2 + 0 + 0 + 0
  "09:46": 1, // 0 + 1 + 0 + 0 + 0
  "09:56": 2, // 0 + 0 + 2 + 0 + 0
  "09:57": 1, // 0 + 1 + 0 + 0 + 0
  "09:58": 2, // 0 + 1 + 1 + 0 + 0
  "09:59": 1, // 0 + 0 + 1 + 0 + 0
  "10:02": 1, // 0 + 0 + 1 + 0 + 0
  "10:03": 1, // 0 + 0 + 1 + 0 + 0
  "10:05": 2, // 0 + 1 + 1 + 0 + 0
  "10:14": 2, // 0 + 2 + 0 + 0 + 0
  "10:15": 1, // 0 + 1 + 0 + 0 + 0
  "10:41": 1, // 0 + 0 + 1 + 0 + 0
  "10:42": 2, // 0 + 0 + 1 + 1 + 0
  "10:43": 1, // 0 + 0 + 0 + 1 + 0
  "10:45": 2, // 0 + 0 + 1 + 1 + 0
  "10:46": 2, // 0 + 0 + 0 + 2 + 0
  "10:47": 1, // 0 + 0 + 0 + 1 + 0
  "10:50": 1, // 0 + 0 + 0 + 1 + 0
  "10:51": 2, // 0 + 0 + 2 + 0 + 0
  "10:52": 1, // 0 + 0 + 0 + 1 + 0
  "10:53": 1, // 0 + 0 + 1 + 0 + 0
  "10:56": 1, // 0 + 0 + 1 + 0 + 0
  "11:00": 1, // 0 + 0 + 1 + 0 + 0
  "11:01": 1, // 0 + 0 + 0 + 1 + 0
  "11:03": 3, // 2 + 0 + 0 + 1 + 0
  "11:05": 2, // 1 + 0 + 1 + 0 + 0
  "11:06": 1, // 1 + 0 + 0 + 0 + 0
  "11:08": 1, // 1 + 0 + 0 + 0 + 0
  "11:09": 1, // 1 + 0 + 0 + 0 + 0
  "11:12": 1, // 0 + 0 + 0 + 1 + 0
  "11:16": 2, // 0 + 0 + 0 + 0 + 2
  "11:17": 1, // 0 + 0 + 0 + 0 + 1
  "11:18": 3, // 0 + 0 + 0 + 0 + 3
  "11:19": 3, // 0 + 0 + 0 + 1 + 2
  "11:20": 5, // 0 + 0 + 0 + 2 + 3
  "11:21": 1, // 0 + 0 + 0 + 1 + 0
  "11:22": 1, // 0 + 0 + 0 + 0 + 1
  "11:23": 1, // 0 + 0 + 0 + 1 + 0
  "11:24": 1, // 0 + 0 + 0 + 0 + 1
  "11:25": 1, // 0 + 0 + 0 + 1 + 0
  "11:27": 1, // 0 + 0 + 0 + 1 + 0
  "11:30": 1, // 1 + 0 + 0 + 0 + 0
  "11:34": 1, // 1 + 0 + 0 + 0 + 0
  "11:35": 1, // 1 + 0 + 0 + 0 + 0
  "11:37": 2, // 2 + 0 + 0 + 0 + 0
  "11:39": 1, // 1 + 0 + 0 + 0 + 0
  "11:46": 3, // 1 + 0 + 0 + 0 + 2
  "11:49": 1, // 0 + 0 + 0 + 0 + 1
  "11:50": 2, // 1 + 0 + 0 + 0 + 1
  "11:51": 1, // 0 + 0 + 0 + 0 + 1
  "11:53": 3, // 2 + 0 + 0 + 0 + 1
  "11:54": 2, // 1 + 0 + 0 + 0 + 1
  "11:56": 1, // 1 + 0 + 0 + 0 + 0
  "12:04": 1, // 1 + 0 + 0 + 0 + 0
  "12:14": 1, // 1 + 0 + 0 + 0 + 0
  "12:16": 1, // 1 + 0 + 0 + 0 + 0
  "12:20": 1, // 0 + 0 + 1 + 0 + 0
  "12:21": 2, // 0 + 0 + 2 + 0 + 0
  "12:22": 2, // 0 + 0 + 2 + 0 + 0
  "12:26": 1, // 1 + 0 + 0 + 0 + 0
  "12:28": 1, // 1 + 0 + 0 + 0 + 0
  "12:30": 2, // 2 + 0 + 0 + 0 + 0
  "12:37": 1, // 1 + 0 + 0 + 0 + 0
  "12:43": 1, // 1 + 0 + 0 + 0 + 0
  "12:51": 2, // 2 + 0 + 0 + 0 + 0
  "12:52": 1, // 1 + 0 + 0 + 0 + 0
  "13:06": 1, // 1 + 0 + 0 + 0 + 0
  "13:07": 2, // 2 + 0 + 0 + 0 + 0
  "13:09": 1, // 1 + 0 + 0 + 0 + 0
  "13:14": 1, // 1 + 0 + 0 + 0 + 0
  "13:15": 2, // 2 + 0 + 0 + 0 + 0
  "13:17": 1, // 1 + 0 + 0 + 0 + 0
  "13:18": 1, // 1 + 0 + 0 + 0 + 0
  "13:19": 2, // 2 + 0 + 0 + 0 + 0
  "13:21": 1, // 1 + 0 + 0 + 0 + 0
  "13:25": 1, // 1 + 0 + 0 + 0 + 0
  "13:29": 1, // 0 + 0 + 1 + 0 + 0
  "13:30": 1, // 0 + 0 + 1 + 0 + 0
  "13:31": 1, // 0 + 0 + 1 + 0 + 0
  "13:33": 1, // 0 + 0 + 1 + 0 + 0
  "13:35": 4, // 0 + 0 + 3 + 0 + 1
  "13:36": 4, // 0 + 0 + 1 + 0 + 3
  "13:37": 1, // 0 + 0 + 1 + 0 + 0
  "13:38": 2, // 0 + 0 + 1 + 0 + 1
  "13:39": 2, // 0 + 0 + 1 + 0 + 1
  "13:40": 3, // 0 + 1 + 0 + 0 + 2
  "13:41": 5, // 1 + 1 + 0 + 1 + 2
  "13:42": 3, // 0 + 0 + 0 + 1 + 2
  "13:43": 3, // 0 + 2 + 0 + 1 + 0
  "13:44": 3, // 0 + 1 + 0 + 1 + 1
  "13:45": 2, // 0 + 1 + 0 + 1 + 0
  "13:46": 5, // 1 + 2 + 0 + 1 + 1
  "13:47": 2, // 0 + 0 + 0 + 1 + 1
  "13:48": 3, // 0 + 1 + 0 + 1 + 1
  "13:49": 2, // 1 + 0 + 0 + 1 + 0
  "13:50": 3, // 0 + 1 + 0 + 1 + 1
  "13:51": 2, // 1 + 0 + 0 + 1 + 0
  "13:52": 2, // 1 + 1 + 0 + 0 + 0
  "13:53": 4, // 1 + 1 + 0 + 1 + 1
  "13:55": 1, // 0 + 0 + 0 + 1 + 0
  "13:56": 1, // 0 + 0 + 1 + 0 + 0
  "13:59": 1, // 0 + 1 + 0 + 0 + 0
  "14:02": 1, // 0 + 0 + 1 + 0 + 0
  "14:03": 1, // 0 + 0 + 0 + 1 + 0
  "14:07": 2, // 0 + 0 + 0 + 0 + 2
  "14:08": 1, // 0 + 0 + 1 + 0 + 0
  "14:09": 2, // 0 + 0 + 0 + 0 + 2
  "14:10": 1, // 0 + 0 + 0 + 0 + 1
  "14:12": 1, // 0 + 0 + 0 + 0 + 1
  "14:14": 2, // 0 + 0 + 0 + 0 + 2
  "14:16": 1, // 0 + 0 + 0 + 0 + 1
  "14:22": 1, // 0 + 0 + 0 + 1 + 0
  "14:23": 2, // 0 + 1 + 0 + 1 + 0
  "14:24": 1, // 0 + 1 + 0 + 0 + 0
  "14:25": 5, // 0 + 4 + 0 + 1 + 0
  "14:26": 2, // 0 + 1 + 1 + 0 + 0
  "14:28": 2, // 0 + 0 + 2 + 0 + 0
  "14:30": 1, // 0 + 0 + 1 + 0 + 0
  "14:31": 2, // 0 + 0 + 1 + 1 + 0
  "14:32": 2, // 0 + 0 + 1 + 1 + 0
  "14:33": 2, // 0 + 1 + 0 + 1 + 0
  "14:34": 3, // 0 + 1 + 1 + 1 + 0
  "14:35": 1, // 0 + 1 + 0 + 0 + 0
  "14:36": 3, // 0 + 1 + 0 + 2 + 0
  "14:41": 3, // 0 + 1 + 0 + 2 + 0
  "14:42": 3, // 0 + 1 + 0 + 2 + 0
  "14:43": 1, // 0 + 0 + 0 + 1 + 0
  "14:44": 1, // 0 + 0 + 0 + 1 + 0
  "14:45": 1, // 0 + 0 + 0 + 1 + 0
  "14:47": 1, // 0 + 1 + 0 + 0 + 0
  "14:48": 1, // 0 + 1 + 0 + 0 + 0
  "14:49": 1, // 0 + 1 + 0 + 0 + 0
  "14:50": 1, // 0 + 1 + 0 + 0 + 0
  "14:58": 2, // 0 + 2 + 0 + 0 + 0
  "14:59": 1, // 0 + 1 + 0 + 0 + 0
  "15:00": 2, // 0 + 2 + 0 + 0 + 0
  "15:02": 1, // 0 + 1 + 0 + 0 + 0
  "17:10": 1, // 0 + 0 + 1 + 0 + 0
  "17:11": 1, // 0 + 0 + 1 + 0 + 0
  "17:12": 1, // 0 + 0 + 1 + 0 + 0
  "17:14": 3, // 0 + 0 + 2 + 0 + 1
  "17:16": 1, // 0 + 0 + 0 + 0 + 1
  "17:18": 1, // 0 + 0 + 0 + 0 + 1
  "17:19": 1, // 0 + 0 + 0 + 0 + 1
  "17:20": 3, // 0 + 0 + 1 + 0 + 2
  "17:21": 1, // 0 + 0 + 0 + 0 + 1
  "17:22": 2, // 0 + 0 + 1 + 0 + 1
  "17:23": 1, // 0 + 0 + 0 + 0 + 1
  "17:25": 2, // 0 + 0 + 0 + 1 + 1
  "17:26": 2, // 0 + 0 + 1 + 0 + 1
  "17:27": 1, // 0 + 0 + 0 + 1 + 0
  "17:29": 1, // 0 + 0 + 0 + 1 + 0
  "17:32": 2, // 0 + 0 + 1 + 1 + 0
  "17:33": 2, // 0 + 0 + 0 + 2 + 0
  "17:34": 2, // 0 + 0 + 0 + 2 + 0
  "17:35": 3, // 1 + 0 + 2 + 0 + 0
  "17:36": 4, // 2 + 0 + 0 + 2 + 0
  "17:37": 1, // 1 + 0 + 0 + 0 + 0
  "17:38": 1, // 1 + 0 + 0 + 0 + 0
  "17:39": 2, // 1 + 0 + 0 + 1 + 0
  "17:41": 2, // 1 + 0 + 1 + 0 + 0
  "17:42": 3, // 1 + 0 + 0 + 1 + 1
  "17:43": 2, // 1 + 1 + 0 + 0 + 0
  "17:44": 1, // 1 + 0 + 0 + 0 + 0
  "17:45": 1, // 0 + 0 + 0 + 1 + 0
  "17:46": 1, // 0 + 0 + 1 + 0 + 0
  "17:47": 2, // 0 + 0 + 2 + 0 + 0
  "17:48": 1, // 0 + 0 + 1 + 0 + 0
  "17:49": 5, // 1 + 3 + 0 + 1 + 0
  "17:50": 2, // 2 + 0 + 0 + 0 + 0
  "17:51": 3, // 0 + 0 + 2 + 1 + 0
  "17:52": 2, // 0 + 1 + 0 + 1 + 0
  "17:53": 1, // 0 + 0 + 0 + 1 + 0
  "17:54": 3, // 0 + 0 + 0 + 0 + 3
  "17:55": 1, // 0 + 0 + 0 + 1 + 0
  "17:58": 2, // 1 + 0 + 0 + 0 + 1
  "17:59": 2, // 0 + 0 + 0 + 2 + 0
  "18:00": 1, // 1 + 0 + 0 + 0 + 0
  "18:01": 3, // 0 + 0 + 0 + 3 + 0
  "18:02": 2, // 1 + 0 + 0 + 1 + 0
  "18:04": 1, // 0 + 0 + 0 + 1 + 0
  "18:06": 2, // 0 + 0 + 0 + 2 + 0
  "18:13": 2, // 2 + 0 + 0 + 0 + 0
  "18:16": 1, // 1 + 0 + 0 + 0 + 0
  "18:17": 3, // 2 + 1 + 0 + 0 + 0
  "18:18": 1, // 1 + 0 + 0 + 0 + 0
  "18:22": 3, // 0 + 3 + 0 + 0 + 0
  "18:25": 2, // 0 + 2 + 0 + 0 + 0
  "18:29": 1, // 0 + 1 + 0 + 0 + 0
  "18:31": 1, // 1 + 0 + 0 + 0 + 0
  "18:33": 1, // 0 + 1 + 0 + 0 + 0
  "18:34": 1, // 0 + 1 + 0 + 0 + 0
  "18:36": 1, // 0 + 1 + 0 + 0 + 0
  "18:43": 1, // 1 + 0 + 0 + 0 + 0
  "18:47": 1, // 1 + 0 + 0 + 0 + 0
  "18:48": 1, // 1 + 0 + 0 + 0 + 0
  "18:49": 1, // 1 + 0 + 0 + 0 + 0
  "18:50": 2, // 2 + 0 + 0 + 0 + 0
  "23:09": 1, // 1 + 0 + 0 + 0 + 0
};

function getTime() {
  const date = new Date();
  const dayLength = 24 * 60 * 60 * 1000;
  const hrProgressed = date.getHours() * 60 * 60 * 1000;
  const minProgressed = date.getMinutes() * 60 * 1000;
  const secProgressed = date.getSeconds() * 1000;
  const millisecProgressed = date.getMilliseconds();
  let amPm = "AM";

  const percentage =
    ((hrProgressed + minProgressed + secProgressed + millisecProgressed) /
      dayLength) *
    100;

  // console.log(percentage);
  const pupilElts = document.getElementsByClassName("pupil");
  for (let i = 0; i < pupilElts.length; i++) {
    pupilElts[i].style.offsetDistance = percentage - 25 + "%";
  }

  let hr = Number(date.toTimeString().substring(0, 2));
  let min = date.toTimeString().substring(3, 5);
  let sec = date.toTimeString().substring(6, 8);

  if (hr >= 12) {
    hr = hr - 12;
    amPm = "PM";
  }

  if (hr < 10) {
    hr = "0" + hr;
  }

  if (hr === "00") {
    hr = 12;
  }

  const timeElt = document.querySelector(".time");
  timeElt.innerText = hr + ":" + min + ":" + sec + " " + amPm + " ";

  const dateElt = document.querySelector(".date");
  dateElt.innerText = " " + date.toDateString().substring(4);

  trackEncounters(date.getHours(), date.getMinutes());

  if (date.getSeconds() === 0) {
    displayImages(date.getHours(), date.getMinutes());
  }
  setTimeout(getTime, 1000);
}
getTime();

function trackEncounters(hour, minute) {
  const imgKeys = Object.keys(images);
  let encounterCount = 0;
  let lastHr = 0;
  let lastMin = 0;
  let lastAmPm = "AM";
  for (let i = 0; i < imgKeys.length; i++) {
    if (Number(imgKeys[i].substring(0, 2)) < hour) {
      encounterCount += images[imgKeys[i]];
    } else {
      if (
        Number(imgKeys[i].substring(0, 2)) === hour &&
        Number(imgKeys[i].substring(3, 5)) < minute
      ) {
        encounterCount += images[imgKeys[i]];
      }
    }
  }

  for (let j = 0; j < imgKeys.length; j++) {
    if (Number(imgKeys[j].substring(0, 2)) < hour) {
      lastHr = Number(imgKeys[j].substring(0, 2));
      lastMin = Number(imgKeys[j].substring(3, 5));
    } else {
      if (
        Number(imgKeys[j].substring(0, 2)) === hour &&
        Number(imgKeys[j].substring(3, 5)) < minute
      ) {
        lastHr = Number(imgKeys[j].substring(0, 2));
        lastMin = Number(imgKeys[j].substring(3, 5));
      }
    }
  }

  let lastHrText = lastHr;
  let lastMinText = lastMin;

  if (lastHrText >= 12) {
    lastHrText -= 12;
    lastAmPm = "PM";
  }

  if (lastHrText === 0) {
    lastHrText = 12;
  }

  if (lastHrText < 10) {
    lastHrText = "0" + lastHrText;
  }

  if (lastMinText < 10) {
    lastMinText = "0" + lastMinText;
  }

  const encounterCounterElt = document.querySelector(".encounter-counter span");
  encounterCounterElt.innerText = encounterCount;

  const lastEncounterElt = document.querySelector(".last-encounter span");
  lastEncounterElt.innerText = lastHrText + ":" + lastMinText + " " + lastAmPm;
}

function displayLabel(labelName) {
  const labelElt = document.querySelector(`.labels-container .${labelName}`);
  labelElt.style.display = "initial";
}

function hideLabel(labelName) {
  const labelElt = document.querySelector(`.labels-container .${labelName}`);
  labelElt.style.display = "none";
}

function displayInfo(labelName) {
  const infoElt = document.querySelector(`.info-container .${labelName}`);
  if (infoElt.style.visibility === "visible") {
    infoElt.style.visibility = "hidden";

    if (labelName === "description") {
      const labelElt = document.querySelector(`.labels-container .date`);
      labelElt.classList.remove("open");
    } else {
      const labelElt = document.querySelector(`.labels-container .time`);
      labelElt.classList.remove("open");
    }
  } else {
    infoElt.style.visibility = "visible";

    if (labelName === "description") {
      const labelElt = document.querySelector(`.labels-container .date`);
      labelElt.classList.add("open");
    } else {
      const labelElt = document.querySelector(`.labels-container .time`);
      labelElt.classList.add("open");
    }
  }
}

function displayImages(hour, minute) {
  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  const numImgs = images[hour + ":" + minute];
  // console.log(numImgs);
  // console.log("hr: " + hour);
  // console.log("min: " + minute);

  const main = document.querySelector("main");
  for (let i = 1; i < numImgs + 1; i++) {
    const newElt = document.createElement("img");
    newElt.src = `./images/${hour}_${minute} ${i}.png`;
    newElt.alt = `Card ${i} for ${hour}:${minute}`;

    const randoTop = Math.floor(Math.random() * 81);
    const randoLeft = Math.floor(Math.random() * 81);
    newElt.style.top = randoTop + "vmin";
    newElt.style.left = randoLeft + "vw";

    const randoTime = Math.floor(Math.random() * 40);
    setTimeout(() => {
      main.appendChild(newElt);
    }, randoTime * 1000);
    setTimeout(() => {
      main.removeChild(newElt);
    }, randoTime * 1000 + 20000);
  }
}
