const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "title-1",
    body: "body-1"
  },
  {
    id: 2,
    title: "title-2",
    body: "body-2"
  },
  {
    id: 3,
    title: "title-3",
    body: "body-3"
  },
  {
    id: 4,
    title: "title-4",
    body: "body-4"
  },
  {
    id: 5,
    title: "title-5",
    body: "body-5"
  },
  {
    id: 6,
    title: "title-6",
    body: "body-6"
  },
  {
    id: 7,
    title: "title-7",
    body: "body-7"
  }
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPost = async id => {
  await sleep(500);
  return posts.find(post => post.id === id);
};
