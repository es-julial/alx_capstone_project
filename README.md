# Capstone Project : Personal Portfolio Website 

## Project Overview:

This is user-friendly Website with implemented visual appealing and Design, aso with selected  modules most of modules of latest U/X technologies.
What a best way to have services and skills visibilty through works and projects. That's a portolio asset.

In today's digital age, having a personal portfolio website has become essential for professionals in various fields. Whether you're a designer, writer, photographer, developer, or any other creative, a personal portfolio website is a great way to showcase your work, skills, and achievements to potential clients, employers, and collaborators.
A personal portfolio website can help you in several ways:

1. Establish a professional online presence: Having a personal portfolio website allows you to showcase your work and accomplishments in a professional and organized manner. It can help you stand out from the crowd and create a strong online presence.

2. Attract potential clients and employers: A personal portfolio website can help you attract potential clients, employers, and collaborators who are looking for someone with your skills and expertise. Your website can act as a showcase for your work, making it easier for people to understand your capabilities.

3. Display your work in a visually appealing way: With a personal portfolio website, you have complete control over how your work is displayed. You can create a visually appealing layout that highlights your best work and makes it easy for visitors to navigate.

4. Build credibility and trust: A personal portfolio website can help you build credibility and trust with potential clients, employers, and collaborators. It shows that you take your work seriously and that you're committed to your profession.

Now that we've established the importance of a personal portfolio website, let's talk about how to build one using the Personal Portfolio Webflow Template.

Webflow is a website builder that allows you to design and build responsive websites without any coding knowledge. The Personal Portfolio Webflow Template is a great starting point for creating a personal portfolio website.
Here's how to build a personal portfolio website using the Personal Portfolio Webflow Template:

## Technologies Used:
    Frontend: HTML, CSS, JavaScript
    Backend: React JS v6 (lastest)

## Screenshots or Demo:
 ![screenshot_a](https://zupimages.net/up/23/40/1v9t.png)

![screenshot_b](https://zupimages.net/up/23/41/xb5h.jpg)

## Features and Functionality
We have different types:
* The first one is what we call main stack, meaning it uses MongoDB, Express, React and Node.js.
* The next type of full stack application is what we call main stack, and that is MongoDB Express, Angular and Node.js.
* The next type of full stack application is what we call me Stack application, where M stands for MongoDB, E stand for Express, V, 
  stand for Vue and and stand for Node.js.
* The next type of full stack application is what we call lamp stack, and that is using Linux operating system, Apache, my SQL
     and PSP.

But for our full stack application we are going to use backend technologies, that is Nokia's, MongoD and Xpress.
And then for front end, we are going to use HTML for that.

The first concept is what we call express middleware. Because EXPRESS is all about middleware, and we use middleware to implement
business logic and authorization as well.

The next concept is file upload.

The next one is what we call template engine.

** To be more clear here!, We are not going to use React or Angular or Vue, but instead we are going to use HTML. And because of that
we are going to use advanced HTML core templates engine and that is Aegis. Then this one is what we call express routing, and then we
are going to use the more than design pattern called MVC, and that is model view controller design pattern.

The next concept is what we call error handling and data modeling and lastly, authentication and authorization.

## Interacting with users:
We are going to model our data for this application. So let's have a look at the logic behind the data flow. We are going to build a block
application. first step is we need to ask ourselves what are the users, who is going to use our application and what kind of data that we need.

For users we're going to have two types or three
types based on your business logic.

One is we can have the admin and then the super admin or any normal user, but for our case we are going to have two categories of users.
One is authenticated user and then normal user.

When we say authenticated, meaning that a user who has logged in and then the person can create and
then delete a post.

But for a normal user, the person can only view the post.

So the next entity or data that we need to handle is what we call post, because the entire logic about
application is about creating posts.

The next concept is what we call comment because a user can comment on your post.

And lastly, we are going to have what is called categories.

These entities is what we call model and mongoose.

So let's say how these models or entities or data are related.

And this is what we call database relationship, meaning how comment is being related to post and how  post is being related to categories,
users and comment. And for Mongoose, we have different types of database relationship. One is called 1 to 1 relationship, one to many or 
many to many relationships.
So let's see how these models are going to relate to each other.

==>

![screenshot_c](https://zupimages.net/up/23/40/thd8.png)

First step is let's focus on the users and then the post. t's going to be one to many relationships, meaning that a user can create many posts. 
So if a user view my profile or if I view my profile, I'll be able to see all the posts that I have created.

The next one going to be the users and then the comment. Again, a user can create many comments. So in this case it's going to be one to many relationships.
A user can create many comments, but one comment belongs to a single user.
You can see that this one represents this user and then the red represents this one as well.
So this show is that a comment belongs to a single user and for post and then the user is like I said, is going to be one to many relationships.
So if I view a single post or be able to see a single user who created that post, I won't be able to
see two or more users who has created a single post. The next one going to be the users and category for this one to a user can create many categories, 
but one category belongs to a single user. So this is what we call one to many relationship.
So let's look at the comments and posts: Definitely is going to be one to many relationships, meaning that a single post can have many comments, 
but one comment belongs to a single post.
So what about post? And then the category is going to be 1 to 1 relationship, or it can be one to many relationships, meaning that a post can 
belongs to two or more categories, but ideally a post belongs to a single category. For this one, it's up to you. If you want a post to belong to two or more categories.


When it comes to MongoDB, one is called using the embedded way, meaning that we are going to save the entire post into the user's field and 
this is what we call embedded, meaning we are using the entire
post into the arrays of user field and we have the nest type and that is what you call by referencing
meaning that instead of using the entire object, we are going to use only the idea of the post and
save it into the user's field. And this is the recommended way of doing it that is using the reference way.


## Roadmap and future enhancements:
Potentials improvements in the future, the Blog will be implemented in the larger website project to interact with users as members in the purpose of community website. 
And This could include additional features, performance optimizations, or scalability considerations.

## Contact Information:
        Author: *JULIAL MAESSER ESSEREKE*
        Email: **m_julial@yahoo.co.uk**
        Project: Personal Portfolio Website
        LinkedIn: http://linkedin.com/in/es-julial
        Twitter: **@es-julial**
        GitHub: https://github.com/es-julial

Project Prototype

https://lucid.app/lucidchart/916b2538-4bb4-4df8-9c95-807623034b30/edit?invitationId=inv_073ca621-5fca-494f-8382-cef5832b4dae&page=0_0#