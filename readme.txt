Copy this folder in node environment 
open cmd go to this folder
type npm i or npm install


run code using npm start
Default port : 2001

database: test_database
table : tbl_movie
username: root
password: ''
host: localhost
Please on wamp or lamp server

download postman to test apis 

URL to pass in postman
http://localhost:2001/RouterHandler
    just pass action that what you want like insert, update, delete, select
    to insert
        movie_id:487455
        movie_title:Sonu k 
        movie_category:comedy
        movie_year:2019
        movie_summary:Comedy full
        user_id:10060513
        user_name:Premal
        action:insert

    to select (if you pass movie_id then search according to that otherwise give full data )
        movie_id:487455
        action:select

    to update  (in update movie_id is necessary otherwise get error in console)
        movie_id:487455
        movie_title:Sonu k 
        movie_category:comedy
        movie_year:2019
        movie_summary:Comedy full
        user_id:10060513
        user_name:Premal
        action:update

    to delete (in delete movie_id is necessary otherwise get error in console)
        movie_id:487455
        action:delete

(Note: its just a overall api to hit and get thats it. it will be make in proper way but my laptop is windows base and I am using linux for nodejs so littlebit confusion is there so I have done normally. I have used logger, router and more than these things in linux.)