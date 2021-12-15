const url = "https://www.reddit.com/r/aww/.json";
const promise = fetch(url).then((res) => res.json());

function formatHandlebarsData(data) {
  const childrenObj = data.value.data.children;

  return childrenObj.map((element) => ({
    title: element.data.title,
    thumbnail: element.data.thumbnail,
  }));
}

Promise.allSettled([promise]).then(([data]) => {
  const handlebarsData = formatHandlebarsData(data);

  handlebarsData.forEach(function (item) {
    var li = document.createElement("li");
    console.log(`${item.title}`);
    var text = document.createTextNode(`${item.title}`);
    li.appendChild(text);
    document.getElementById("box").appendChild(li);
  });
  handlebarsData.forEach(function (item) {
    var imgAll = document.createElement("imgAll");
    console.log(`${item.thumbnail}`);
    var text2 = document.createTextNode(`${item.thumbnail}`);
    imgAll.appendChild(text2);
  });
});
