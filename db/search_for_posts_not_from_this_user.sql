select * 
from postings 
join users on postings.user_id = users.user_id
where upper(postings.post_title) like upper($1)
and users.user_id != $2