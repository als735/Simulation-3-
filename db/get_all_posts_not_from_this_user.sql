select * from postings 
join users on postings.user_id = users.user_id 
where users.user_id != $1  