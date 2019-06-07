select * 
from postings 
join users on postings.user_id = users.user_id
where post_id = $1 