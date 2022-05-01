function solution(record) {
  let doc = [];
  let profile = [];
  let answerText = [];
  for (let i = 0; i < record.length; i++) {
    doc.push(record[i].split(" "));
  }
  //   console.log(doc);
  for (let i = 0; i < doc.length; i++) {
    if (doc[i][0] === "Enter") {
      if (profile.length === 0) {
        profile.push([doc[i][1], doc[i][2]]);
      } else {
        // 프로파일이 1개보다 크므로 같은 것이 있다면 순회해서 찾아서 바꿉니다.
        for (let j = 0; j < profile.length; j++) {
          if (doc[i][1] === profile[j][0]) {
            profile[j][1] = doc[i][2];
            break;
          } else {
            profile.push([doc[i][1], doc[i][2]]);
            break;
          }
        }
      }
    } else if (doc[i][0] === "Change") {
      for (let j = 0; j < profile.length; j++) {
        if (doc[i][1] === profile[j][0]) {
          profile[j][1] = doc[i][2];
        }
      }
    }
  }
  console.log(profile);
  for (let i = 0; i < doc.length; i++) {
    {
      if (doc[i][0] === "Enter") {
        for (let j = 0; j < profile.length; j++) {
          if (doc[i][1] === profile[j][0]) {
            answerText.push(profile[j][1] + "님이 들어왔습니다.");
          }
        }
      }
      if (doc[i][0] === "Leave") {
        for (let j = 0; j < profile.length; j++) {
          if (doc[i][1] === profile[j][0]) {
            answerText.push(profile[j][1] + "님이 나갔습니다.");
          }
        }
      }
    }
  }
  console.log(answerText);
  var answer = answerText;

  return answerText;
}
let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
solution(record);
