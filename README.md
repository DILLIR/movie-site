# Popcorn cinema

## Description/Overview

Popcorn cinema is a movie app made with React.  It fetchs movies from The Movie Database using API calls and present them in functional website. You can view the top playing movies, sort them by genre or search for other movies using the search in the navbar.

The idea of creating this project coms from this [repo](https://github.com/dangconnie/movie-app). I wanted to make project using react so intead using Bootstrap and JQuery as in the original repo, i decited to use React. This is my first project with React.

[GitHub repo](https://github.com/DILLIR/movie-site/tree/main)

## Jump right to the topic

[Description/Overview](#descriptionoverview)
[Technologies](#technologies)
[Challenges and solutions](#challenges-and-solutions)
[About site with screenshots](#about-site-with-screenshots)

## Technologies

All technologies I used are here.

**Main**
+ HTML
+ CSS
+ JavaScript
+ React

**Other**
+ git
+ react-router
+ node modules
+ create-react-app
+ Intersection Observer API
  
## Challenges and Solutions

1. **Challenge:** One of the challenges was to make Infinite Scroll and render new films properly using react. 

    **Solution:** I used intersection observer api wich trecks wether an object is in sight and performs callback function wich fetchs new films. Also it is needed to pass to function current page, but not set it before calling, because changing state is async function wich do not affect straightly to the value. Also I decomposed this solutions in different parts.

    **using observer** 
    ```js
    const lastElement = useRef();

    useObserver(lastElement, page < totalPages,   isLoading, ()=>{
        setPage(p=>p+1);
    })
    ```
   
2. **Challenge:** To implement infinite scroll into search page and to properly show the page of result.

     **Solution:** Firstly, I created new useEffect and aded dependecy search query, but it worked not good because when the query was changed, the page was still the same. I tried to change page state before featching, but because changing state is async function wich do not affect straightly to the value, fetching was with old value of page. So I change code a bit and now i passed page and set it in callback function of fetching.

    **using useEffect** 
    ```js
    useEffect(() => {
        searchFilms(1);
    }, [params.query]);
    ```
## About site with screenshots

The first what you see when you open a site is its main page where you can current premiers and you can scroll down to load more of them.

![main page](readme_img/1.png)

![main page](readme_img/2.png)

You can click on every poster and see pop up with information about this film

![main page](readme_img/3.png)

Also you can click on genres and select you favourite to view films from it.


![main page](readme_img/4.png)

![main page](readme_img/8.png)

And the last but not the least page is search page. You can type your search query into input in navbar and click submit or press Enter to serch. Then the search page is loaded with results.

![main page](readme_img/7.png)

If you have bad internet connection, you will need to wait for images to load and while they are loading, you will see gray placeholders.

![main page](readme_img/6.png)


