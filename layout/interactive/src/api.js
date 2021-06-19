export function getMetaFromURl(url) {
  console.log(url);
  //   ogs({ url: url }).then((data) => {
  //     const { error, result, response } = data;
  //     console.log("error:", error); // This is returns true or false. True if there was a error. The error it self is inside the results object.
  //     console.log("result:", result); // This contains all of the Open Graph results
  //     console.log("response:", response); // This contains the HTML of page
  //   });
  // }
  return fetch("http://localhost:3000/url=" + encodeURIComponent(url))
    .then((result) => result.json())
    .catch(() => ({}));
}

export const getArticles = async () => {
  const result = JSON.stringify({
    data: [
      {
        header: "4 Must-Know Higher-Order Functions in JavaScript",
        image: "https://miro.medium.com/max/700/1*LLnw6gFGtMDwiMNqWFAz-Q.jpeg",
        text:
          "Higher-Order functions are one of those things in JavaScript that sounds incredibly complicated, but isn’t.",
        addDate: "19.01.2021",
        src: "https://medium.com/",
        tags: ["web", "JS", "frontend", "clear code"],
        read: false,
      },
      {
        header: "4 Must-Know Higher-Order Functions in JavaScript",
        image: "https://miro.medium.com/max/1000/1*Y4yWh-cAcxr2NNHkddpDIA.jpeg",
        text:
          "Higher-Order functions are one of those things in JavaScript that sounds incredibly complicated, but isn’t.",
        addDate: "19.01.2021",
        src: "https://medium.com/",
        tags: ["web", "JS", "frontend", "clear code"],
        read: true,
      },
    ],
  });
  return await JSON.parse(result).data;
};
