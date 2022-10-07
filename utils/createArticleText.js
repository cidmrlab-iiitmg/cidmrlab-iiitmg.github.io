/**
 * @author: Nikhil Gupta (B.Tech CSE, 2019-2023)
 * @see: https://linkedin.com/in/theninza
 * @description: This file is a helper to create the html for the publications page from `file.txt` file. And should only run in a Node JS environment.
 */

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file.txt");

const fileContent = fs.readFileSync(filePath, "utf8");

const articles = fileContent.split("\n\n");

const articlesMap = articles.map((article) => {
  const authors = article.split(`“`)[0].slice(0, -2);
  const title = article.split(`“`)[1].split(`”`)[0];
  const journal = article.split(`”`)[1].slice(2).split(`)`)[0] + ")";
  const doi = article.split(`DOI: `)[1]?.replace("https://doi.org/", "");
  return { authors, title, journal, doi };
});

console.log(articlesMap);

const liTemplate = ({
  authors,
  title,
  journal,
  doi,
}) => `<li class="sub-section-list-item">
  <div class="publication-container">
    <div class="column left-col">
      <div class="publication-name">
        <a
          href=${
            doi
              ? `"https://doi.org/${doi}"`
              : `"https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=${title}"`
          }
          target="_blank"
        >
          ${title}
          </a>
      </div>
      <div class="publication-author">
        ${authors}
      </div>
    </div>
    <div class="column right-col">
      <div class="publication-domain">
        ${journal}
      </div>
      ${
        doi
          ? `<div class="publication-doi">
      DOI: ${doi}
    </div>`
          : ""
      }
    </div>
  </div>
</li>`;

const liList = articlesMap.map((article) => liTemplate(article)).join("\n");

fs.writeFileSync("liList.html", liList);
