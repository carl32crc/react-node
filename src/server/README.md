## Config Header Authentication in Postman

```
Have default value 'true' in Authorization header for simulation user logged.
------------------------------------------
| Authorization  |  True
------------------------------------------
```

## Simulation user athenticated with Role 'admin' default
Can change role 'admin' to 'user' in file:

```
 ./resources/simulationUserLogged.json  
```

## Routes of api

+ Get user data filtered by user id -> Can be accessed by users with role "users"
and "admin"

```
http://localhost:3004/api/user-id/a0ece5db-cd14-4f21-812f-966633e7be86
```

+ Get user data filtered by user name -> Can be accessed by users with role
"users" and "admin"

```
http://localhost:3004/api/user-name/Maynard
```

+ Get the list of policies linked to a user name -> Can be accessed by users with
role "admin"

```
http://localhost:3004/api/policies/Britney
```

+ Get the user linked to a policy number -> Can be accessed by users with role
"admin"

```
http://localhost:3004/api/policy/7b624ed3-00d5-4c1b-9ab8-c265067ef58b
```