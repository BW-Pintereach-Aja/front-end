import React from "react";
import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import ArticleCard from "./ArticleCard";

jest.mock("./api/fetchShow");

const dataShow = {
  data: [
    {
      id: 0,
      aboutCategory: "General frontend stuff",
      articleDesc: "...to become a Frontend Master in 2020",
      articleID: 4,
      articleTitle: "9 Projects you can do to...",
      category: "Frontend",
      url: "https://dev.to/simonholdorf/9-projects-you-can-do-to-become-a-frontend-master-in-2020-n2h",
      user: "user",
      userID: 3,
    },
    {
        id: 1,
aboutCategory: "desc",
articleDesc: "New Article",
articleID: 43,
articleTitle: "Hello 2222255555",
category: "New",
url: "https://www.sunnyskyz.com/blog/3142/This-Family-s-Announcement-Of-Their-4th-Child-Is-Hilarious",
user: "user",
userID: 3,
    }
  ]


mockFetchShow.mockResolvedValueOnce(dataShow);
test("Testing card to check the information came through", async () => {
  const { getByText } = render(<ArticleCard />);
  await wait();
  getByText(/to become a Frontend/i);
  getByText(/Hello 2222255555/i);
});