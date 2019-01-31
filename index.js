function createPost() {
  // create page template
  // insert post template into page template
  // pageTemplateHTML = pageTemplateFn({ newPost: postTemplate})
  const postAuthor = document.getElementById('postAuthor').value;
  const postTitle = document.getElementById('postTitle').value;
  const postBody = document.getElementById('postBody').value;

  const postTemplate = document.getElementById('post-template').innerHTML;
  const postTemplateFn = _.template(postTemplate);
  const postTemplateHTML = postTemplateFn({ postAuthor: postAuthor, postTitle: postTitle, postBody: postBody })

  

};

function postComment() {

};

function createPage(post) {
  const pageTemplate = document.getElementById('page-template').innerHTML;
  const pageTemplateFn = _.template(pageTemplate);
  const main = document.querySelector('main');
  const pageTemplateHTML = pageTemplateFn({ newPost: post });
  main.innerHTML += pageTemplateHTML;
};