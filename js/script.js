// 'use strict';
// // handler funkcja wykonaywana w rekacji na event  
const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');
    /* [DONE]remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }
    /* {DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log("articleSelector: ", articleSelector);
    /* [DONE]find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log("targetArticle: ", targetArticle);
    /* [DONE]add class 'active' to the correct article */
    targetArticle.classList.add('active');
}

const optArticleSelector = ".post",
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
function generateTitleLinks() {
    console.log('generate was done', generateTitleLinks)
    /* [DONE]remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    /* for each the articles and save them to variable */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    for (let article of articles) {
        /* get the article id */
        articleId = article.getAttribute('id');
        /* find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        /* get the title from the title element */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        /* create HTML of the link */
        titleList.innerHTML = titleList.innerHTML + linkHTML;
        /* insert link into variable */
        html = html + linkHTML;
    }
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}
generateTitleLinks();