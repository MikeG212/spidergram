# Spidergram

Spidergram is a photo-sharing full-stack web application inspired by Instagram.  Instagram allows users to post their photos and see other users' photos.  I designed Spidergram using Ruby on Rails and React/Redux.

## Features
* Secure aunthentication for user login and signup with BCrypt
* Can create posts and upload images with Amazon Web Services
* Users can interact with posts by commenting and liking (create and delete)

## Searching for Users
Both my post index page and my search page rely on making a Get request to the Index method of the posts controller. Conditional logic allowed me to distinguish between these two options.
I created a separate search reducer so that search results would not muddle up the users slice of state.

```javascript
  def index
    if params.has_key?(:user_id)
      @posts = Post.includes(:comments).where(user_id: params[:user_id])
    else
      @posts = Post.includes(:comments).all.limit(10)
    end
    render :index
  end
```

## Technology
Spidergram was designed utilizing these key technologies:

### Backend
* Ruby on Rails
* PostgreSQL database
* Amazon Web Services for image storage
### Frontend
* React/Redux
* React DOM
* React Router
* jQuery
* Webpack

## Future Additions
Allowing users to tag other users in comments and photos.
Allowing users to create a customized photo-feed.
