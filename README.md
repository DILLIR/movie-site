# Popcorn cinema

## Description/Overview
___
Popcorn cinema is a movie app made with React.  It fetchs movies from The Movie Database using API calls and present them in functional website. You can view the top playing movies, sort them by genre or search for other movies using the search in the navbar.

The idea of creating this project coms from this [repo](https://github.com/dangconnie/movie-app). I wanted to make project using react so intead using Bootstrap and JQuery as in the original repo, i decited to use React.

[GitHub repo](https://github.com/DILLIR/movie-site/tree/main)

## Jump right to the topic
___
[Description/Overview](#Description/Overview)

## Technologies
___
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
___
1. **Challenge:** One of the challenges was to make Infinite Scroll and render new films properly using react. 

    **Solution:** I used intersection observer api wich trecks wether an object is in sight and performs callback function wich fetchs new films. Also it is needed to pass to function current page, but not set it before calling, because changing state is async function wich do not affect straightly to the value. Also I decomposed this solutions in different parts.

    **using observer** 
    ```js
    const lastElement = useRef();

    useObserver(lastElement, page < totalPages,   isLoading, ()=>{
        setPage(p=>p+1);
    })
    ```
    **using useEffect** 
    ```js
    useEffect(() => {
        searchFilms(1);
    }, [params.query]);
    ```

