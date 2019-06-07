select distinct * 
from users 
where email = $1 and user_password = $2 