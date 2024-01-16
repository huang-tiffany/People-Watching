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

const imgArr = Object.keys(images);
const main = document.querySelector("main");
function loadImgs() {
  for (let i = 0; i < imgArr.length; i++) {
    const hour = imgArr[i].substring(0, 2);
    const minute = imgArr[i].substring(3, 5);

    for (let j = 1; j < images[imgArr[i]] + 1; j++) {
      const newElt = document.createElement("img");
      newElt.src = `./images/${hour}_${minute} ${j}.png`;
      newElt.alt = `Card ${j} for ${hour}:${minute}`;

      console.log(newElt);
      main.appendChild(newElt);
    }
  }
}

loadImgs();