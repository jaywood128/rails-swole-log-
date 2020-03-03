# README

# Swolelog 

# About 

Swolelog is a weightlifting journal for tracking your strength progress for classic compound movements: barebell squat, bench press, strict barebell press, deadlift, and barebell row. 


Built using Ruby on Rails to handle the backend, user authenthication, and provide a RESTful Api. For the Front End, all asynchronous HTTP calls use the fetch API and JavaScript. 

To provide a more seam-less user interface, I am using classList.toggle on each element to hide and show exercise sets and data. 

The navbar and form buttons are all using the Bootstrap framework. 

![Swolelog Demo](https://media.giphy.com/media/jtvCaSfw52koZnsAuR/giphy.gif)




* Ruby version
  ruby 2.6.1p33
  Rails 5.2.4

* Database creation

After cloning repo, `run rake:db migrate` to create database tables. 

Run `rails s` to run the local sever. 





