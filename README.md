# Welcome to the Audiokinetic Frontends Test Assignment!

Here's what we'd like you to do:

1. Display a list of blog posts from the provided API.
    * Each blog card should display the **title, image, autor name and pubblish date**.
    * The list should scale on different screen sizes (no need to make anything **else** responsive!)
2. Implement filtering the list into the following categories:
    * "Latest": Should have a green gradient strip at the bottom of the card
    * "By Damian Kastbauer": The gradient strip should be blue, and the author name should be hidden
    * "All": The images should be smaller so that more cards can fit in a screen
3. Upon clicking the card, open a more detailed blog page
    * This page should display all the info from the card **and** the blog's text (**content**).

# API documentation

**List blogs**
----

* **URL**
GET https://ak-fe-assessment-mock-api.herokuapp.com/blogs
* **Sample response:**

  ```json
    [
        {
            "id": "d16d38e1-6171-42d4-814e-5ef895071c83",
            "title": "Reintroducing Wwise Audio Lab (WAL)",
            "imageUrl": "https://info.audiokinetic.com/hubfs/Blog_Images/Reintroducing%20the%20Wwise%20Audio%20Lab%20%28WAL%29/2021-08-31%2017_39_57-WAL_2021%20-%20Google%20Slides.jpg",
            "url": "https://blog.audiokinetic.com/reintroducing-wwise-audio-lab-wal",
            "authorName": "Damian Kastbauer",
            "authorUrl": "https://blog.audiokinetic.com/contributors/5026478587/",
            "publishedDate": "2021-09-30 18:13:36",
            "locale": "en_US",
            "tags": [
                "New Releases",
                "Spatial Audio",
                "Wwise Tips & Tools"
            ]
        }        
    ]
  ```

  
**Get blog**
----

* **URL**
GET https://ak-fe-assessment-mock-api.herokuapp.com/blogs/:id
* **Sample response:**

  ```json
    {
        "id": "d16d38e1-6171-42d4-814e-5ef895071c83",
        "title": "Reintroducing Wwise Audio Lab (WAL)",
        "imageUrl": "https://info.audiokinetic.com/hubfs/Blog_Images/Reintroducing%20the%20Wwise%20Audio%20Lab%20%28WAL%29/2021-08-31%2017_39_57-WAL_2021%20-%20Google%20Slides.jpg",
        "url": "https://blog.audiokinetic.com/reintroducing-wwise-audio-lab-wal",
        "authorName": "Damian Kastbauer",
        "authorUrl": "https://blog.audiokinetic.com/contributors/5026478587/",
        "publishedDate": "2021-09-30 18:13:36",
        "locale": "en_US",
        "tags": [
            "New Releases",
            "Spatial Audio",
            "Wwise Tips & Tools"
        ],
        "content": "lorem ipsum"
    }
  ```

# Afterword
You have 90 minutesd to complete the assignment.

Good luck, and have fun!
